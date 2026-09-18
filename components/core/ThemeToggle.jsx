import React from 'react';
import { Icon } from './Icon.jsx';
const KEY = 'aix-theme';
const sys = () => (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
const AiXTheme = {
  get() { return localStorage.getItem(KEY) || 'auto'; },
  resolved() { const p = AiXTheme.get(); return p === 'auto' ? sys() : p; },
  set(mode) { localStorage.setItem(KEY, mode); AiXTheme.apply(); },
  apply() { const p = AiXTheme.get(); const el = document.documentElement; if (p === 'auto') el.removeAttribute('data-theme'); else el.setAttribute('data-theme', p); window.dispatchEvent(new CustomEvent('aix-theme', { detail: { preference: p, resolved: AiXTheme.resolved() } })); },
};
if (typeof window !== 'undefined') { window.AiXTheme = AiXTheme; try { AiXTheme.apply(); } catch (e) {} }
export function ThemeToggle({ variant = 'segmented', size = 'sm', inverse, style }) {
  const [pref, setPref] = React.useState(AiXTheme.get());
  React.useEffect(() => { const h = (e) => setPref(e.detail.preference); window.addEventListener('aix-theme', h); return () => window.removeEventListener('aix-theme', h); }, []);
  const h = size === 'sm' ? 32 : 40;
  if (variant === 'icon') {
    const dark = AiXTheme.resolved() === 'dark';
    return React.createElement('button', { type: 'button', 'aria-label': dark ? 'Switch to light theme' : 'Switch to dark theme', title: dark ? 'Light theme' : 'Dark theme', onClick: () => AiXTheme.set(dark ? 'light' : 'dark'), style: { display: 'grid', placeItems: 'center', width: h, height: h, borderRadius: 'var(--radius-md)', border: '1px solid ' + (inverse ? 'rgba(255,255,255,.35)' : 'var(--border-default)'), background: 'transparent', color: inverse ? '#fff' : 'var(--text-secondary)', cursor: 'pointer', ...style } }, React.createElement(Icon, { name: dark ? 'sun' : 'moon', size: 18 }));
  }
  const opts = [['light', 'sun', 'Light'], ['auto', 'monitor', 'System'], ['dark', 'moon', 'Dark']];
  return React.createElement('div', { role: 'radiogroup', 'aria-label': 'Theme', style: { display: 'inline-flex', gap: 2, padding: 3, borderRadius: 'var(--radius-md)', background: inverse ? 'rgba(255,255,255,.1)' : 'var(--surface-sunken)', ...style } },
    opts.map(([v, icon, label]) => { const on = pref === v; return React.createElement('button', { key: v, type: 'button', role: 'radio', 'aria-checked': on, title: label, onClick: () => AiXTheme.set(v), style: { display: 'inline-flex', alignItems: 'center', gap: 6, height: h - 6, padding: '0 10px', border: 0, borderRadius: 6, background: on ? (inverse ? '#0A1931' : 'var(--surface-card)') : 'transparent', boxShadow: on ? 'var(--shadow-sm)' : 'none', color: on ? (inverse ? '#fff' : 'var(--text-primary)') : (inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)'), fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12, cursor: 'pointer', transition: 'background var(--duration-fast)' } }, React.createElement(Icon, { name: icon, size: 14 }), size === 'sm' && variant === 'segmented' ? null : label); }));
}
