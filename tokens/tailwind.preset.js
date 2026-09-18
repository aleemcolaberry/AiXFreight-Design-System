// Tailwind preset — maps AiXFreight tokens to utilities. Usage: presets: [require('./tokens/tailwind.preset.js')]
// Colors reference the CSS variables so light/dark switching stays in CSS.
const v = (n) => 'var(--' + n + ')';
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    fontFamily: { display: ['"Saira Condensed"', 'system-ui', 'sans-serif'], sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'], mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'] },
    extend: {
      colors: {
        navy: { DEFAULT: '#0A1931', 800: '#12244A', 700: '#1B3160' },
        orange: { DEFAULT: '#FF6B00', 600: '#E05E00', 100: '#FFE8D6' },
        gold: { DEFAULT: '#FFAB00', 100: '#FFF1CC' },
        land: v('color-land'), air: v('color-air'), ocean: v('color-ocean'), eco: v('color-eco'),
        slate: '#475569', gray: '#8593A5', steel: '#8FA3BA', mist: '#E2E8F0', fog: '#F1F5F9', snow: '#F8FAFC',
        surface: { page: v('surface-page'), card: v('surface-card'), sunken: v('surface-sunken'), inverse: v('surface-inverse'), 'inverse-raised': v('surface-inverse-raised') },
        fg: { DEFAULT: v('text-primary'), secondary: v('text-secondary'), muted: v('text-muted'), 'on-inverse': v('text-on-inverse'), 'on-inverse-muted': v('text-on-inverse-muted') },
        line: { DEFAULT: v('border-default'), strong: v('border-strong'), inverse: v('border-inverse') },
        selected: { DEFAULT: v('fill-selected'), fg: v('fill-selected-fg') },
        success: { DEFAULT: v('color-success'), bg: v('color-success-bg') }, warning: { DEFAULT: v('color-warning'), fg: v('color-warning-fg'), bg: v('color-warning-bg') }, danger: { DEFAULT: v('color-danger'), bg: v('color-danger-bg') }, info: { DEFAULT: v('color-info'), bg: v('color-info-bg') },
      },
      fontSize: { 'display-xl': ['64px', { lineHeight: '1', letterSpacing: '-.01em' }], 'display-lg': ['48px', { lineHeight: '1.05' }], 'display-md': ['36px', { lineHeight: '1.1' }], 'display-sm': ['28px', { lineHeight: '1.15' }], heading: ['22px', { lineHeight: '1.2' }], 'body-lg': ['17px', { lineHeight: '1.6' }], body: ['15px', { lineHeight: '1.55' }], 'body-sm': ['13px', { lineHeight: '1.5' }], caption: ['12px', { lineHeight: '1.4', letterSpacing: '.08em' }], 'caption-sm': ['11px', { lineHeight: '1.4', letterSpacing: '.08em' }] },
      spacing: { 1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px', 6: '24px', 8: '32px', 10: '40px', 12: '48px', 16: '64px', 20: '80px', 24: '96px', sidebar: '240px', topbar: '56px' },
      borderRadius: { sm: '4px', md: '8px', lg: '12px', xl: '20px', pill: '999px' },
      boxShadow: { sm: v('shadow-sm'), md: v('shadow-md'), lg: v('shadow-lg'), accent: v('shadow-accent'), focus: v('focus-ring') },
      transitionTimingFunction: { out: 'cubic-bezier(.2,.8,.2,1)', 'in-out': 'cubic-bezier(.65,0,.35,1)' },
      transitionDuration: { fast: '120ms', base: '200ms', slow: '320ms' },
      maxWidth: { container: '1200px', narrow: '760px' },
      height: { 'control-sm': '32px', 'control-md': '40px', 'control-lg': '48px' },
    },
  },
};
