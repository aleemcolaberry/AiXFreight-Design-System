import React from 'react';
import { Input } from '../forms/Input.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Avatar } from '../data/Avatar.jsx';
import { ThemeToggle } from '../core/ThemeToggle.jsx';
export function Topbar({ title, breadcrumb, actions, search = true, searchPlaceholder = 'Search…', onSearch, user, notifications, themeToggle, style }) {
  return React.createElement('header', { style: { height: 'var(--topbar-height)', flex: 'none', display: 'flex', alignItems: 'center', gap: 16, padding: '0 28px', background: 'var(--surface-card)', borderBottom: '1px solid var(--border-default)', fontFamily: 'var(--font-body)', ...style } },
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 12, minWidth: 0, flex: '1 1 auto', overflow: 'hidden' } }, breadcrumb, React.createElement('h1', { title, style: { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, lineHeight: 1.2, textTransform: 'uppercase', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0, letterSpacing: '-.01em' } }, title)),
    React.createElement('div', { style: { marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, flex: 'none' } },
      search ? React.createElement('div', { style: { width: 'clamp(140px, 22vw, 260px)' } }, React.createElement(Input, { icon: 'search', placeholder: searchPlaceholder, size: 'sm', onChange: (e) => onSearch && onSearch(e.target.value) })) : null,
      actions, themeToggle ? React.createElement(ThemeToggle, { variant: 'icon' }) : null, React.createElement(IconButton, { icon: 'bell', label: 'Notifications', badge: !!notifications }),
      user ? React.createElement(Avatar, { name: user.name, src: user.src, size: 'sm' }) : null));
}
