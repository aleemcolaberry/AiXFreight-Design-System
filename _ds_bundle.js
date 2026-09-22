/* @ds-bundle: {"format":4,"namespace":"AiXFreightDesignSystem_0c3a26","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"ModeBadge","sourcePath":"components/core/ModeBadge.jsx"},{"name":"RouteLine","sourcePath":"components/core/RouteLine.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ThemeToggle","sourcePath":"components/core/ThemeToggle.jsx"},{"name":"Accordion","sourcePath":"components/data/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Timeline","sourcePath":"components/data/Timeline.jsx"},{"name":"AI_FALLBACKS","sourcePath":"components/failure/AiFallback.jsx"},{"name":"AiFallback","sourcePath":"components/failure/AiFallback.jsx"},{"name":"ConfirmDialog","sourcePath":"components/failure/ConfirmDialog.jsx"},{"name":"ERROR_KINDS","sourcePath":"components/failure/ErrorPage.jsx"},{"name":"ErrorPage","sourcePath":"components/failure/ErrorPage.jsx"},{"name":"FormErrorSummary","sourcePath":"components/failure/FormErrorSummary.jsx"},{"name":"SHIPMENT_STATES","sourcePath":"components/failure/ShipmentStatus.jsx"},{"name":"ShipmentStatus","sourcePath":"components/failure/ShipmentStatus.jsx"},{"name":"AiDisclosure","sourcePath":"components/feedback/AiDisclosure.jsx"},{"name":"AiFeedback","sourcePath":"components/feedback/AiFeedback.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"DropdownMenu","sourcePath":"components/navigation/DropdownMenu.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Topbar","sourcePath":"components/navigation/Topbar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Drawer","sourcePath":"components/surfaces/Drawer.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"},{"name":"Toast","sourcePath":"components/surfaces/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/surfaces/Tooltip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"b579cfef26c0","components/core/Button.jsx":"123b892ed091","components/core/Icon.jsx":"5047d5342321","components/core/IconButton.jsx":"c14dc276711e","components/core/Logo.jsx":"25b64ed4f7f1","components/core/ModeBadge.jsx":"abeed75c8982","components/core/RouteLine.jsx":"075697b5d4ce","components/core/Tag.jsx":"c3b46ebeac1f","components/core/ThemeToggle.jsx":"82fc6ba1a2b1","components/data/Accordion.jsx":"96c38006cec2","components/data/Avatar.jsx":"bde34967964d","components/data/StatCard.jsx":"447ded975c4a","components/data/Table.jsx":"6a80a8b522ed","components/data/Timeline.jsx":"eb25a7cbabab","components/failure/AiFallback.jsx":"89323a966079","components/failure/ConfirmDialog.jsx":"71d66baf1140","components/failure/ErrorPage.jsx":"5d83adabda8f","components/failure/FormErrorSummary.jsx":"817d2795aeb4","components/failure/ShipmentStatus.jsx":"0c7c95434f93","components/feedback/AiDisclosure.jsx":"2710e3dfe8e0","components/feedback/AiFeedback.jsx":"c7fbbcd369a6","components/feedback/Alert.jsx":"a6655a8e2737","components/feedback/EmptyState.jsx":"b161d67fe852","components/feedback/Progress.jsx":"3253fb740f2d","components/feedback/Skeleton.jsx":"4d6abbdc7cb4","components/forms/Checkbox.jsx":"e3f58a1edfe1","components/forms/Input.jsx":"9a3933236df2","components/forms/Radio.jsx":"9510827a58b4","components/forms/Select.jsx":"ae9161d71100","components/forms/Switch.jsx":"94e41ce5d646","components/forms/Textarea.jsx":"f617ed630721","components/navigation/Breadcrumb.jsx":"cdf79f73dfd3","components/navigation/DropdownMenu.jsx":"166e0b599bc1","components/navigation/Pagination.jsx":"698cd3582344","components/navigation/SidebarNav.jsx":"581ca6ea2a96","components/navigation/Stepper.jsx":"daefd8a25ad7","components/navigation/Topbar.jsx":"303fdccf9700","components/surfaces/Card.jsx":"de3ef003ec5b","components/surfaces/Dialog.jsx":"04d6399eddc2","components/surfaces/Drawer.jsx":"ba19c525897e","components/surfaces/Tabs.jsx":"482d9a11bdf8","components/surfaces/Toast.jsx":"186286360c01","components/surfaces/Tooltip.jsx":"c057506d7efc","tokens/tailwind.preset.js":"9b7e40bcfcea","ui_kits/aixfreight-app/Dashboard.jsx":"b58e9f4f0bfa","ui_kits/aixfreight-app/NewQuote.jsx":"03f2a75b2cf7","ui_kits/aixfreight-app/Shell.jsx":"5a902f133f65","ui_kits/aixfreight-app/ShipmentDetail.jsx":"0186bfb5c463","ui_kits/aixfreight-app/Shipments.jsx":"1c5c50795161","ui_kits/aixfreight-app/data.js":"99bc144b808f"},"inlinedExternals":[],"unexposedExports":[{"name":"canTransition","sourcePath":"components/failure/ShipmentStatus.jsx"},{"name":"isAttention","sourcePath":"components/failure/ShipmentStatus.jsx"}]} */

(() => {

const __ds_ns = (window.AiXFreightDesignSystem_0c3a26 = window.AiXFreightDesignSystem_0c3a26 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const T = {
  neutral: ['var(--surface-sunken)', 'var(--text-secondary)'],
  success: ['var(--color-success-bg)', 'var(--color-success)'],
  warning: ['var(--color-warning-bg)', 'var(--color-warning-fg)'],
  danger: ['var(--color-danger-bg)', 'var(--color-danger)'],
  info: ['var(--color-info-bg)', 'var(--color-info)'],
  ai: ['var(--accent-soft)', 'var(--color-ai-orange-600)'],
  navy: ['var(--color-navy)', '#fff']
};
function Badge({
  tone = 'neutral',
  dot,
  children,
  style
}) {
  const [bg, fg] = T[tone] || T.neutral;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-sm)',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      ...style
    }
  }, dot ? React.createElement('span', {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: fg
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
// Lucide (ISC) path data — geometric 2px stroke set matching the mark's stroke language
const P = {
  truck: 'M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14M17 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM7 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z',
  plane: 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z',
  ship: 'M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6M12 10v4M12 2v3',
  sparkles: 'M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0zM20 3v4M22 5h-4M4 17v2M5 18H3',
  search: 'm21 21-4.34-4.34M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16z',
  bell: 'M10.268 21a2 2 0 0 0 3.464 0M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326',
  chevronDown: 'm6 9 6 6 6-6',
  chevronRight: 'm9 18 6-6-6-6',
  arrowRight: 'M5 12h14m-7-7 7 7-7 7',
  check: 'M20 6 9 17l-5-5',
  x: 'M18 6 6 18M6 6l12 12',
  plus: 'M5 12h14m-7-7v14',
  alertTriangle: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01',
  info: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4m0-4h.01',
  circleCheck: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm-3-10 2 2 4-4',
  mapPin: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  package: 'm7.5 4.27 9 5.15M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16zM3.3 7 12 12l8.7-5M12 22V12',
  layoutDashboard: 'M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z',
  route: 'M6 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm3-3h5.5a3.5 3.5 0 1 0 0-7H9M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  fileText: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zM14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8',
  settings: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zm0-16v6l4 2',
  dollar: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  leaf: 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10ZM2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12',
  sun: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41',
  moon: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z',
  monitor: 'M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 21h8m-4-4v4',
  menu: 'M4 12h16M4 6h16M4 18h16',
  moreHorizontal: 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  download: 'M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5 5 5 5-5',
  filter: 'M22 3H2l8 9.46V19l4 2v-8.54z',
  user: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  thumbsUp: 'M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z',
  thumbsDown: 'M17 14V2M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z',
  train: 'M8 3.1V7a4 4 0 0 0 8 0V3.1M9 15l-1-1m8 1 1-1M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5zm-1 3 1-3m7 3-1-3',
  wifiOff: 'M12 20h.01M8.5 16.429a5 5 0 0 1 7 0M5 12.859a10 10 0 0 1 5.17-2.69M19 12.859a10 10 0 0 0-2.007-1.523M2 8.82a15 15 0 0 1 4.177-2.643M22 8.82a15 15 0 0 0-11.288-3.764M2 2l20 20',
  lock: 'M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM7 11V7a5 5 0 0 1 10 0v4',
  refresh: 'M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M21 3v5h-5M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16M8 16H3v5',
  trash: 'M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6m4-6v6',
  cloudOff: 'm2 2 20 20M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7 7 0 0 0 8.96 3.35',
  anchor: 'M12 22V8M5 12H2a10 10 0 0 0 20 0h-3M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  logOut: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14 5-5-5-5m5 5H9'
};
function Icon({
  name = 'package',
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style,
  ...rest
}) {
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    style: {
      flex: 'none',
      display: 'inline-block',
      ...style
    },
    ...rest
  }, React.createElement('path', {
    d: P[name] || P.package
  }));
}
Icon.names = Object.keys(P);
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const V = {
  primary: {
    bg: 'var(--accent)',
    fg: 'var(--text-on-accent)',
    border: 'var(--accent)',
    hover: 'var(--accent-hover)'
  },
  navy: {
    bg: 'var(--fill-selected)',
    fg: 'var(--fill-selected-fg)',
    border: 'var(--fill-selected)',
    hover: 'var(--fill-selected-hover)'
  },
  secondary: {
    bg: 'var(--surface-card)',
    fg: 'var(--text-primary)',
    border: 'var(--border-strong)',
    hover: 'var(--surface-sunken)'
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--text-secondary)',
    border: 'transparent',
    hover: 'var(--surface-sunken)'
  },
  danger: {
    bg: 'var(--color-danger)',
    fg: '#fff',
    border: 'var(--color-danger)',
    hover: '#B8321A'
  },
  inverse: {
    bg: 'transparent',
    fg: '#fff',
    border: 'rgba(255,255,255,.35)',
    hover: 'rgba(255,255,255,.1)'
  }
};
const S = {
  sm: {
    h: 'var(--control-height-sm)',
    px: 12,
    fs: 13,
    icon: 16
  },
  md: {
    h: 'var(--control-height-md)',
    px: 16,
    fs: 14,
    icon: 18
  },
  lg: {
    h: 'var(--control-height-lg)',
    px: 22,
    fs: 15,
    icon: 20
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  children,
  disabled,
  loading,
  fullWidth,
  onClick,
  style,
  type = 'button',
  ...rest
}) {
  const off = disabled || loading;
  const v = V[variant] || V.primary,
    s = S[size] || S.md;
  const [hover, setHover] = React.useState(false),
    [press, setPress] = React.useState(false);
  return React.createElement('button', {
    type,
    disabled: off,
    'aria-busy': loading || undefined,
    onClick,
    ...rest,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: s.fs,
      lineHeight: 1,
      color: v.fg,
      background: hover && !off ? v.hover : v.bg,
      border: '1px solid ' + v.border,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : loading ? 'progress' : 'pointer',
      opacity: disabled ? .45 : 1,
      width: fullWidth ? '100%' : undefined,
      transform: press && !off ? 'scale(.98)' : 'none',
      transition: 'background var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      maxWidth: '100%',
      minWidth: 0,
      ...style
    }
  }, loading ? React.createElement('span', {
    'aria-hidden': true,
    style: {
      width: s.icon - 4,
      height: s.icon - 4,
      border: '2px solid rgba(255,255,255,.4)',
      borderTopColor: 'currentColor',
      borderRadius: 999,
      animation: 'aix-spin .8s linear infinite',
      flex: 'none'
    }
  }) : icon && React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), React.createElement('span', {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minWidth: 0
    }
  }, children), iconRight && !loading && React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }), loading ? React.createElement('style', null, '@keyframes aix-spin{to{transform:rotate(360deg)}}') : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon = 'moreHorizontal',
  label,
  size = 'md',
  variant = 'ghost',
  onClick,
  disabled,
  badge,
  inverse,
  style,
  ...rest
}) {
  const px = size === 'sm' ? 32 : size === 'lg' ? 48 : 40,
    ic = size === 'sm' ? 16 : size === 'lg' ? 22 : 20;
  const [hover, setHover] = React.useState(false);
  const bg = variant === 'filled' ? 'var(--accent)' : variant === 'outline' ? 'var(--surface-card)' : 'transparent';
  const fg = variant === 'filled' ? '#fff' : inverse ? '#fff' : 'var(--text-secondary)';
  const hv = variant === 'filled' ? 'var(--accent-hover)' : inverse ? 'rgba(255,255,255,.1)' : 'var(--surface-sunken)';
  return React.createElement('button', {
    type: 'button',
    'aria-label': label || icon,
    onClick,
    disabled,
    ...rest,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-grid',
      placeItems: 'center',
      width: px,
      height: px,
      borderRadius: 'var(--radius-md)',
      border: variant === 'outline' ? '1px solid var(--border-default)' : '1px solid transparent',
      background: hover && !disabled ? hv : bg,
      color: fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transition: 'background var(--duration-fast) var(--ease-out)',
      flex: 'none',
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: ic
  }), badge ? React.createElement('span', {
    style: {
      position: 'absolute',
      top: 6,
      right: 6,
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--accent)',
      boxShadow: '0 0 0 2px ' + (inverse ? 'var(--color-navy)' : '#fff')
    }
  }) : null);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const SRC = {
  horizontal: 'assets/logo/lockup-horizontal-light.svg',
  horizontalDark: 'assets/logo/lockup-horizontal-dark.svg',
  vertical: 'assets/logo/lockup-vertical-light.svg',
  verticalDark: 'assets/logo/lockup-vertical-dark.svg',
  mark: 'assets/logo/mark-horizontal.svg',
  markDark: 'assets/logo/mark-dark.svg'
};
function Logo({
  variant = 'horizontal',
  inverse,
  height = 40,
  base = '',
  style
}) {
  const key = variant + (inverse ? 'Dark' : '');
  const src = (base ? base.replace(/\/?$/, '/') : '') + (SRC[key] || SRC.horizontal);
  return React.createElement('img', {
    src,
    alt: 'AiXFreight',
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/ModeBadge.jsx
try { (() => {
const M = {
  land: ['truck', 'var(--color-land)', 'var(--color-land-dark)', 'Land'],
  rail: ['train', 'var(--color-land)', 'var(--color-land-dark)', 'Rail'],
  air: ['plane', 'var(--color-air)', 'var(--color-air-dark)', 'Air'],
  ocean: ['ship', 'var(--color-ocean)', 'var(--color-ocean-dark)', 'Ocean'],
  eco: ['leaf', 'var(--color-eco)', 'var(--color-eco)', 'Eco lane'],
  ai: ['sparkles', 'var(--color-ai-orange)', 'var(--color-ai-orange)', 'AI']
};
function ModeBadge({
  mode = 'ocean',
  label,
  inverse,
  size = 'md',
  iconOnly,
  style
}) {
  const [icon, light, dark, def] = M[mode] || M.ocean;
  const c = inverse ? dark : light;
  const sm = size === 'sm';
  return React.createElement('span', {
    title: label || def,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sm ? 4 : 6,
      height: sm ? 22 : 28,
      padding: iconOnly ? 0 : '0 ' + (sm ? 8 : 10) + 'px',
      width: iconOnly ? sm ? 22 : 28 : undefined,
      justifyContent: 'center',
      borderRadius: 999,
      border: '2px solid ' + c,
      color: c,
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: sm ? 10 : 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 12 : 14,
    strokeWidth: 2.2
  }), iconOnly ? null : label || def);
}
Object.assign(__ds_scope, { ModeBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ModeBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/RouteLine.jsx
try { (() => {
const MC = {
  land: 'var(--color-land)',
  rail: 'var(--color-land)',
  air: 'var(--color-air)',
  ocean: 'var(--color-ocean)',
  eco: 'var(--color-eco)'
};
function RouteLine({
  from = 'land',
  to = 'ocean',
  progress = 0,
  aiAt,
  height = 80,
  inverse,
  style
}) {
  const w = 600,
    y0 = height - 12,
    y1 = 12;
  const d = 'M10 ' + y0 + ' C ' + w * .35 + ' ' + y0 + ', ' + w * .55 + ' ' + y1 + ', ' + (w - 10) + ' ' + y1;
  const ref = React.useRef(null);
  const [len, setLen] = React.useState(1000);
  React.useEffect(() => {
    if (ref.current) setLen(ref.current.getTotalLength());
  }, [height]);
  const pt = t => {
    if (!ref.current) return {
      x: 10,
      y: y0
    };
    return ref.current.getPointAtLength(len * t);
  };
  const a = aiAt != null ? pt(aiAt) : null;
  return React.createElement('svg', {
    viewBox: '0 0 ' + w + ' ' + height,
    preserveAspectRatio: 'none',
    style: {
      width: '100%',
      height,
      display: 'block',
      overflow: 'visible',
      ...style
    },
    fill: 'none'
  }, React.createElement('path', {
    ref,
    d,
    stroke: inverse ? 'var(--border-inverse)' : 'var(--border-default)',
    strokeWidth: 4,
    strokeLinecap: 'round'
  }), React.createElement('path', {
    d,
    stroke: 'var(--color-gold)',
    strokeWidth: 4,
    strokeLinecap: 'round',
    strokeDasharray: '8 8',
    pathLength: 100,
    style: {
      strokeDasharray: progress + ' 100',
      strokeDashoffset: 0
    }
  }), React.createElement('path', {
    d,
    stroke: 'var(--color-gold)',
    strokeWidth: 4,
    strokeLinecap: 'round',
    strokeDasharray: len * progress / 100 + ' ' + len,
    opacity: .001
  }), React.createElement('circle', {
    cx: 10,
    cy: y0,
    r: 7,
    fill: MC[from] || MC.land
  }), a ? React.createElement('circle', {
    cx: a.x,
    cy: a.y,
    r: 9,
    fill: inverse ? '#0A1931' : 'var(--surface-card)',
    stroke: 'var(--accent)',
    strokeWidth: 4
  }) : null, React.createElement('circle', {
    cx: w - 10,
    cy: y1,
    r: 7,
    fill: MC[to] || MC.ocean
  }));
}
Object.assign(__ds_scope, { RouteLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RouteLine.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  selected,
  onClick,
  style
}) {
  return React.createElement('span', {
    onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: '0 10px',
      borderRadius: 999,
      border: '1px solid ' + (selected ? 'var(--fill-selected)' : 'var(--border-default)'),
      background: selected ? 'var(--fill-selected)' : 'var(--surface-card)',
      color: selected ? 'var(--fill-selected-fg)' : 'var(--text-secondary)',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 13,
      cursor: onClick ? 'pointer' : 'default',
      whiteSpace: 'nowrap',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      ...style
    }
  }, children, onRemove ? React.createElement('button', {
    type: 'button',
    'aria-label': 'Remove',
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 16,
      height: 16,
      border: 0,
      borderRadius: 999,
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      padding: 0,
      marginRight: -4
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 12
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/ThemeToggle.jsx
try { (() => {
const KEY = 'aix-theme';
const sys = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const AiXTheme = {
  get() {
    return localStorage.getItem(KEY) || 'auto';
  },
  resolved() {
    const p = AiXTheme.get();
    return p === 'auto' ? sys() : p;
  },
  set(mode) {
    localStorage.setItem(KEY, mode);
    AiXTheme.apply();
  },
  apply() {
    const p = AiXTheme.get();
    const el = document.documentElement;
    if (p === 'auto') el.removeAttribute('data-theme');else el.setAttribute('data-theme', p);
    window.dispatchEvent(new CustomEvent('aix-theme', {
      detail: {
        preference: p,
        resolved: AiXTheme.resolved()
      }
    }));
  }
};
if (typeof window !== 'undefined') {
  window.AiXTheme = AiXTheme;
  try {
    AiXTheme.apply();
  } catch (e) {}
}
function ThemeToggle({
  variant = 'segmented',
  size = 'sm',
  inverse,
  style
}) {
  const [pref, setPref] = React.useState(AiXTheme.get());
  React.useEffect(() => {
    const h = e => setPref(e.detail.preference);
    window.addEventListener('aix-theme', h);
    return () => window.removeEventListener('aix-theme', h);
  }, []);
  const h = size === 'sm' ? 32 : 40;
  if (variant === 'icon') {
    const dark = AiXTheme.resolved() === 'dark';
    return React.createElement('button', {
      type: 'button',
      'aria-label': dark ? 'Switch to light theme' : 'Switch to dark theme',
      title: dark ? 'Light theme' : 'Dark theme',
      onClick: () => AiXTheme.set(dark ? 'light' : 'dark'),
      style: {
        display: 'grid',
        placeItems: 'center',
        width: h,
        height: h,
        borderRadius: 'var(--radius-md)',
        border: '1px solid ' + (inverse ? 'rgba(255,255,255,.35)' : 'var(--border-default)'),
        background: 'transparent',
        color: inverse ? '#fff' : 'var(--text-secondary)',
        cursor: 'pointer',
        ...style
      }
    }, React.createElement(__ds_scope.Icon, {
      name: dark ? 'sun' : 'moon',
      size: 18
    }));
  }
  const opts = [['light', 'sun', 'Light'], ['auto', 'monitor', 'System'], ['dark', 'moon', 'Dark']];
  return React.createElement('div', {
    role: 'radiogroup',
    'aria-label': 'Theme',
    style: {
      display: 'inline-flex',
      gap: 2,
      padding: 3,
      borderRadius: 'var(--radius-md)',
      background: inverse ? 'rgba(255,255,255,.1)' : 'var(--surface-sunken)',
      ...style
    }
  }, opts.map(([v, icon, label]) => {
    const on = pref === v;
    return React.createElement('button', {
      key: v,
      type: 'button',
      role: 'radio',
      'aria-checked': on,
      title: label,
      onClick: () => AiXTheme.set(v),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: h - 6,
        padding: '0 10px',
        border: 0,
        borderRadius: 6,
        background: on ? inverse ? '#0A1931' : 'var(--surface-card)' : 'transparent',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        color: on ? inverse ? '#fff' : 'var(--text-primary)' : inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 12,
        cursor: 'pointer',
        transition: 'background var(--duration-fast)'
      }
    }, React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 14
    }), size === 'sm' && variant === 'segmented' ? null : label);
  }));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/data/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  multiple,
  defaultOpen = [],
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const toggle = i => setOpen(o => o.includes(i) ? o.filter(x => x !== i) : multiple ? [...o, i] : [i]);
  return React.createElement('div', {
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-card)',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, items.map((it, i) => {
    const on = open.includes(i);
    return React.createElement('div', {
      key: i,
      style: {
        borderTop: i ? '1px solid var(--border-default)' : 0
      }
    }, React.createElement('button', {
      type: 'button',
      'aria-expanded': on,
      onClick: () => toggle(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        width: '100%',
        padding: '16px 20px',
        border: 0,
        background: 'transparent',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 15,
        textAlign: 'left',
        cursor: 'pointer'
      }
    }, React.createElement('span', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, it.eyebrow ? React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        fontSize: 11,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, it.eyebrow) : null, it.title), React.createElement(__ds_scope.Icon, {
      name: 'chevronDown',
      size: 16,
      color: 'var(--text-muted)',
      style: {
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-out)'
      }
    })), on ? React.createElement('div', {
      style: {
        padding: '0 20px 20px',
        color: 'var(--text-secondary)',
        fontSize: 14,
        lineHeight: 1.55
      }
    }, it.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
const C = ['#0F55A0', '#3A4450', '#0F8B8F', '#1B3160'];
function Avatar({
  name = '',
  src,
  size = 'md',
  status,
  style
}) {
  const px = size === 'xs' ? 24 : size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  const init = name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const bg = C[name.split('').reduce((a, ch) => a + ch.charCodeAt(0), 0) % C.length];
  return React.createElement('span', {
    title: name,
    style: {
      position: 'relative',
      display: 'inline-grid',
      placeItems: 'center',
      width: px,
      height: px,
      borderRadius: 999,
      background: src ? 'var(--surface-sunken)' : bg,
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: px * .38,
      overflow: 'visible',
      flex: 'none',
      ...style
    }
  }, src ? React.createElement('img', {
    src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 999,
      objectFit: 'cover'
    }
  }) : init, status ? React.createElement('span', {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: px * .3,
      height: px * .3,
      borderRadius: 999,
      background: status === 'online' ? 'var(--color-success)' : status === 'busy' ? 'var(--color-danger)' : 'var(--color-gray)',
      border: '2px solid #fff'
    }
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  delta,
  deltaTone = 'neutral',
  hint,
  inverse,
  style
}) {
  return React.createElement('section', {
    style: {
      background: inverse ? 'var(--surface-inverse-raised)' : 'var(--surface-card)',
      color: inverse ? '#fff' : 'var(--text-primary)',
      border: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      boxShadow: 'var(--shadow-sm)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      fontSize: 12,
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)'
    }
  }, label), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 6,
      flexWrap: 'wrap'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(24px, 2.4vw, 36px)',
      lineHeight: 1,
      letterSpacing: '-.01em',
      overflowWrap: 'anywhere',
      minWidth: 0
    }
  }, value), delta ? React.createElement(__ds_scope.Badge, {
    tone: deltaTone
  }, delta) : null), hint ? React.createElement('div', {
    style: {
      fontSize: 12,
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)',
      marginTop: 8
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = [],
  rowKey = 'id',
  onRowClick,
  sort,
  onSort,
  selectable,
  selected = [],
  onSelect,
  dense,
  emptyMessage = 'No rows',
  stickyHeader,
  style
}) {
  const py = dense ? 8 : 14;
  const th = {
    textAlign: 'left',
    padding: '12px 20px',
    borderBottom: '1px solid var(--border-default)',
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    fontSize: 12,
    color: 'var(--text-muted)',
    whiteSpace: 'nowrap',
    background: 'var(--surface-card)',
    position: stickyHeader ? 'sticky' : 'static',
    top: 0
  };
  const allOn = rows.length > 0 && rows.every(r => selected.includes(r[rowKey]));
  const box = (on, onClick, mixed) => React.createElement('span', {
    role: 'checkbox',
    'aria-checked': on,
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 16,
      height: 16,
      borderRadius: 3,
      border: '2px solid ' + (on || mixed ? 'var(--fill-selected)' : 'var(--border-strong)'),
      background: on || mixed ? 'var(--fill-selected)' : 'var(--surface-card)',
      cursor: 'pointer'
    }
  }, on ? React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 10,
    strokeWidth: 3,
    color: 'var(--fill-selected-fg)'
  }) : mixed ? React.createElement('span', {
    style: {
      width: 8,
      height: 2,
      background: 'var(--fill-selected-fg)'
    }
  }) : null);
  return React.createElement('div', {
    style: {
      overflow: 'auto',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, React.createElement('table', {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 13
    }
  }, React.createElement('thead', null, React.createElement('tr', null, selectable ? React.createElement('th', {
    style: {
      ...th,
      width: 40,
      paddingRight: 0
    }
  }, box(allOn, () => onSelect && onSelect(allOn ? [] : rows.map(r => r[rowKey])), !allOn && selected.length > 0)) : null, columns.map(c => React.createElement('th', {
    key: c.key,
    scope: 'col',
    'aria-sort': c.sortable ? sort && sort.key === c.key ? sort.dir === 'asc' ? 'ascending' : 'descending' : 'none' : undefined,
    onClick: () => c.sortable && onSort && onSort(c.key),
    style: {
      ...th,
      textAlign: c.align || 'left',
      width: c.width,
      cursor: c.sortable ? 'pointer' : 'default',
      color: sort && sort.key === c.key ? 'var(--text-primary)' : th.color
    }
  }, React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, c.label, c.sortable ? React.createElement(__ds_scope.Icon, {
    name: 'chevronDown',
    size: 12,
    style: {
      opacity: sort && sort.key === c.key ? 1 : .35,
      transform: sort && sort.key === c.key && sort.dir === 'asc' ? 'rotate(180deg)' : 'none'
    }
  }) : null))))), React.createElement('tbody', null, rows.length === 0 ? React.createElement('tr', null, React.createElement('td', {
    colSpan: columns.length + (selectable ? 1 : 0),
    style: {
      padding: 40,
      textAlign: 'center',
      color: 'var(--text-muted)'
    }
  }, emptyMessage)) : rows.map((r, i) => {
    const on = selected.includes(r[rowKey]);
    return React.createElement('tr', {
      key: r[rowKey] ?? i,
      'aria-selected': selectable ? on : undefined,
      onClick: () => onRowClick && onRowClick(r),
      onMouseEnter: e => {
        if (onRowClick) e.currentTarget.style.background = 'var(--surface-sunken)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = on ? 'var(--accent-soft)' : '';
      },
      style: {
        cursor: onRowClick ? 'pointer' : 'default',
        background: on ? 'var(--accent-soft)' : '',
        transition: 'background var(--duration-fast)'
      }
    }, selectable ? React.createElement('td', {
      style: {
        padding: py + 'px 20px',
        paddingRight: 0,
        borderBottom: '1px solid var(--border-default)'
      }
    }, box(on, () => onSelect && onSelect(on ? selected.filter(k => k !== r[rowKey]) : [...selected, r[rowKey]]))) : null, columns.map(c => React.createElement('td', {
      key: c.key,
      style: {
        padding: py + 'px 20px',
        borderBottom: '1px solid var(--border-default)',
        textAlign: c.align || 'left',
        fontFamily: c.mono ? 'var(--font-mono)' : 'inherit',
        fontWeight: c.mono ? 500 : 400,
        color: c.muted ? 'var(--text-secondary)' : 'inherit',
        whiteSpace: c.nowrap || c.mono ? 'nowrap' : 'normal',
        overflowWrap: 'anywhere',
        maxWidth: c.maxWidth,
        overflow: c.truncate ? 'hidden' : undefined,
        textOverflow: c.truncate ? 'ellipsis' : undefined
      }
    }, c.render ? c.render(r[c.key], r) : r[c.key])));
  }))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/data/Timeline.jsx
try { (() => {
function Timeline({
  events = [],
  orientation = 'horizontal',
  style
}) {
  const h = orientation === 'horizontal';
  return React.createElement('ol', {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: h ? 'grid' : 'flex',
      gridTemplateColumns: h ? 'repeat(auto-fit,minmax(120px,1fr))' : undefined,
      flexDirection: h ? undefined : 'column',
      gap: h ? 0 : 20,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, events.map((e, i) => {
    const c = e.ai ? 'var(--accent)' : e.done ? 'var(--fill-selected)' : 'var(--border-strong)';
    const last = i === events.length - 1;
    return React.createElement('li', {
      key: i,
      style: {
        position: 'relative',
        paddingTop: h ? 22 : 0,
        paddingLeft: h ? 0 : 28
      }
    }, React.createElement('span', {
      style: h ? {
        position: 'absolute',
        top: 6,
        left: 0,
        right: last ? 'auto' : 0,
        width: last ? 14 : 'auto',
        height: 2,
        background: e.done ? 'var(--fill-selected)' : 'var(--border-default)'
      } : {
        position: 'absolute',
        left: 6,
        top: 14,
        bottom: last ? 'auto' : -20,
        width: 2,
        height: last ? 0 : 'auto',
        background: e.done ? 'var(--fill-selected)' : 'var(--border-default)'
      }
    }), React.createElement('span', {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 14,
        height: 14,
        borderRadius: 999,
        background: e.ai ? 'var(--accent)' : e.done ? 'var(--fill-selected)' : 'var(--surface-card)',
        border: '2px solid ' + c,
        boxShadow: e.current ? '0 0 0 4px rgba(255,107,0,.25)' : 'none'
      }
    }), React.createElement('div', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        fontSize: 11,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: e.ai ? 'var(--accent)' : 'var(--text-muted)'
      }
    }, e.time), React.createElement('div', {
      style: {
        fontWeight: 600,
        fontSize: 14,
        marginTop: 4,
        paddingRight: h ? 16 : 0,
        color: 'var(--text-primary)'
      }
    }, e.title), e.where ? React.createElement('div', {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, e.where) : null);
  }));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/failure/AiFallback.jsx
try { (() => {
// What the AI surface shows when it can't (or shouldn't) recommend. Same slot as the recommendation card, so nothing jumps. Never orange: no AI move to highlight.
const AI_FALLBACKS = {
  lowConfidence: {
    icon: 'alertTriangle',
    eyebrow: 'Below threshold',
    title: 'Not confident enough to recommend',
    body: 'Best option scored {confidence}% — under your {threshold}% threshold. Review the options manually or lower the threshold for this lane.',
    action: 'Review options',
    secondary: 'Adjust threshold'
  },
  unavailable: {
    icon: 'cloudOff',
    eyebrow: 'AI unavailable',
    title: 'Recommendations paused',
    body: 'The optimisation service isn’t responding. Shipments and tracking are unaffected; manual routing is available.',
    action: 'Retry',
    secondary: 'Route manually'
  },
  staleData: {
    icon: 'clock',
    eyebrow: 'Stale inputs',
    title: 'Based on data from {age} ago',
    body: 'Carrier rates and port feeds haven’t refreshed. This recommendation may no longer hold.',
    action: 'Refresh data',
    secondary: 'Use anyway'
  },
  conflict: {
    icon: 'route',
    eyebrow: 'Conflicting signals',
    title: 'Two options are within {delta}% of each other',
    body: 'Cost favours ocean; ETA favours air. The model won’t pick when the difference is inside its error margin.',
    action: 'Compare both',
    secondary: null
  },
  noData: {
    icon: 'package',
    eyebrow: 'Not enough history',
    title: 'No recommendation for this lane yet',
    body: 'Fewer than 5 past shipments on this route. The model needs more examples before it can recommend.',
    action: 'Route manually',
    secondary: null
  },
  blocked: {
    icon: 'lock',
    eyebrow: 'Policy',
    title: 'Recommendation withheld',
    body: 'A compliance rule ({rule}) prevents automated routing on this shipment. A human must decide.',
    action: 'View rule',
    secondary: null
  }
};
const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] != null ? vars[k] : '—');
function AiFallback({
  kind = 'lowConfidence',
  title,
  body,
  action,
  secondary,
  onAction,
  onSecondary,
  confidence,
  threshold,
  age,
  delta,
  rule,
  inverse,
  compact,
  style
}) {
  const k = AI_FALLBACKS[kind] || AI_FALLBACKS.lowConfidence;
  const vars = {
    confidence,
    threshold,
    age,
    delta,
    rule
  };
  const fg = inverse ? 'var(--text-on-inverse)' : 'var(--text-primary)',
    muted = inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)',
    sec = inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-secondary)';
  const cap = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: muted
  };
  return React.createElement('div', {
    role: 'status',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: compact ? 14 : 20,
      borderRadius: 'var(--radius-lg)',
      border: inverse ? '1px dashed var(--border-inverse)' : '1px dashed var(--border-strong)',
      background: inverse ? 'var(--surface-inverse-raised)' : 'var(--surface-card)',
      color: fg,
      fontFamily: 'var(--font-body)',
      minWidth: 0,
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'sparkles',
    size: 14,
    color: muted
  }), React.createElement('span', {
    style: cap
  }, k.eyebrow), confidence != null ? React.createElement('span', {
    style: {
      ...cap,
      marginLeft: 'auto',
      color: sec
    }
  }, `${confidence}% conf.`) : null), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: 22,
    color: kind === 'unavailable' || kind === 'blocked' ? 'var(--color-danger)' : 'var(--color-warning-fg)',
    style: {
      marginTop: 2
    }
  }), React.createElement('div', {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: compact ? 18 : 22,
      lineHeight: 1.1,
      textTransform: 'uppercase',
      textWrap: 'balance',
      overflowWrap: 'anywhere'
    }
  }, fill(title || k.title, vars)), React.createElement('p', {
    style: {
      margin: '6px 0 0',
      color: sec,
      fontSize: 14,
      lineHeight: 1.5,
      textWrap: 'pretty'
    }
  }, fill(body || k.body, vars)))), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, React.createElement(__ds_scope.Button, {
    variant: inverse ? 'inverse' : 'navy',
    size: 'sm',
    onClick: onAction,
    icon: kind === 'unavailable' || kind === 'staleData' ? 'refresh' : undefined
  }, action || k.action), secondary || secondary === undefined && k.secondary ? React.createElement(__ds_scope.Button, {
    variant: inverse ? 'inverse' : 'ghost',
    size: 'sm',
    onClick: onSecondary
  }, secondary || k.secondary) : null));
}
Object.assign(__ds_scope, { AI_FALLBACKS, AiFallback });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/failure/AiFallback.jsx", error: String((e && e.message) || e) }); }

// components/failure/ErrorPage.jsx
try { (() => {
// Full-page failure surface. One canonical copy set per kind so teams never invent tone; overridable per prop.
const ERROR_KINDS = {
  notFound: {
    code: '404',
    icon: 'search',
    title: 'Page not found',
    description: 'The link may be outdated, or the shipment was moved. Check the ID and try again.',
    action: 'Back to dashboard',
    secondary: 'Search shipments'
  },
  forbidden: {
    code: '403',
    icon: 'lock',
    title: 'You don’t have access',
    description: 'This view is limited to your organisation’s admins. Ask an admin to grant the Shipments · Edit permission.',
    action: 'Request access',
    secondary: 'Back'
  },
  server: {
    code: '500',
    icon: 'alertTriangle',
    title: 'Something broke on our side',
    description: 'Your data is safe. We logged the error and the team is notified. Try again in a moment.',
    action: 'Retry',
    secondary: 'Status page'
  },
  offline: {
    code: 'OFFLINE',
    icon: 'wifiOff',
    title: 'You’re offline',
    description: 'Live tracking paused. Showing the last update we received; changes will sync when you reconnect.',
    action: 'Retry connection',
    secondary: null
  },
  expired: {
    code: 'SESSION',
    icon: 'clock',
    title: 'Session expired',
    description: 'You were signed out after 8 hours of inactivity. Unsaved changes on this page were kept locally.',
    action: 'Sign in again',
    secondary: null
  },
  maintenance: {
    code: 'MAINTENANCE',
    icon: 'settings',
    title: 'Scheduled maintenance',
    description: 'AiXFreight is being updated. Tracking links still work; booking returns at the time below.',
    action: 'Check status',
    secondary: null
  }
};
function ErrorPage({
  kind = 'server',
  code,
  title,
  description,
  action,
  secondary,
  onAction,
  onSecondary,
  reference,
  lastUpdated,
  compact,
  style
}) {
  const k = ERROR_KINDS[kind] || ERROR_KINDS.server;
  const cap = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  };
  const tone = kind === 'server' ? 'var(--color-danger)' : kind === 'offline' || kind === 'maintenance' ? 'var(--color-warning-fg)' : 'var(--text-muted)';
  return React.createElement('div', {
    role: kind === 'server' ? 'alert' : 'region',
    'aria-label': title || k.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 8,
      padding: compact ? 32 : '72px 32px',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 64,
      height: 64,
      borderRadius: 999,
      border: '3px solid var(--border-default)',
      color: tone,
      marginBottom: 12
    }
  }, React.createElement(__ds_scope.Icon, {
    name: k.icon,
    size: 28
  })), React.createElement('div', {
    style: {
      ...cap,
      color: tone
    }
  }, code || k.code), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: compact ? 28 : 40,
      lineHeight: 1.05,
      textTransform: 'uppercase',
      margin: 0,
      textWrap: 'balance',
      overflowWrap: 'anywhere'
    }
  }, title || k.title), React.createElement('p', {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      fontSize: 15,
      maxWidth: 440,
      lineHeight: 1.55,
      textWrap: 'pretty'
    }
  }, description || k.description), lastUpdated ? React.createElement('div', {
    style: {
      ...cap,
      marginTop: 4
    }
  }, 'Last update ' + lastUpdated) : null, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, React.createElement(__ds_scope.Button, {
    variant: 'navy',
    icon: kind === 'server' || kind === 'offline' ? 'refresh' : undefined,
    onClick: onAction
  }, action || k.action), secondary || secondary === undefined && k.secondary ? React.createElement(__ds_scope.Button, {
    variant: 'secondary',
    onClick: onSecondary
  }, secondary || k.secondary) : null), reference ? React.createElement('div', {
    style: {
      ...cap,
      marginTop: 20,
      letterSpacing: '.04em',
      textTransform: 'none'
    }
  }, 'Reference ' + reference) : null);
}
Object.assign(__ds_scope, { ERROR_KINDS, ErrorPage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/failure/ErrorPage.jsx", error: String((e && e.message) || e) }); }

// components/failure/FormErrorSummary.jsx
try { (() => {
// Form-level error list (WCAG 3.3.1 / 3.3.3). Rendered above the form; each item links to the field. Focus lands here on submit failure.
function FormErrorSummary({
  errors = [],
  title,
  onFocusField,
  autoFocus = true,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (autoFocus && errors.length && ref.current) ref.current.focus();
  }, [errors.length, autoFocus]);
  if (!errors.length) return null;
  const n = errors.length;
  const go = (e, err) => {
    e.preventDefault();
    if (onFocusField) return onFocusField(err.field);
    const el = document.getElementById(err.field);
    if (el) {
      el.focus();
      if (el.getBoundingClientRect().top < 0) window.scrollBy(0, el.getBoundingClientRect().top - 80);
    }
  };
  return React.createElement('div', {
    ref,
    tabIndex: -1,
    role: 'alert',
    'aria-labelledby': 'aix-fes-title',
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 16px',
      background: 'var(--color-danger-bg)',
      border: '1px solid var(--color-danger)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-primary)',
      outline: 'none',
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'alertTriangle',
    size: 18,
    color: 'var(--color-danger)',
    style: {
      marginTop: 2
    }
  }), React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement('div', {
    id: 'aix-fes-title',
    style: {
      fontWeight: 600,
      color: 'var(--color-danger)'
    }
  }, title || (n === 1 ? 'Fix 1 field to continue' : `Fix ${n} fields to continue`)), React.createElement('ol', {
    style: {
      margin: '6px 0 0',
      padding: '0 0 0 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      color: 'var(--text-secondary)'
    }
  }, errors.map((err, i) => React.createElement('li', {
    key: err.field || i
  }, React.createElement('a', {
    href: '#' + err.field,
    onClick: e => go(e, err),
    style: {
      color: 'var(--text-primary)',
      fontWeight: 600,
      textDecoration: 'underline',
      textUnderlineOffset: 3
    }
  }, err.label), err.message ? React.createElement('span', null, ' — ' + err.message) : null)))));
}
Object.assign(__ds_scope, { FormErrorSummary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/failure/FormErrorSummary.jsx", error: String((e && e.message) || e) }); }

// components/failure/ShipmentStatus.jsx
try { (() => {
// Canonical shipment lifecycle. One source of truth for label ↔ tone ↔ allowed transitions so no product team picks its own colors.
const SHIPMENT_STATES = {
  draft: {
    label: 'Draft',
    tone: 'neutral',
    next: ['quoted', 'cancelled'],
    terminal: false
  },
  quoted: {
    label: 'Quoted',
    tone: 'info',
    next: ['booked', 'expired', 'cancelled'],
    terminal: false
  },
  booked: {
    label: 'Booked',
    tone: 'navy',
    next: ['pickedUp', 'cancelled'],
    terminal: false
  },
  pickedUp: {
    label: 'Picked up',
    tone: 'info',
    next: ['inTransit', 'exception'],
    terminal: false
  },
  inTransit: {
    label: 'In transit',
    tone: 'info',
    dot: true,
    next: ['customsHold', 'outForDelivery', 'exception', 'delayed'],
    terminal: false
  },
  delayed: {
    label: 'Delayed',
    tone: 'warning',
    dot: true,
    next: ['inTransit', 'exception', 'outForDelivery'],
    terminal: false
  },
  customsHold: {
    label: 'Customs hold',
    tone: 'warning',
    dot: true,
    next: ['inTransit', 'exception'],
    terminal: false
  },
  exception: {
    label: 'Exception',
    tone: 'danger',
    dot: true,
    next: ['inTransit', 'cancelled', 'returned'],
    terminal: false
  },
  outForDelivery: {
    label: 'Out for delivery',
    tone: 'info',
    dot: true,
    next: ['delivered', 'exception'],
    terminal: false
  },
  delivered: {
    label: 'Delivered',
    tone: 'success',
    next: [],
    terminal: true
  },
  returned: {
    label: 'Returned',
    tone: 'neutral',
    next: [],
    terminal: true
  },
  cancelled: {
    label: 'Cancelled',
    tone: 'neutral',
    next: [],
    terminal: true
  },
  expired: {
    label: 'Expired',
    tone: 'neutral',
    next: ['quoted'],
    terminal: true
  }
};
const canTransition = (from, to) => !!(SHIPMENT_STATES[from] && SHIPMENT_STATES[from].next.includes(to));
const isAttention = s => ['delayed', 'customsHold', 'exception'].includes(s);
function ShipmentStatus({
  status = 'draft',
  since,
  detail,
  size = 'md',
  style
}) {
  const s = SHIPMENT_STATES[status] || {
    label: status,
    tone: 'neutral'
  };
  const badge = React.createElement(__ds_scope.Badge, {
    tone: s.tone,
    dot: s.dot,
    style: size === 'sm' ? {
      height: 20,
      fontSize: 10
    } : undefined
  }, s.label);
  if (!since && !detail) return badge;
  const cap = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: '.06em',
    color: 'var(--text-muted)',
    whiteSpace: 'nowrap'
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0,
      ...style
    }
  }, badge, since ? React.createElement('span', {
    style: cap
  }, since) : null, detail ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: isAttention(status) ? 'var(--text-primary)' : 'var(--text-secondary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      minWidth: 0
    },
    title: detail
  }, detail) : null);
}
Object.assign(__ds_scope, { SHIPMENT_STATES, canTransition, isAttention, ShipmentStatus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/failure/ShipmentStatus.jsx", error: String((e && e.message) || e) }); }

// components/feedback/AiDisclosure.jsx
try { (() => {
// Transparency surface for AI output: "Why this?" → rationale, sources with timestamps, known limits. Collapsed by default so it adds no cognitive load until asked.
function AiDisclosure({
  title = 'Why this recommendation',
  confidence,
  rationale,
  sources = [],
  limits = [],
  defaultOpen = false,
  open: openProp,
  onToggle,
  inverse,
  style
}) {
  const [inner, setInner] = React.useState(defaultOpen);
  const open = openProp === undefined ? inner : openProp;
  const toggle = () => {
    setInner(!open);
    onToggle && onToggle(!open);
  };
  const fg = inverse ? 'var(--text-on-inverse)' : 'var(--text-primary)';
  const muted = inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)';
  const sec = inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-secondary)';
  const border = inverse ? 'var(--border-inverse)' : 'var(--border-default)';
  const cap = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: muted,
    whiteSpace: 'nowrap',
    flex: 'none'
  };
  const id = React.useId ? React.useId() : 'aidisc';
  return React.createElement('div', {
    style: {
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      color: fg,
      minWidth: 0,
      ...style
    }
  }, React.createElement('button', {
    type: 'button',
    'aria-expanded': open,
    'aria-controls': id,
    onClick: toggle,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      minHeight: 40,
      padding: '8px 12px',
      border: 0,
      background: 'transparent',
      color: fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'sparkles',
    size: 16,
    color: 'var(--accent)'
  }), React.createElement('span', {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    title
  }, title), confidence != null ? React.createElement('span', {
    style: {
      ...cap,
      color: sec
    },
    title: 'Model confidence'
  }, `${confidence}% conf.`) : null, React.createElement(__ds_scope.Icon, {
    name: 'chevronDown',
    size: 16,
    color: muted,
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-out)'
    }
  })), open ? React.createElement('div', {
    id,
    style: {
      padding: '0 12px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: 13,
      lineHeight: 1.5
    }
  }, rationale ? React.createElement('p', {
    style: {
      margin: 0,
      color: fg
    }
  }, rationale) : null, sources.length ? React.createElement('div', null, React.createElement('div', {
    style: {
      ...cap,
      marginBottom: 6
    }
  }, 'Sources'), React.createElement('ul', {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, sources.map((s, i) => React.createElement('li', {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'baseline',
      minWidth: 0
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'fileText',
    size: 14,
    color: muted,
    style: {
      alignSelf: 'center'
    }
  }), s.href ? React.createElement('a', {
    href: s.href,
    style: {
      color: inverse ? 'var(--color-ocean-dark)' : 'var(--text-link)',
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    title: s.label
  }, s.label) : React.createElement('span', {
    style: {
      color: fg,
      flex: 1,
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    title: s.label
  }, s.label), s.time ? React.createElement('span', {
    style: {
      ...cap,
      marginLeft: 'auto',
      flex: 'none'
    }
  }, s.time) : null)))) : null, limits.length ? React.createElement('div', null, React.createElement('div', {
    style: {
      ...cap,
      marginBottom: 6
    }
  }, 'Limits'), React.createElement('ul', {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      color: sec
    }
  }, limits.map((l, i) => React.createElement('li', {
    key: i,
    style: {
      display: 'flex',
      gap: 8
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'alertTriangle',
    size: 14,
    color: 'var(--color-warning-fg)',
    style: {
      marginTop: 3
    }
  }), React.createElement('span', null, l))))) : null) : null);
}
Object.assign(__ds_scope, { AiDisclosure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/AiDisclosure.jsx", error: String((e && e.message) || e) }); }

// components/feedback/AiFeedback.jsx
try { (() => {
// Response-satisfaction signal for AI output: thumbs + one-tap reason on thumbs-down. Feeds the "Response satisfaction" metric (guidelines/ai-ux.md).
function AiFeedback({
  value,
  onChange,
  reasons = ['Wrong cost', 'Wrong ETA', 'Not relevant', 'Too much to review'],
  reason,
  onReason,
  label = 'Was this useful?',
  thanks = 'Thanks — this tunes future recommendations.',
  inverse,
  size = 'md',
  style
}) {
  const [inner, setInner] = React.useState(value ?? null);
  const [innerReason, setInnerReason] = React.useState(reason ?? null);
  const v = value === undefined ? inner : value;
  const r = reason === undefined ? innerReason : reason;
  const pick = n => {
    const next = v === n ? null : n;
    setInner(next);
    onChange && onChange(next);
    if (next !== 'down') {
      setInnerReason(null);
      onReason && onReason(null);
    }
  };
  const pickReason = x => {
    setInnerReason(x);
    onReason && onReason(x);
  };
  const h = size === 'sm' ? 32 : 40;
  const mutedFg = inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-secondary)';
  const border = inverse ? 'var(--border-inverse)' : 'var(--border-strong)';
  const btn = (n, icon, onColor, onBg) => {
    const on = v === n;
    return React.createElement('button', {
      type: 'button',
      'aria-pressed': on,
      'aria-label': n === 'up' ? 'Useful' : 'Not useful',
      onClick: () => pick(n),
      style: {
        width: h,
        height: h,
        display: 'grid',
        placeItems: 'center',
        borderRadius: 'var(--radius-md)',
        border: `1px solid ${on ? onColor : border}`,
        background: on ? onBg : 'transparent',
        color: on ? onColor : mutedFg,
        cursor: 'pointer',
        transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)'
      }
    }, React.createElement(__ds_scope.Icon, {
      name: icon,
      size: size === 'sm' ? 16 : 18
    }));
  };
  return React.createElement('div', {
    role: 'group',
    'aria-label': label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 13,
      color: mutedFg,
      minWidth: 0
    }
  }, v ? thanks : label), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 6,
      marginLeft: 'auto'
    }
  }, btn('up', 'thumbsUp', 'var(--color-eco)', 'var(--color-eco-100)'), btn('down', 'thumbsDown', 'var(--color-danger)', 'var(--color-danger-bg)'))), v === 'down' && reasons.length ? React.createElement('div', {
    role: 'radiogroup',
    'aria-label': 'What was wrong?',
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, reasons.map(x => {
    const on = r === x;
    return React.createElement('button', {
      key: x,
      type: 'button',
      role: 'radio',
      'aria-checked': on,
      onClick: () => pickReason(x),
      style: {
        height: 28,
        padding: '0 10px',
        borderRadius: 999,
        border: `1px solid ${on ? 'var(--fill-selected)' : border}`,
        background: on ? 'var(--fill-selected)' : 'transparent',
        color: on ? 'var(--fill-selected-fg)' : mutedFg,
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        fontSize: 11,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        cursor: 'pointer'
      }
    }, x);
  })) : null);
}
Object.assign(__ds_scope, { AiFeedback });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/AiFeedback.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const T = {
  info: ['info', 'var(--color-info)', 'var(--color-info-bg)'],
  success: ['circleCheck', 'var(--color-success)', 'var(--color-success-bg)'],
  warning: ['alertTriangle', 'var(--color-warning-fg)', 'var(--color-warning-bg)'],
  danger: ['alertTriangle', 'var(--color-danger)', 'var(--color-danger-bg)'],
  ai: ['sparkles', 'var(--color-ai-orange-600)', 'var(--accent-soft)']
};
function Alert({
  tone = 'info',
  title,
  children,
  action,
  onAction,
  onClose,
  style
}) {
  const [icon, fg, bg] = T[tone] || T.info;
  return React.createElement('div', {
    role: tone === 'danger' ? 'alert' : 'status',
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '12px 16px',
      background: bg,
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.5,
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: fg,
    style: {
      marginTop: 2
    }
  }), React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? React.createElement('div', {
    style: {
      fontWeight: 600,
      color: fg
    }
  }, title) : null, children ? React.createElement('div', {
    style: {
      color: 'var(--text-secondary)'
    }
  }, children) : null), action ? React.createElement('button', {
    type: 'button',
    onClick: onAction,
    style: {
      border: 0,
      background: 'transparent',
      padding: 0,
      color: fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer',
      flex: 'none'
    }
  }, action) : null, onClose ? React.createElement('button', {
    type: 'button',
    'aria-label': 'Dismiss',
    onClick: onClose,
    style: {
      border: 0,
      background: 'transparent',
      padding: 0,
      color: 'var(--text-muted)',
      cursor: 'pointer',
      display: 'grid'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'package',
  eyebrow,
  title,
  description,
  action,
  compact,
  style
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 8,
      padding: compact ? 32 : 64,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, React.createElement('span', {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 56,
      height: 56,
      borderRadius: 999,
      border: '3px solid var(--border-default)',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  })), eyebrow ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, eyebrow) : null, React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.2,
      textTransform: 'uppercase',
      margin: 0
    }
  }, title), description ? React.createElement('p', {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      fontSize: 14,
      maxWidth: 360,
      lineHeight: 1.5
    }
  }, description) : null, action ? React.createElement('div', {
    style: {
      marginTop: 12
    }
  }, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function Progress({
  value = 0,
  max = 100,
  mode,
  color,
  label,
  showValue,
  size = 'md',
  indeterminate,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const h = size === 'sm' ? 4 : size === 'lg' ? 10 : 6;
  const c = color || (mode ? 'var(--color-' + (mode === 'rail' ? 'land' : mode) + ')' : 'var(--fill-selected)');
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label || showValue ? React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, React.createElement('span', null, label || ''), showValue ? React.createElement('span', null, Math.round(pct) + '%') : null) : null, React.createElement('div', {
    role: 'progressbar',
    'aria-valuenow': indeterminate ? undefined : value,
    'aria-valuemax': max,
    style: {
      height: h,
      background: 'var(--surface-sunken)',
      borderRadius: 999,
      overflow: 'hidden',
      position: 'relative'
    }
  }, React.createElement('div', {
    style: {
      width: indeterminate ? '40%' : pct + '%',
      height: '100%',
      background: c,
      borderRadius: 999,
      transition: 'width var(--duration-slow) var(--ease-out)',
      position: indeterminate ? 'absolute' : 'static',
      animation: indeterminate ? 'aix-indeterminate 1.4s var(--ease-in-out) infinite' : 'none'
    }
  })), indeterminate ? React.createElement('style', null, '@keyframes aix-indeterminate{0%{left:-40%}100%{left:100%}}') : null);
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  width = '100%',
  height = 14,
  radius = 4,
  circle,
  lines,
  style
}) {
  const base = {
    background: 'linear-gradient(90deg, var(--surface-sunken) 25%, var(--color-mist) 50%, var(--surface-sunken) 75%)',
    backgroundSize: '200% 100%',
    animation: 'aix-shimmer 1.4s ease-in-out infinite',
    borderRadius: circle ? 999 : radius
  };
  const kf = React.createElement('style', null, '@keyframes aix-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}');
  if (lines) return React.createElement('div', {
    'aria-busy': true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, kf, Array.from({
    length: lines
  }).map((_, i) => React.createElement('div', {
    key: i,
    style: {
      ...base,
      height,
      width: i === lines - 1 ? '60%' : '100%'
    }
  })));
  return React.createElement('div', {
    'aria-busy': true,
    style: {
      display: 'inline-block',
      ...style
    }
  }, kf, React.createElement('div', {
    style: {
      ...base,
      width: circle ? height : width,
      height
    }
  }));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  label,
  description,
  disabled,
  indeterminate,
  style
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, React.createElement('span', {
    role: 'checkbox',
    'aria-checked': indeterminate ? 'mixed' : checked,
    tabIndex: 0,
    onClick: () => !disabled && onChange && onChange(!checked),
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        !disabled && onChange && onChange(!checked);
      }
    },
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 18,
      height: 18,
      marginTop: 1,
      borderRadius: 'var(--radius-sm)',
      border: '2px solid ' + (checked || indeterminate ? 'var(--fill-selected)' : 'var(--border-strong)'),
      background: checked || indeterminate ? 'var(--fill-selected)' : 'var(--surface-card)',
      color: 'var(--fill-selected-fg)',
      flex: 'none',
      transition: 'background var(--duration-fast)'
    }
  }, indeterminate ? React.createElement('span', {
    style: {
      width: 8,
      height: 2,
      background: 'var(--fill-selected-fg)'
    }
  }) : checked ? React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 12,
    strokeWidth: 3
  }) : null), label || description ? React.createElement('span', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label ? React.createElement('span', {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, label) : null, description ? React.createElement('span', {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required,
  children
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: error ? 'var(--color-danger)' : 'var(--text-secondary)'
    }
  }, label, required ? React.createElement('span', {
    style: {
      color: 'var(--accent)'
    }
  }, ' *') : null) : null, children, error || hint ? React.createElement('span', {
    style: {
      fontSize: 12,
      color: error ? 'var(--color-danger)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
function Input({
  label,
  hint,
  error,
  required,
  icon,
  prefix,
  suffix,
  size = 'md',
  disabled,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  return React.createElement(Field, {
    label,
    hint,
    error,
    required
  }, React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: '1px solid ' + (error ? 'var(--color-danger)' : focus ? 'var(--border-strong)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px rgba(10,25,49,.12)' : 'none',
      transition: 'box-shadow var(--duration-fast), border-color var(--duration-fast)',
      opacity: disabled ? .6 : 1,
      ...style
    }
  }, icon ? React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: 'var(--text-muted)'
  }) : null, prefix ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, prefix) : null, React.createElement('input', {
    disabled,
    ...rest,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 0,
      background: 'transparent',
      fontFamily: rest.mono ? 'var(--font-mono)' : 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }), suffix ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, suffix) : null));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  options = [],
  value,
  onChange,
  name,
  label,
  direction = 'column',
  disabled,
  style
}) {
  return React.createElement('fieldset', {
    style: {
      border: 0,
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label ? React.createElement('legend', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 8,
      padding: 0
    }
  }, label) : null, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 10
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label,
      on = v === value;
    return React.createElement('label', {
      key: v,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? .5 : 1
      }
    }, React.createElement('input', {
      type: 'radio',
      name,
      value: v,
      checked: on,
      disabled,
      onChange: () => onChange && onChange(v),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), React.createElement('span', {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 18,
        height: 18,
        borderRadius: 999,
        border: '2px solid ' + (on ? 'var(--fill-selected)' : 'var(--border-strong)'),
        background: 'var(--surface-card)',
        flex: 'none'
      }
    }, on ? React.createElement('span', {
      style: {
        width: 8,
        height: 8,
        borderRadius: 999,
        background: 'var(--accent)'
      }
    }) : null), React.createElement('span', {
      style: {
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--text-primary)'
      }
    }, l));
  })));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required,
  children
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: error ? 'var(--color-danger)' : 'var(--text-secondary)'
    }
  }, label, required ? React.createElement('span', {
    style: {
      color: 'var(--accent)'
    }
  }, ' *') : null) : null, children, error || hint ? React.createElement('span', {
    style: {
      fontSize: 12,
      color: error ? 'var(--color-danger)' : 'var(--text-muted)'
    }
  }, error || hint) : null);
}
function Select({
  label,
  hint,
  error,
  required,
  options = [],
  value,
  onChange,
  placeholder,
  disabled,
  size = 'md',
  style
}) {
  const h = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  return React.createElement(Field, {
    label,
    hint,
    error,
    required
  }, React.createElement('span', {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, React.createElement('select', {
    value: value ?? '',
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 36px 0 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: '1px solid ' + (error ? 'var(--color-danger)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: value ? 'var(--text-primary)' : 'var(--text-muted)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, placeholder ? React.createElement('option', {
    value: '',
    disabled: true
  }, placeholder) : null, options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return React.createElement('option', {
      key: v,
      value: v
    }, l);
  })), React.createElement(__ds_scope.Icon, {
    name: 'chevronDown',
    size: 16,
    color: 'var(--text-muted)',
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      marginTop: -8,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  disabled,
  size = 'md',
  style
}) {
  const w = size === 'sm' ? 32 : 40,
    h = size === 'sm' ? 18 : 22,
    k = h - 4;
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, React.createElement('span', {
    role: 'switch',
    'aria-checked': checked,
    tabIndex: 0,
    onClick: () => !disabled && onChange && onChange(!checked),
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        !disabled && onChange && onChange(!checked);
      }
    },
    style: {
      position: 'relative',
      width: w,
      height: h,
      borderRadius: 999,
      background: checked ? 'var(--accent)' : 'var(--color-gray)',
      transition: 'background var(--duration-base) var(--ease-out)',
      flex: 'none'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? w - k - 2 : 2,
      width: k,
      height: k,
      borderRadius: 999,
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-out)'
    }
  })), label ? React.createElement('span', {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-primary)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  hint,
  error,
  required,
  rows = 4,
  maxLength,
  value,
  defaultValue,
  onChange,
  disabled,
  placeholder,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const [len, setLen] = React.useState((value ?? defaultValue ?? '').length);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: error ? 'var(--color-danger)' : 'var(--text-secondary)'
    }
  }, label, required ? React.createElement('span', {
    style: {
      color: 'var(--accent)'
    }
  }, ' *') : null) : null, React.createElement('textarea', {
    rows,
    maxLength,
    value,
    defaultValue,
    disabled,
    placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onChange: e => {
      setLen(e.target.value.length);
      onChange && onChange(e);
    },
    style: {
      resize: 'vertical',
      padding: '10px 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: '1px solid ' + (error ? 'var(--color-danger)' : focus ? 'var(--border-strong)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px rgba(10,25,49,.12)' : 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'var(--text-primary)',
      outline: 0,
      transition: 'box-shadow var(--duration-fast), border-color var(--duration-fast)'
    }
  }), React.createElement('span', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: error ? 'var(--color-danger)' : 'var(--text-muted)'
    }
  }, React.createElement('span', null, error || hint || ''), maxLength ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, len + '/' + maxLength) : null));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  inverse,
  style
}) {
  return React.createElement('nav', {
    'aria-label': 'Breadcrumb',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0,
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)',
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    const label = typeof it === 'string' ? it : it.label;
    const href = typeof it === 'string' ? undefined : it.href;
    return React.createElement(React.Fragment, {
      key: i
    }, last ? React.createElement('span', {
      'aria-current': 'page',
      title: label,
      style: {
        color: inverse ? '#fff' : 'var(--text-primary)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        minWidth: 0
      }
    }, label) : React.createElement('a', {
      href: href || '#',
      onClick: it.onClick,
      style: {
        color: 'inherit',
        textDecoration: 'none'
      }
    }, label), last ? null : React.createElement(__ds_scope.Icon, {
      name: 'chevronRight',
      size: 12
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/DropdownMenu.jsx
try { (() => {
function DropdownMenu({
  trigger,
  items = [],
  align = 'left',
  open: openProp,
  onOpenChange,
  style
}) {
  const [inner, setInner] = React.useState(false);
  const open = openProp ?? inner;
  const set = v => {
    setInner(v);
    onOpenChange && onOpenChange(v);
  };
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) set(false);
    };
    const k = e => {
      if (e.key === 'Escape') set(false);
    };
    document.addEventListener('mousedown', h);
    document.addEventListener('keydown', k);
    return () => {
      document.removeEventListener('mousedown', h);
      document.removeEventListener('keydown', k);
    };
  }, [open]);
  return React.createElement('div', {
    ref,
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, React.createElement('span', {
    onClick: () => set(!open),
    'aria-haspopup': 'menu',
    'aria-expanded': open,
    style: {
      display: 'inline-flex'
    }
  }, trigger), open ? React.createElement('div', {
    role: 'menu',
    style: {
      position: 'absolute',
      top: '100%',
      [align === 'right' ? 'right' : 'left']: 0,
      marginTop: 6,
      minWidth: 200,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      padding: 6,
      zIndex: 40,
      fontFamily: 'var(--font-body)'
    }
  }, items.map((it, i) => it === '-' || it.divider ? React.createElement('hr', {
    key: i,
    style: {
      border: 0,
      borderTop: '1px solid var(--border-default)',
      margin: '6px 0'
    }
  }) : React.createElement('button', {
    key: i,
    type: 'button',
    role: 'menuitem',
    disabled: it.disabled,
    onClick: () => {
      set(false);
      it.onClick && it.onClick();
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-sunken)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      height: 36,
      padding: '0 10px',
      border: 0,
      borderRadius: 6,
      background: 'transparent',
      color: it.danger ? 'var(--color-danger)' : 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 14,
      textAlign: 'left',
      cursor: it.disabled ? 'not-allowed' : 'pointer',
      opacity: it.disabled ? .45 : 1
    }
  }, it.icon ? React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 16,
    color: it.danger ? 'var(--color-danger)' : 'var(--text-muted)'
  }) : null, it.label, it.shortcut ? React.createElement('span', {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)'
    }
  }, it.shortcut) : null))) : null);
}
Object.assign(__ds_scope, { DropdownMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/DropdownMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  total,
  pageSize,
  style
}) {
  const go = p => {
    if (p >= 1 && p <= pageCount && p !== page) onChange && onChange(p);
  };
  const pages = [];
  for (let p = 1; p <= pageCount; p++) {
    if (p === 1 || p === pageCount || Math.abs(p - page) <= 1) pages.push(p);else if (pages[pages.length - 1] !== '…') pages.push('…');
  }
  const btn = (content, props, on) => React.createElement('button', {
    type: 'button',
    ...props,
    style: {
      display: 'grid',
      placeItems: 'center',
      minWidth: 32,
      height: 32,
      padding: '0 8px',
      border: '1px solid ' + (on ? 'var(--fill-selected)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      background: on ? 'var(--fill-selected)' : 'var(--surface-card)',
      color: on ? 'var(--fill-selected-fg)' : 'var(--text-secondary)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 13,
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      opacity: props.disabled ? .4 : 1
    }
  }, content);
  return React.createElement('nav', {
    'aria-label': 'Pagination',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, total != null ? React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, (page - 1) * (pageSize || 0) + 1 + '–' + Math.min(page * (pageSize || total), total) + ' of ' + total) : null, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 'auto'
    }
  }, btn(React.createElement(__ds_scope.Icon, {
    name: 'chevronRight',
    size: 14,
    style: {
      transform: 'rotate(180deg)'
    }
  }), {
    'aria-label': 'Previous',
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }), pages.map((p, i) => p === '…' ? React.createElement('span', {
    key: 'e' + i,
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 24,
      color: 'var(--text-muted)'
    }
  }, '…') : React.createElement(React.Fragment, {
    key: p
  }, btn(p, {
    'aria-current': p === page ? 'page' : undefined,
    onClick: () => go(p)
  }, p === page))), btn(React.createElement(__ds_scope.Icon, {
    name: 'chevronRight',
    size: 14
  }), {
    'aria-label': 'Next',
    disabled: page >= pageCount,
    onClick: () => go(page + 1)
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
function SidebarNav({
  items = [],
  value,
  onChange,
  base = '',
  footer,
  collapsed,
  style
}) {
  return React.createElement('aside', {
    style: {
      width: collapsed ? 72 : 'var(--sidebar-width)',
      flex: 'none',
      minHeight: '100%',
      background: 'var(--surface-inverse)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: collapsed ? '20px 12px' : '20px 16px',
      gap: 24,
      transition: 'width var(--duration-slow) var(--ease-out)',
      ...style
    }
  }, React.createElement(__ds_scope.Logo, {
    variant: collapsed ? 'mark' : 'horizontal',
    inverse: true,
    height: collapsed ? 30 : 34,
    base,
    style: {
      marginLeft: collapsed ? 0 : 4,
      alignSelf: collapsed ? 'center' : 'flex-start'
    }
  }), React.createElement('nav', {
    'aria-label': 'Primary',
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(it => {
    const on = it.value === value;
    return React.createElement('button', {
      key: it.value,
      type: 'button',
      title: it.label,
      'aria-current': on ? 'page' : undefined,
      onClick: () => onChange && onChange(it.value),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'flex-start',
        gap: 12,
        height: 40,
        padding: collapsed ? 0 : '0 12px',
        border: 0,
        borderRadius: 'var(--radius-md)',
        background: on ? 'var(--surface-inverse-raised)' : 'transparent',
        color: on ? '#fff' : 'var(--text-on-inverse-muted)',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: 14,
        cursor: 'pointer',
        textAlign: 'left',
        boxShadow: on ? 'inset 3px 0 0 var(--accent)' : 'none',
        position: 'relative'
      }
    }, it.icon ? React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18
    }) : null, collapsed ? null : React.createElement('span', {
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        minWidth: 0,
        flex: 1
      }
    }, it.label), it.count != null && !collapsed ? React.createElement('span', {
      style: {
        marginLeft: 'auto',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        padding: '1px 6px',
        borderRadius: 999,
        background: 'var(--accent)',
        color: '#fff'
      }
    }, it.count) : null);
  })), footer ? React.createElement('div', {
    style: {
      marginTop: 'auto'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function Stepper({
  steps = [],
  current = 0,
  onSelect,
  style
}) {
  return React.createElement('ol', {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      gap: 8,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, steps.map((s, i) => {
    const done = i < current,
      on = i === current;
    const label = typeof s === 'string' ? s : s.label;
    return React.createElement('li', {
      key: i,
      'aria-current': on ? 'step' : undefined,
      onClick: () => done && onSelect && onSelect(i),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        cursor: done && onSelect ? 'pointer' : 'default'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, React.createElement('span', {
      style: {
        display: 'grid',
        placeItems: 'center',
        width: 24,
        height: 24,
        borderRadius: 999,
        flex: 'none',
        background: done ? 'var(--fill-selected)' : on ? 'var(--accent)' : 'var(--surface-card)',
        border: '2px solid ' + (done ? 'var(--fill-selected)' : on ? 'var(--accent)' : 'var(--border-strong)'),
        color: done ? 'var(--fill-selected-fg)' : on ? '#fff' : 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        fontSize: 11
      }
    }, done ? React.createElement(__ds_scope.Icon, {
      name: 'check',
      size: 12,
      strokeWidth: 3
    }) : i + 1), React.createElement('span', {
      style: {
        height: 2,
        flex: 1,
        background: done ? 'var(--fill-selected)' : 'var(--border-default)'
      }
    })), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 500,
        fontSize: 11,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: on ? 'var(--text-primary)' : 'var(--text-muted)'
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Topbar.jsx
try { (() => {
function Topbar({
  title,
  breadcrumb,
  actions,
  search = true,
  searchPlaceholder = 'Search…',
  onSearch,
  user,
  notifications,
  themeToggle,
  style
}) {
  return React.createElement('header', {
    style: {
      height: 'var(--topbar-height)',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 28px',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minWidth: 0,
      flex: '1 1 auto',
      overflow: 'hidden'
    }
  }, breadcrumb, React.createElement('h1', {
    title,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.2,
      textTransform: 'uppercase',
      margin: 0,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      minWidth: 0,
      letterSpacing: '-.01em'
    }
  }, title)), React.createElement('div', {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 'none'
    }
  }, search ? React.createElement('div', {
    style: {
      width: 'clamp(140px, 22vw, 260px)'
    }
  }, React.createElement(__ds_scope.Input, {
    icon: 'search',
    placeholder: searchPlaceholder,
    size: 'sm',
    onChange: e => onSearch && onSearch(e.target.value)
  })) : null, actions, themeToggle ? React.createElement(__ds_scope.ThemeToggle, {
    variant: 'icon'
  }) : null, React.createElement(__ds_scope.IconButton, {
    icon: 'bell',
    label: 'Notifications',
    badge: !!notifications
  }), user ? React.createElement(__ds_scope.Avatar, {
    name: user.name,
    src: user.src,
    size: 'sm'
  }) : null));
}
Object.assign(__ds_scope, { Topbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Topbar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  title,
  eyebrow,
  actions,
  children,
  footer,
  padding = 24,
  inverse,
  elevated,
  interactive,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('section', {
    onClick,
    role: interactive ? 'button' : undefined,
    tabIndex: interactive ? 0 : undefined,
    onKeyDown: interactive ? e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick && onClick();
      }
    } : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: inverse ? 'var(--surface-inverse-raised)' : 'var(--surface-card)',
      color: inverse ? '#fff' : 'var(--text-primary)',
      border: '1px solid ' + (inverse ? 'var(--border-inverse)' : hover && interactive ? 'var(--border-strong)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-lg)',
      boxShadow: elevated ? 'var(--shadow-md)' : hover && interactive ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'box-shadow var(--duration-base) var(--ease-out), border-color var(--duration-base)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, title || eyebrow || actions ? React.createElement('header', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      padding: padding + 'px ' + padding + 'px 0'
    }
  }, React.createElement('div', {
    style: {
      minWidth: 0,
      flex: '1 1 auto'
    }
  }, eyebrow ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)',
      marginBottom: 4
    }
  }, eyebrow) : null, title ? React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.2,
      textTransform: 'uppercase',
      margin: 0,
      letterSpacing: '-.01em',
      overflowWrap: 'anywhere',
      textWrap: 'balance'
    }
  }, title) : null), actions ? React.createElement('div', {
    style: {
      display: 'flex',
      gap: 8,
      flex: 'none'
    }
  }, actions) : null) : null, React.createElement('div', {
    style: {
      padding,
      flex: 1
    }
  }, children), footer ? React.createElement('footer', {
    style: {
      padding: '12px ' + padding + 'px',
      borderTop: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-default)'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  eyebrow,
  children,
  footer,
  onClose,
  width = 520,
  inline,
  style
}) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const h = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [open, onClose]);
  if (!open) return null;
  const panel = React.createElement('div', {
    role: 'dialog',
    'aria-modal': !inline,
    'aria-label': title,
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, React.createElement('header', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: '24px 24px 0',
      gap: 16
    }
  }, React.createElement('div', {
    style: {
      minWidth: 0,
      flex: '1 1 auto'
    }
  }, eyebrow ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 4
    }
  }, eyebrow) : null, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.1,
      textTransform: 'uppercase',
      margin: 0,
      overflowWrap: 'anywhere',
      textWrap: 'balance'
    }
  }, title)), onClose ? React.createElement(__ds_scope.IconButton, {
    icon: 'x',
    label: 'Close',
    onClick: onClose
  }) : null), React.createElement('div', {
    style: {
      padding: 24,
      color: 'var(--text-secondary)',
      fontSize: 15,
      lineHeight: 1.55
    }
  }, children), footer ? React.createElement('footer', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '16px 24px',
      background: 'var(--surface-sunken)'
    }
  }, footer) : null);
  if (inline) return panel;
  return React.createElement('div', {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(10,25,49,.6)',
      backdropFilter: 'blur(4px)',
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      zIndex: 100
    }
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }
  }, panel));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/failure/ConfirmDialog.jsx
try { (() => {
// Destructive / irreversible confirmation. Verb repeats in the primary button; optional typed confirmation for high-stakes actions (cancel booking, delete org).
function ConfirmDialog({
  open = true,
  title,
  eyebrow = 'Confirm',
  children,
  verb = 'Delete',
  cancelLabel = 'Keep',
  tone = 'danger',
  consequences = [],
  typeToConfirm,
  onConfirm,
  onCancel,
  loading,
  inline,
  style
}) {
  const [typed, setTyped] = React.useState('');
  React.useEffect(() => {
    if (!open) setTyped('');
  }, [open]);
  const ok = !typeToConfirm || typed.trim() === typeToConfirm;
  const cap = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  };
  return React.createElement(__ds_scope.Dialog, {
    open,
    title,
    eyebrow,
    onClose: onCancel,
    width: 480,
    inline,
    style,
    footer: [React.createElement(__ds_scope.Button, {
      key: 'c',
      variant: 'secondary',
      onClick: onCancel,
      disabled: loading
    }, cancelLabel), React.createElement(__ds_scope.Button, {
      key: 'k',
      variant: tone === 'danger' ? 'danger' : 'navy',
      disabled: !ok,
      loading,
      onClick: onConfirm,
      icon: tone === 'danger' ? 'trash' : undefined
    }, verb)]
  }, children ? React.createElement('p', {
    style: {
      margin: 0
    }
  }, children) : null, consequences.length ? React.createElement('ul', {
    style: {
      margin: '12px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontSize: 14
    }
  }, consequences.map((c, i) => React.createElement('li', {
    key: i,
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'alertTriangle',
    size: 16,
    color: tone === 'danger' ? 'var(--color-danger)' : 'var(--color-warning-fg)',
    style: {
      marginTop: 3
    }
  }), React.createElement('span', null, c)))) : null, typeToConfirm ? React.createElement('div', {
    style: {
      marginTop: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement('label', {
    htmlFor: 'aix-confirm-input',
    style: cap
  }, 'Type ', React.createElement('span', {
    style: {
      color: 'var(--text-primary)'
    }
  }, typeToConfirm), ' to confirm'), React.createElement('input', {
    id: 'aix-confirm-input',
    value: typed,
    onChange: e => setTyped(e.target.value),
    autoComplete: 'off',
    spellCheck: false,
    style: {
      height: 'var(--control-height-md)',
      padding: '0 12px',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      outline: 'none'
    }
  })) : null);
}
Object.assign(__ds_scope, { ConfirmDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/failure/ConfirmDialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Drawer.jsx
try { (() => {
function Drawer({
  open = true,
  title,
  eyebrow,
  children,
  footer,
  onClose,
  width = 440,
  side = 'right',
  inline,
  style
}) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const h = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', h);
    return () => document.removeEventListener('keydown', h);
  }, [open, onClose]);
  if (!open) return null;
  const panel = React.createElement('aside', {
    role: 'dialog',
    'aria-label': title,
    style: {
      width: '100%',
      maxWidth: width,
      height: inline ? 'auto' : '100%',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)',
      borderRadius: inline ? 'var(--radius-lg)' : 0,
      border: inline ? '1px solid var(--border-default)' : 0,
      ...style
    }
  }, React.createElement('header', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      padding: '20px 24px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, React.createElement('div', {
    style: {
      minWidth: 0,
      flex: '1 1 auto'
    }
  }, eyebrow ? React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 4
    }
  }, eyebrow) : null, React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.2,
      textTransform: 'uppercase',
      margin: 0
    }
  }, title)), onClose ? React.createElement(__ds_scope.IconButton, {
    icon: 'x',
    label: 'Close',
    onClick: onClose
  }) : null), React.createElement('div', {
    style: {
      padding: 24,
      flex: 1,
      overflow: 'auto',
      color: 'var(--text-secondary)',
      fontSize: 14,
      lineHeight: 1.55
    }
  }, children), footer ? React.createElement('footer', {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '16px 24px',
      borderTop: '1px solid var(--border-default)',
      background: 'var(--surface-sunken)'
    }
  }, footer) : null);
  if (inline) return panel;
  return React.createElement('div', {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(10,25,49,.5)',
      display: 'flex',
      justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
      zIndex: 100
    }
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      height: '100%',
      display: 'flex'
    }
  }, panel));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  inverse,
  style
}) {
  const [inner, setInner] = React.useState(value ?? (items[0] && (items[0].value ?? items[0])));
  const cur = value ?? inner;
  const set = v => {
    setInner(v);
    onChange && onChange(v);
  };
  const pill = variant === 'pill';
  return React.createElement('div', {
    role: 'tablist',
    style: {
      display: 'flex',
      gap: pill ? 4 : 24,
      padding: pill ? 4 : 0,
      background: pill ? inverse ? 'rgba(255,255,255,.08)' : 'var(--surface-sunken)' : 'transparent',
      borderRadius: pill ? 'var(--radius-md)' : 0,
      borderBottom: pill ? 0 : '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-default)'),
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, items.map(it => {
    const v = it.value ?? it,
      l = it.label ?? it,
      on = v === cur,
      count = it.count;
    return React.createElement('button', {
      key: v,
      role: 'tab',
      'aria-selected': on,
      type: 'button',
      onClick: () => set(v),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        height: pill ? 32 : 40,
        padding: pill ? '0 14px' : 0,
        border: 0,
        borderRadius: pill ? 6 : 0,
        background: pill && on ? inverse ? '#0A1931' : 'var(--surface-card)' : 'transparent',
        boxShadow: pill && on ? 'var(--shadow-sm)' : 'none',
        borderBottom: pill ? 0 : '2px solid ' + (on ? 'var(--accent)' : 'transparent'),
        marginBottom: pill ? 0 : -1,
        color: on ? inverse ? '#fff' : 'var(--text-primary)' : inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-secondary)',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer',
        transition: 'color var(--duration-fast)'
      }
    }, l, count != null ? React.createElement('span', {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        padding: '1px 6px',
        borderRadius: 999,
        background: on ? 'var(--accent-soft)' : inverse ? 'rgba(255,255,255,.1)' : 'var(--surface-sunken)',
        color: on ? 'var(--color-ai-orange-600)' : 'inherit'
      }
    }, count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Toast.jsx
try { (() => {
const T = {
  info: ['info', 'var(--color-ocean-dark)'],
  success: ['circleCheck', 'var(--color-eco)'],
  warning: ['alertTriangle', 'var(--color-gold)'],
  danger: ['alertTriangle', '#FF7A5C'],
  ai: ['sparkles', 'var(--accent)']
};
function Toast({
  tone = 'info',
  title,
  message,
  action,
  onAction,
  onClose,
  style
}) {
  const [icon, c] = T[tone] || T.info;
  return React.createElement('div', {
    role: 'status',
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 380,
      maxWidth: '100%',
      padding: '14px 16px',
      background: '#0A1931',
      color: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      borderLeft: '3px solid ' + c,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: c,
    style: {
      marginTop: 1
    }
  }), React.createElement('div', {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? React.createElement('div', {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, title) : null, message ? React.createElement('div', {
    style: {
      fontSize: 13,
      color: 'var(--text-on-inverse-muted)',
      marginTop: 2
    }
  }, message) : null, action ? React.createElement('button', {
    type: 'button',
    onClick: onAction,
    style: {
      marginTop: 8,
      border: 0,
      background: 'transparent',
      padding: 0,
      color: c,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, action) : null), onClose ? React.createElement('button', {
    type: 'button',
    'aria-label': 'Dismiss',
    onClick: onClose,
    style: {
      border: 0,
      background: 'transparent',
      color: 'var(--text-on-inverse-muted)',
      cursor: 'pointer',
      padding: 0,
      display: 'grid'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Toast.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = 'top',
  open,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const show = open ?? hover;
  const pos = placement === 'bottom' ? {
    top: '100%',
    left: '50%',
    transform: 'translate(-50%,8px)'
  } : placement === 'right' ? {
    left: '100%',
    top: '50%',
    transform: 'translate(8px,-50%)'
  } : placement === 'left' ? {
    right: '100%',
    top: '50%',
    transform: 'translate(-8px,-50%)'
  } : {
    bottom: '100%',
    left: '50%',
    transform: 'translate(-50%,-8px)'
  };
  return React.createElement('span', {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, React.createElement('span', {
    role: 'tooltip',
    style: {
      position: 'absolute',
      ...pos,
      background: '#0A1931',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      lineHeight: 1.4,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'normal',
      maxWidth: 260,
      width: 'max-content',
      overflowWrap: 'anywhere',
      boxShadow: 'var(--shadow-md)',
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--duration-fast) var(--ease-out)',
      zIndex: 50
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tooltip.jsx", error: String((e && e.message) || e) }); }

// tokens/tailwind.preset.js
try { (() => {
// Tailwind preset — maps AiXFreight tokens to utilities. Usage: presets: [require('./tokens/tailwind.preset.js')]
// Colors reference the CSS variables so light/dark switching stays in CSS.
const v = n => 'var(--' + n + ')';
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    fontFamily: {
      display: ['"Saira Condensed"', 'system-ui', 'sans-serif'],
      sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1931',
          800: '#12244A',
          700: '#1B3160'
        },
        orange: {
          DEFAULT: '#FF6B00',
          600: '#E05E00',
          100: '#FFE8D6'
        },
        gold: {
          DEFAULT: '#FFAB00',
          100: '#FFF1CC'
        },
        land: v('color-land'),
        air: v('color-air'),
        ocean: v('color-ocean'),
        eco: v('color-eco'),
        slate: '#475569',
        gray: '#8593A5',
        steel: '#8FA3BA',
        mist: '#E2E8F0',
        fog: '#F1F5F9',
        snow: '#F8FAFC',
        surface: {
          page: v('surface-page'),
          card: v('surface-card'),
          sunken: v('surface-sunken'),
          inverse: v('surface-inverse'),
          'inverse-raised': v('surface-inverse-raised')
        },
        fg: {
          DEFAULT: v('text-primary'),
          secondary: v('text-secondary'),
          muted: v('text-muted'),
          'on-inverse': v('text-on-inverse'),
          'on-inverse-muted': v('text-on-inverse-muted')
        },
        line: {
          DEFAULT: v('border-default'),
          strong: v('border-strong'),
          inverse: v('border-inverse')
        },
        selected: {
          DEFAULT: v('fill-selected'),
          fg: v('fill-selected-fg')
        },
        success: {
          DEFAULT: v('color-success'),
          bg: v('color-success-bg')
        },
        warning: {
          DEFAULT: v('color-warning'),
          fg: v('color-warning-fg'),
          bg: v('color-warning-bg')
        },
        danger: {
          DEFAULT: v('color-danger'),
          bg: v('color-danger-bg')
        },
        info: {
          DEFAULT: v('color-info'),
          bg: v('color-info-bg')
        }
      },
      fontSize: {
        'display-xl': ['64px', {
          lineHeight: '1',
          letterSpacing: '-.01em'
        }],
        'display-lg': ['48px', {
          lineHeight: '1.05'
        }],
        'display-md': ['36px', {
          lineHeight: '1.1'
        }],
        'display-sm': ['28px', {
          lineHeight: '1.15'
        }],
        heading: ['22px', {
          lineHeight: '1.2'
        }],
        'body-lg': ['17px', {
          lineHeight: '1.6'
        }],
        body: ['15px', {
          lineHeight: '1.55'
        }],
        'body-sm': ['13px', {
          lineHeight: '1.5'
        }],
        caption: ['12px', {
          lineHeight: '1.4',
          letterSpacing: '.08em'
        }],
        'caption-sm': ['11px', {
          lineHeight: '1.4',
          letterSpacing: '.08em'
        }]
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
        20: '80px',
        24: '96px',
        sidebar: '240px',
        topbar: '56px'
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '20px',
        pill: '999px'
      },
      boxShadow: {
        sm: v('shadow-sm'),
        md: v('shadow-md'),
        lg: v('shadow-lg'),
        accent: v('shadow-accent'),
        focus: v('focus-ring')
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(.2,.8,.2,1)',
        'in-out': 'cubic-bezier(.65,0,.35,1)'
      },
      transitionDuration: {
        fast: '120ms',
        base: '200ms',
        slow: '320ms'
      },
      maxWidth: {
        container: '1200px',
        narrow: '760px'
      },
      height: {
        'control-sm': '32px',
        'control-md': '40px',
        'control-lg': '48px'
      }
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "tokens/tailwind.preset.js", error: String((e && e.message) || e) }); }

// ui_kits/aixfreight-app/Dashboard.jsx
try { (() => {
const {
  Card,
  Badge,
  ModeBadge,
  Button,
  Icon,
  Table,
  StatCard,
  AiDisclosure,
  AiFeedback
} = window.AiXFreightDesignSystem_0c3a26;
const SHIP_COLS = [{
  key: 'id',
  label: 'Shipment',
  mono: true
}, {
  key: 'lane',
  label: 'Lane',
  muted: true,
  render: (v, s) => s.origin + ' → ' + s.dest
}, {
  key: 'mode',
  label: 'Mode',
  render: m => /*#__PURE__*/React.createElement(ModeBadge, {
    mode: m,
    size: "sm"
  })
}, {
  key: 'status',
  label: 'Status',
  render: (v, s) => /*#__PURE__*/React.createElement(Badge, {
    tone: s.status,
    dot: true
  }, s.label)
}, {
  key: 'eta',
  label: 'ETA',
  mono: true,
  muted: true,
  nowrap: true
}];
window.SHIP_COLS = SHIP_COLS;
function Stat({
  label,
  value,
  delta,
  tone
}) {
  return /*#__PURE__*/React.createElement(StatCard, {
    label: label,
    value: value,
    delta: delta,
    deltaTone: tone
  });
}
function Dashboard({
  go,
  openRec
}) {
  const D = window.AIX_DATA;
  return /*#__PURE__*/React.createElement("div", {
    className: "aix-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aix-stats"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Active shipments",
    value: "128",
    delta: "+6",
    tone: "info"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "On-time rate",
    value: "96.2%",
    delta: "+1.4",
    tone: "success"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Exceptions",
    value: "3",
    delta: "2 new",
    tone: "danger"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "AI savings \xB7 Sep",
    value: "$41.2k",
    delta: "Live",
    tone: "ai"
  })), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Live",
    title: "Shipments in motion",
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconRight: "arrowRight",
      onClick: () => go('shipments')
    }, "All shipments"),
    padding: 0
  }, /*#__PURE__*/React.createElement(Table, {
    columns: SHIP_COLS,
    rows: D.shipments.slice(0, 4),
    onRowClick: s => go('detail', s)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, D.recommendations.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.id,
    inverse: true,
    eyebrow: "AI recommendation",
    title: r.title,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AiFeedback, {
      inverse: true,
      size: "sm",
      label: "",
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "sparkles",
      onClick: () => openRec(r)
    }, "Review"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-gold)'
    }
  }, r.delta), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-eco)'
    }
  }, r.gain), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-inverse-muted)'
    }
  }, r.confidence, "%")), /*#__PURE__*/React.createElement(AiDisclosure, {
    inverse: true,
    confidence: r.confidence,
    rationale: r.body,
    sources: r.sources,
    limits: r.limits,
    style: {
      marginTop: 12
    }
  })))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Network",
    title: "Mode mix \xB7 last 30 days",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 14,
      borderRadius: 999,
      overflow: 'hidden',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 54,
      background: 'var(--color-ocean)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 22,
      background: 'var(--color-land)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 16,
      background: 'var(--color-air)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 8,
      background: 'var(--color-eco)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 14
    }
  }, [['ocean', 'Ocean', '54%'], ['land', 'Land & rail', '22%'], ['air', 'Air', '16%'], ['eco', 'Eco lanes', '8%']].map(([m, l, v]) => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ModeBadge, {
    mode: m,
    size: "sm",
    iconOnly: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 13
    }
  }, v))))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aixfreight-app/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aixfreight-app/NewQuote.jsx
try { (() => {
const {
  Card,
  Input,
  Select,
  Radio,
  Checkbox,
  Button,
  ModeBadge,
  Badge
} = window.AiXFreightDesignSystem_0c3a26;
function NewQuote({
  onDone
}) {
  const [inc, setInc] = React.useState('FOB');
  const [mode, setMode] = React.useState('Let AI decide');
  const [ins, setIns] = React.useState(true);
  const [cust, setCust] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "aix-page wide"
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Step 1 of 2",
    title: "Shipment details"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Origin",
    icon: "mapPin",
    placeholder: "City or port",
    defaultValue: "Shenzhen, CN",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Destination",
    icon: "mapPin",
    placeholder: "City or port",
    defaultValue: "Hamburg, DE",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Cargo type",
    options: ['FCL — full container', 'LCL — shared container', 'Pallets', 'Break bulk'],
    value: "FCL \u2014 full container"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Weight",
    defaultValue: "18200",
    suffix: "kg"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Ready date",
    type: "date",
    defaultValue: "2026-09-20"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Needed by",
    type: "date",
    defaultValue: "2026-10-14",
    hint: "AI will flag if this window is at risk"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    label: "Incoterm",
    options: ['FOB', 'CIF', 'DDP'],
    value: inc,
    onChange: setInc,
    direction: "row"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Preferred mode",
    options: ['Let AI decide', 'Ocean', 'Air', 'Land', 'Rail'],
    value: mode,
    onChange: setMode
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: ins,
    onChange: setIns,
    label: "Cargo insurance",
    description: "0.3% of declared value"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    checked: cust,
    onChange: setCust,
    label: "Customs brokerage",
    description: "Handled by AiXFreight"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    inverse: true,
    eyebrow: "AI estimate",
    title: "3 routes found",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "aix-caption",
      style: {
        color: 'var(--text-on-inverse-muted)'
      }
    }, "Refreshes as you type"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "sparkles",
      onClick: onDone
    }, "Get quotes"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [['ocean', 'Ocean · 24 days', '$12,480', 'Best value'], ['rail', 'Rail · 18 days', '$15,760', 'Balanced'], ['air', 'Air · 3 days', '$38,900', 'Fastest']].map(([m, l, p, t], i) => /*#__PURE__*/React.createElement("div", {
    key: m,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      background: i === 0 ? 'rgba(255,255,255,.08)' : 'transparent',
      border: '1px solid ' + (i === 0 ? 'var(--accent)' : 'var(--border-inverse)')
    }
  }, /*#__PURE__*/React.createElement(ModeBadge, {
    mode: m,
    inverse: true,
    size: "sm",
    iconOnly: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      flex: 1
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 13
    }
  }, p), i === 0 && /*#__PURE__*/React.createElement(Badge, {
    tone: "ai"
  }, t))))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Sustainability",
    title: "Emissions"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "Ocean route emits ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "1.9 t CO\u2082e"), " \u2014 94% less than air. Eco-lane available on this corridor."))));
}
Object.assign(window, {
  NewQuote
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aixfreight-app/NewQuote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aixfreight-app/Shell.jsx
try { (() => {
const {
  Icon,
  IconButton,
  Logo,
  Input,
  Badge,
  ThemeToggle
} = window.AiXFreightDesignSystem_0c3a26;
const NAV = [['dashboard', 'layoutDashboard', 'Dashboard'], ['shipments', 'package', 'Shipments'], ['routes', 'route', 'Routes'], ['docs', 'fileText', 'Documents'], ['settings', 'settings', 'Settings']];
function Sidebar({
  page,
  go
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 'var(--sidebar-width)',
      flex: 'none',
      background: 'var(--surface-inverse)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 16px',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    inverse: true,
    height: 34,
    base: "../..",
    style: {
      marginLeft: 4
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, NAV.map(([k, ic, l]) => {
    const on = page === k || k === 'shipments' && page === 'detail';
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => go(k),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        height: 40,
        padding: '0 12px',
        border: 0,
        borderRadius: 'var(--radius-md)',
        background: on ? 'var(--surface-inverse-raised)' : 'transparent',
        color: on ? '#fff' : 'var(--text-on-inverse-muted)',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: 14,
        cursor: 'pointer',
        textAlign: 'left',
        boxShadow: on ? 'inset 3px 0 0 var(--accent)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18
    }), l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      background: 'var(--surface-inverse-raised)',
      borderRadius: 'var(--radius-lg)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 16,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "aix-caption",
    style: {
      color: 'var(--accent)'
    }
  }, "AI copilot")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-on-inverse-muted)',
      lineHeight: 1.45
    }
  }, "2 recommendations waiting. Est. savings this week: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, "$4,320"))));
}
function Topbar({
  title,
  crumbs,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--topbar-height)',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 28px',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0,
      flex: '1 1 auto',
      overflow: 'hidden'
    }
  }, crumbs && crumbs.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "aix-caption"
  }, c), /*#__PURE__*/React.createElement(Icon, {
    name: "chevronRight",
    size: 12,
    color: "var(--text-muted)"
  }))), /*#__PURE__*/React.createElement("h1", {
    className: "aix-truncate",
    title: title,
    style: {
      fontSize: 22,
      fontWeight: 600
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'clamp(140px,22vw,260px)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search shipments, containers\u2026",
    size: "sm"
  })), actions, /*#__PURE__*/React.createElement(ThemeToggle, {
    variant: "icon"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications",
    badge: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: 'var(--color-ocean)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14
    }
  }, "MK")));
}
Object.assign(window, {
  Sidebar,
  Topbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aixfreight-app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aixfreight-app/ShipmentDetail.jsx
try { (() => {
const {
  Card,
  Badge,
  ModeBadge,
  Button,
  Tabs,
  Icon,
  Switch,
  AiDisclosure,
  AiFeedback
} = window.AiXFreightDesignSystem_0c3a26;
function ShipmentDetail({
  s,
  openRec
}) {
  const D = window.AIX_DATA;
  const rec = D.recommendations.find(r => r.shipment === s.id);
  const [auto, setAuto] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "aix-page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(ModeBadge, {
    mode: s.mode
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(24px,3vw,36px)',
      minWidth: 0
    }
  }, s.origin, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\u2192"), " ", s.dest), /*#__PURE__*/React.createElement(Badge, {
    tone: s.status,
    dot: true
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "download"
  }, "Documents"), /*#__PURE__*/React.createElement(Button, {
    variant: "navy",
    icon: "fileText"
  }, "Share tracking"))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Route",
    title: "Journey",
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px 8px',
      position: 'relative',
      height: 120
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 80",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: '20px 24px auto',
      width: 'calc(100% - 48px)',
      height: 80
    },
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 60 C 200 60, 300 20, 590 12",
    stroke: "var(--border-default)",
    strokeWidth: "4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 60 C 200 60, 300 20, 590 12",
    stroke: "var(--color-gold)",
    strokeWidth: "4",
    strokeDasharray: "8 8",
    strokeLinecap: "round",
    pathLength: "100",
    style: {
      strokeDashoffset: 0
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "60",
    r: "7",
    fill: "var(--color-land)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "370",
    cy: "28",
    r: "9",
    fill: "#fff",
    stroke: "var(--accent)",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "590",
    cy: "12",
    r: "7",
    fill: "var(--color-ocean)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      borderTop: '1px solid var(--border-default)'
    }
  }, [['Cargo', s.cargo], ['Vessel', 'MSC Aurora · V.2439'], ['Container', s.id.replace('AIX', 'MSKU') + '-0'], ['Declared value', s.value]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: '16px 24px',
      borderRight: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "aix-caption"
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 14,
      marginTop: 4
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, rec ? /*#__PURE__*/React.createElement(Card, {
    inverse: true,
    eyebrow: "AI recommendation",
    title: rec.title,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AiFeedback, {
      inverse: true,
      size: "sm",
      label: "",
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      icon: "sparkles",
      onClick: () => openRec(rec)
    }, "Review"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-gold)'
    }
  }, rec.delta), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-eco)'
    }
  }, rec.gain), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-inverse-muted)'
    }
  }, rec.confidence, "%")), /*#__PURE__*/React.createElement(AiDisclosure, {
    inverse: true,
    confidence: rec.confidence,
    rationale: rec.body,
    sources: rec.sources,
    limits: rec.limits,
    style: {
      marginTop: 12
    }
  })) : /*#__PURE__*/React.createElement(Card, {
    inverse: true,
    eyebrow: "AI copilot",
    title: "No action needed"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-on-inverse-muted)',
      lineHeight: 1.5
    }
  }, "Tracking on plan. ETA confidence 97%. We'll alert you if the window moves by more than 6 hours."), /*#__PURE__*/React.createElement(AiDisclosure, {
    inverse: true,
    confidence: 97,
    title: "Why this ETA",
    rationale: "Vessel AIS position and Hamburg berth schedule agree on 14 Sep 09:40.",
    sources: [{
      label: 'MSC Aurora AIS',
      time: '08:12'
    }, {
      label: 'Port of Hamburg berth plan',
      time: '07:30'
    }],
    limits: ['Inland haulage slot not confirmed'],
    style: {
      marginTop: 12
    }
  })), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Settings",
    title: "Automation"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: auto,
    onChange: setAuto,
    label: "AI auto-reroute under $2,000"
  }))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Timeline",
    title: "Milestones",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
      gap: 0,
      position: 'relative'
    }
  }, D.events.map((e, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: 'relative',
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 6,
      left: 0,
      right: 0,
      height: 2,
      background: e.done ? 'var(--color-navy)' : 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 14,
      height: 14,
      borderRadius: 999,
      background: e.ai ? 'var(--accent)' : e.done ? 'var(--color-navy)' : '#fff',
      border: '2px solid ' + (e.ai ? 'var(--accent)' : e.done ? 'var(--color-navy)' : 'var(--border-strong)')
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "aix-caption",
    style: {
      color: e.ai ? 'var(--accent)' : undefined
    }
  }, e.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginTop: 4,
      paddingRight: 16
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, e.where))))));
}
Object.assign(window, {
  ShipmentDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aixfreight-app/ShipmentDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aixfreight-app/Shipments.jsx
try { (() => {
const {
  Card,
  Badge,
  ModeBadge,
  Button,
  Tabs,
  Tag,
  Icon,
  Table,
  Progress,
  Pagination,
  EmptyState
} = window.AiXFreightDesignSystem_0c3a26;
function Shipments({
  go
}) {
  const D = window.AIX_DATA;
  const [tab, setTab] = React.useState('all');
  const [mode, setMode] = React.useState(null);
  const [sort, setSort] = React.useState({
    key: 'eta',
    dir: 'asc'
  });
  const rows = D.shipments.filter(s => (tab === 'all' || tab === 'exc' && s.status !== 'success' && s.status !== 'neutral') && (!mode || s.mode === mode)).sort((a, b) => {
    const c = String(a[sort.key]).localeCompare(String(b[sort.key]));
    return sort.dir === 'asc' ? c : -c;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: 'all',
      label: 'All',
      count: D.shipments.length
    }, {
      value: 'exc',
      label: 'Exceptions',
      count: 2
    }, {
      value: 'done',
      label: 'Delivered'
    }],
    value: tab,
    onChange: setTab,
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [['ocean', 'Ocean'], ['air', 'Air'], ['land', 'Land'], ['rail', 'Rail']].map(([m, l]) => /*#__PURE__*/React.createElement(Tag, {
    key: m,
    selected: mode === m,
    onClick: () => setMode(mode === m ? null : m)
  }, l)))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, rows.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    compact: true,
    icon: "search",
    title: "No shipments match",
    description: "Try clearing a filter.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => {
        setMode(null);
        setTab('all');
      }
    }, "Clear filters")
  }) : /*#__PURE__*/React.createElement(Table, {
    sort: sort,
    onSort: k => setSort(s => ({
      key: k,
      dir: s.key === k && s.dir === 'asc' ? 'desc' : 'asc'
    })),
    onRowClick: s => go('detail', s),
    columns: [{
      key: 'id',
      label: 'Shipment',
      mono: true,
      sortable: true
    }, {
      key: 'lane',
      label: 'Lane',
      muted: true,
      render: (v, s) => s.origin + ' → ' + s.dest
    }, {
      key: 'mode',
      label: 'Mode',
      render: m => /*#__PURE__*/React.createElement(ModeBadge, {
        mode: m,
        size: "sm"
      })
    }, {
      key: 'cargo',
      label: 'Cargo',
      muted: true,
      nowrap: true
    }, {
      key: 'progress',
      label: 'Progress',
      width: 140,
      render: (p, s) => /*#__PURE__*/React.createElement(Progress, {
        value: p,
        mode: s.mode
      })
    }, {
      key: 'status',
      label: 'Status',
      render: (v, s) => /*#__PURE__*/React.createElement(Badge, {
        tone: s.status,
        dot: true
      }, s.label)
    }, {
      key: 'eta',
      label: 'ETA',
      mono: true,
      muted: true,
      nowrap: true,
      sortable: true
    }, {
      key: 'value',
      label: 'Value',
      mono: true,
      align: 'right'
    }],
    rows: rows
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: 1,
    pageCount: 1,
    total: rows.length,
    pageSize: rows.length || 1
  }))));
}
Object.assign(window, {
  Shipments
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aixfreight-app/Shipments.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aixfreight-app/data.js
try { (() => {
window.AIX_DATA = {
  shipments: [{
    id: 'AIX-48211',
    origin: 'Shenzhen, CN',
    dest: 'Hamburg, DE',
    mode: 'ocean',
    status: 'success',
    label: 'On time',
    eta: '14 Sep · 09:40',
    cargo: '2 × 40HC · 18,200 kg',
    value: '$12,480',
    progress: 62
  }, {
    id: 'AIX-48197',
    origin: 'Chicago, US',
    dest: 'Monterrey, MX',
    mode: 'land',
    status: 'warning',
    label: 'At risk',
    eta: '11 Sep · 16:00',
    cargo: '1 × 53ft · 21,000 kg',
    value: '$3,940',
    progress: 41
  }, {
    id: 'AIX-48190',
    origin: 'Frankfurt, DE',
    dest: 'Nairobi, KE',
    mode: 'air',
    status: 'success',
    label: 'On time',
    eta: '10 Sep · 22:15',
    cargo: '6 pallets · 2,400 kg',
    value: '$8,120',
    progress: 88
  }, {
    id: 'AIX-48176',
    origin: 'Rotterdam, NL',
    dest: 'Santos, BR',
    mode: 'ocean',
    status: 'danger',
    label: 'Delayed',
    eta: '19 Sep · 07:00',
    cargo: '4 × 20GP · 44,000 kg',
    value: '$21,300',
    progress: 30
  }, {
    id: 'AIX-48163',
    origin: 'Duisburg, DE',
    dest: 'Chengdu, CN',
    mode: 'rail',
    status: 'success',
    label: 'On time',
    eta: '22 Sep · 12:00',
    cargo: '3 × 40HC · 52,000 kg',
    value: '$15,760',
    progress: 18
  }, {
    id: 'AIX-48150',
    origin: 'Los Angeles, US',
    dest: 'Tokyo, JP',
    mode: 'air',
    status: 'neutral',
    label: 'Booked',
    eta: '12 Sep · 05:30',
    cargo: '2 pallets · 640 kg',
    value: '$2,210',
    progress: 5
  }],
  recommendations: [{
    id: 'r1',
    title: 'Switch lane 2 to air',
    body: 'Port congestion at Los Angeles adds 4.2 days to AIX-48197. Moving the priority pallets to air keeps the delivery window.',
    delta: '+$1,120',
    gain: '−4.1 days',
    confidence: 94,
    shipment: 'AIX-48197',
    sources: [{
      label: 'Port of LA congestion feed',
      time: '09:40'
    }, {
      label: 'Carrier air rates · 3 quotes',
      time: '09:38'
    }],
    limits: ['Customs dwell at Frankfurt not modelled', 'Air rates valid 2h']
  }, {
    id: 'r2',
    title: 'Consolidate 2 LCL bookings',
    body: 'AIX-48176 and a Rotterdam LCL share a sailing on 12 Sep. One FCL saves handling and reduces CO₂ by 18%.',
    delta: '−$860',
    gain: '−18% CO₂',
    confidence: 81,
    shipment: 'AIX-48176',
    sources: [{
      label: 'Rotterdam sailing schedule',
      time: '08:55'
    }, {
      label: 'CO₂ model · GLEC v3',
      time: '08:55'
    }],
    limits: ['Partner LCL cut-off not confirmed']
  }],
  events: [{
    t: '08 Sep · 14:20',
    title: 'Departed Yantian terminal',
    where: 'Shenzhen, CN',
    done: true
  }, {
    t: '09 Sep · 03:05',
    title: 'Vessel MSC Aurora underway',
    where: 'South China Sea',
    done: true
  }, {
    t: '10 Sep · 11:00',
    title: 'AI ETA revised −6h',
    where: 'Weather window, Malacca',
    done: true,
    ai: true
  }, {
    t: '13 Sep',
    title: 'Arrival Port of Hamburg',
    where: 'Hamburg, DE',
    done: false
  }, {
    t: '14 Sep · 09:40',
    title: 'Delivery — Hamburg DC',
    where: 'Billbrook, Hamburg',
    done: false
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aixfreight-app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ModeBadge = __ds_scope.ModeBadge;

__ds_ns.RouteLine = __ds_scope.RouteLine;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.AI_FALLBACKS = __ds_scope.AI_FALLBACKS;

__ds_ns.AiFallback = __ds_scope.AiFallback;

__ds_ns.ConfirmDialog = __ds_scope.ConfirmDialog;

__ds_ns.ERROR_KINDS = __ds_scope.ERROR_KINDS;

__ds_ns.ErrorPage = __ds_scope.ErrorPage;

__ds_ns.FormErrorSummary = __ds_scope.FormErrorSummary;

__ds_ns.SHIPMENT_STATES = __ds_scope.SHIPMENT_STATES;

__ds_ns.ShipmentStatus = __ds_scope.ShipmentStatus;

__ds_ns.AiDisclosure = __ds_scope.AiDisclosure;

__ds_ns.AiFeedback = __ds_scope.AiFeedback;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.DropdownMenu = __ds_scope.DropdownMenu;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Topbar = __ds_scope.Topbar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
