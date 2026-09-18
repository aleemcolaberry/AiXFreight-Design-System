#!/usr/bin/env node
// AiXFreight design-system page check.
// Usage: node check-page.mjs <file-or-folder> [...more]
// Scans .html, .jsx, .tsx, .js, .ts, .css, .vue, .svelte files for the mechanical
// parts of the non-negotiables. It cannot judge layout or copy quality; it catches
// the things that are always wrong. Exit code 1 when any error is found.

import { readFileSync, statSync, readdirSync } from 'node:fs';
import { join, extname } from 'node:path';

const EXT = new Set(['.html', '.htm', '.jsx', '.tsx', '.js', '.ts', '.css', '.vue', '.svelte', '.mjs']);
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', 'build', '.next']);

// Every hex the token files define (light + dark), plus white/black shorthands.
const PALETTE = new Set([
  '#0A1931', '#12244A', '#1B3160', '#2A4470', '#FF6B00', '#E05E00', '#FF8A33', '#FFE8D6', '#4A2A10', '#FFAB00', '#FFF1CC',
  '#3A4450', '#E2E8F0', '#2FA8DC', '#3FC0F0', '#0F55A0', '#4A9BE8', '#6FB2F0', '#0F8B8F', '#3FC7CB', '#D5F0F0', '#0F3A3C',
  '#475569', '#8593A5', '#8FA3BA', '#C7D2DE', '#F1F5F9', '#F8FAFC', '#FFFFFF', '#000000',
  '#8A5A00', '#FFC44D', '#3D2E00', '#D63B1F', '#B8321A', '#FF7A5C', '#FBE1DB', '#4A1A10', '#DCE9F7', '#15335F',
].map((h) => h.toUpperCase()));

const FONT_OK = /saira condensed|ibm plex sans|ibm plex mono|var\(--font-|system-ui|ui-monospace|monospace|sans-serif|inherit/i;

function* walk(p) {
  const st = statSync(p);
  if (st.isDirectory()) {
    for (const name of readdirSync(p)) {
      if (SKIP_DIRS.has(name)) continue;
      yield* walk(join(p, name));
    }
  } else if (EXT.has(extname(p).toLowerCase())) {
    yield p;
  }
}

function expandHex(h) {
  const x = h.slice(1);
  if (x.length === 3 || x.length === 4) return '#' + x.slice(0, 3).split('').map((c) => c + c).join('').toUpperCase();
  return '#' + x.slice(0, 6).toUpperCase();
}

function stripComments(src) {
  return src.replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '))
            .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));
}

function check(file) {
  const raw = readFileSync(file, 'utf8');
  // Design-system source and Claude Design's template runtime helpers are not page code.
  const isDsSource = /[\\/]components[\\/][a-z]+[\\/][A-Za-z]+\.jsx$/.test(file) || /[\\/]tokens[\\/]/.test(file)
    || /_ds_bundle\.js$/.test(file) || /(support|deck-stage|ds-base)\.js$/.test(file) || /\.min\.js$/.test(file);
  if (isDsSource) return [];
  const src = stripComments(raw);
  const lines = src.split('\n');
  const out = [];
  const add = (level, line, rule, msg) => out.push({ level, line, rule, msg });

  // Per-line checks
  lines.forEach((ln, i) => {
    const n = i + 1;

    // 1. Raw hex outside the palette
    for (const m of ln.matchAll(/#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b/g)) {
      const hex = expandHex(m[0]);
      if (!PALETTE.has(hex)) add('error', n, 'palette', `hex ${m[0]} is not a design-system color; use a token (var(--…))`);
    }

    // 2. Gradients other than the navy photo scrim. A fade from transparent to the page surface
    //    (the scroll mask under a sticky bar) is a mask, not decoration, and is allowed.
    if (/(linear|radial|conic)-gradient\(/.test(ln)
        && !/scrim-navy|rgba\(10,\s*25,\s*49/.test(ln)
        && !/gradient\([^)]*(rgba\(248,\s*250,\s*252,\s*0\)|transparent)[^)]*(#F8FAFC|var\(--surface-page\)|var\(--surface-card\))/i.test(ln)) {
      add('error', n, 'flat-solids', 'gradient found; the only permitted gradients are var(--scrim-navy) over photography and a transparent-to-surface scroll fade under a sticky bar');
    }

    // 3. Emoji (Extended_Pictographic also covers ©, ®, ™ and arrows below U+2600; those are typography, not emoji)
    for (const m of ln.matchAll(/\p{Extended_Pictographic}/gu)) {
      if (m[0].codePointAt(0) >= 0x2600) { add('error', n, 'no-emoji', `emoji ${m[0]} found; use <Icon name="…"/> from the Lucide subset`); break; }
    }

    // 4. Exclamation marks in visible copy (skip !=, !==, !important, !!, !x)
    const copy = ln.replace(/!==?/g, '').replace(/!important/gi, '').replace(/!!/g, '').replace(/!\s*[A-Za-z_$(]/g, '');
    if (/[A-Za-z0-9.,)…]!/.test(copy)) add('error', n, 'no-exclamation', 'exclamation mark in copy; the voice is a calm operator');

    // 5. Banned words
    if (/\bsuccessfully\b/i.test(ln)) add('error', n, 'copy', '"successfully" is banned; write the past-tense verb + object ("Route updated")');
    if (/\b(our robot|I think|I recommend|I've|I have rerouted)\b/i.test(ln)) add('warn', n, 'copy', 'the AI is never named or given a first person ("the AI recommends")');

    // 6. nowrap without ellipsis on the same line
    if (/white-?space\s*:\s*['"]?nowrap|whiteSpace\s*:\s*['"]nowrap/i.test(ln) && !/ellipsis|aix-truncate|overflow\s*:\s*['"]?hidden|overflow\s*:\s*['"]hidden/i.test(ln)) {
      add('warn', n, 'overflow', 'nowrap without overflow:hidden + text-overflow:ellipsis; one-line slots must truncate with a title');
    }

    // 7. Font families outside the three faces
    for (const m of ln.matchAll(/font-?[fF]amily\s*:\s*['"]?([^;'"}\n]+)/g)) {
      if (!FONT_OK.test(m[1])) add('error', n, 'type', `font-family "${m[1].trim()}" is not Saira Condensed / IBM Plex Sans / IBM Plex Mono`);
    }

    // 8. IconButton without a label
    for (const m of ln.matchAll(/<IconButton\b([^>]*)>/g)) {
      if (!/\blabel\s*=/.test(m[1])) add('error', n, 'a11y', '<IconButton> without label; screen readers need it');
    }

    // 9. Placeholder-only fields
    for (const m of ln.matchAll(/<(Input|Select|Textarea)\b([^>]*)>/g)) {
      if (/placeholder\s*=/.test(m[2]) && !/\blabel\s*=/.test(m[2]) && !/icon\s*=\s*["']search["']/.test(m[2])) {
        add('warn', n, 'a11y', `<${m[1]}> has a placeholder but no label; fields need a visible mono-caps label`);
      }
    }

    // 10. Removed focus outline without replacement
    if (/outline\s*:\s*(none|0)\b/.test(ln) && !/focus-ring|box-shadow/.test(ln)) {
      add('warn', n, 'a11y', 'outline removed without a --focus-ring box-shadow replacement');
    }
  });

  // 11. Primary buttons per view. A Dialog or Drawer is its own view (it covers the page),
  //     so count the page body and each overlay separately.
  const isPrimary = (attrs) => !/\bvariant\s*=/.test(attrs) || /variant\s*=\s*["']primary["']/.test(attrs);
  const lineOf = (idx) => src.slice(0, idx).split('\n').length;
  const views = [];
  let body = src;
  for (const m of src.matchAll(/<(Dialog|Drawer)\b[\s\S]*?<\/\1>/g)) {
    views.push({ name: m[1] + ' at L' + lineOf(m.index), text: m[0], offset: m.index });
    body = body.slice(0, m.index) + ' '.repeat(m[0].length) + body.slice(m.index + m[0].length);
  }
  views.unshift({ name: 'page body', text: body, offset: 0 });
  for (const v of views) {
    const primaries = [...v.text.matchAll(/<Button\b([^>]*)>/g)].filter((m) => isPrimary(m[1]));
    if (primaries.length > 1) {
      const at = primaries.map((m) => lineOf(v.offset + m.index));
      add('warn', at[0], 'one-orange',
        `${primaries.length} primary (orange) <Button>s in the ${v.name} (lines ${at.join(', ')}); a view gets one. Button defaults to primary, so give the others variant="secondary|ghost|navy" unless they belong to different views (tabs, steps) that never show together`);
    }
  }

  // 12. Mode color reassignment: mode tokens used as generic decoration
  const modeMisuse = [...src.matchAll(/--color-(land|air|ocean|eco)\b/g)].length;
  const modeBadges = (src.match(/<ModeBadge\b|<RouteLine\b|<Progress\b[^>]*mode=/g) || []).length;
  if (modeMisuse > 6 && modeBadges === 0) {
    add('warn', 0, 'mode-colors', `mode color tokens used ${modeMisuse} times with no ModeBadge/RouteLine/Progress mode=; check they still encode transport mode, not decoration`);
  }

  return out;
}

const targets = process.argv.slice(2);
if (!targets.length) {
  console.error('usage: node check-page.mjs <file-or-folder> [...]');
  process.exit(2);
}

let errors = 0, warns = 0, files = 0;
for (const t of targets) {
  for (const file of walk(t)) {
    files++;
    const findings = check(file);
    if (!findings.length) continue;
    console.log(`\n${file}`);
    for (const f of findings.sort((a, b) => a.line - b.line)) {
      if (f.level === 'error') errors++; else warns++;
      console.log(`  ${f.level === 'error' ? 'ERROR' : 'warn '} L${f.line || '-'} [${f.rule}] ${f.msg}`);
    }
  }
}
console.log(`\n${files} file(s) checked: ${errors} error(s), ${warns} warning(s)`);
process.exit(errors ? 1 : 0);
