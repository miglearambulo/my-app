'use client';

import { useEffect, useState } from 'react';

type Swatch = { bg: string; fg?: string; label?: string };

const PRESETS: Swatch[] = [
  { bg: '#2a6df5', fg: '#0b1220', label: 'Blue' },
  { bg: '#37b24d', fg: '#0a1a0e', label: 'Green' },
  { bg: '#6f1d9c', fg: '#f3d9ff', label: 'Purple' },
  { bg: '#111111', fg: '#f3f3f3', label: 'Black' },
  { bg: '#ffffff', fg: '#222222', label: 'White' },
];

export default function ColorPicker() {
  const [open, setOpen] = useState(false);
  const [bg, setBg] = useState('#ffffff');
  const [fg, setFg] = useState('#171717');

  useEffect(() => {
    const b = localStorage.getItem('theme-bg');
    const f = localStorage.getItem('theme-fg');
    if (b) setBg(b);
    if (f) setFg(f);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--bg', bg);
    document.documentElement.style.setProperty('--fg', fg);
  }, [bg, fg]);

  function autoFG(hex: string) {
    const h = hex.replace('#', '');
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    const L = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return L > 0.6 ? '#111111' : '#f1f1f1';
  }

  function apply(sw: Swatch) {
    const nextBg = sw.bg;
    const nextFg = sw.fg ?? autoFG(nextBg);
    setBg(nextBg);
    setFg(nextFg);
    try {
      localStorage.setItem('theme-bg', nextBg);
      localStorage.setItem('theme-fg', nextFg);
    } catch {}
  }

  return (
    <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 9999 }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Color picker"
        style={{
          borderRadius: 9999,
          boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
          padding: '10px 12px',
          fontSize: 14,
          background: 'var(--bg)',
          color: 'var(--fg)',
          cursor: 'pointer',
        }}
      >
        🎨
      </button>

      <div
        style={{
          position: 'fixed',
          right: 24,
          bottom: open ? 72 : 24,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'all 160ms ease',
          width: 232,
          borderRadius: 12,
          boxShadow: '0 10px 40px rgba(0,0,0,0.35)',
          padding: 12,
          background: 'rgba(0,0,0,0.7)',
          color: '#fff',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div style={{ fontSize: 11, opacity: 0.8, marginBottom: 8 }}>Quick colors</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
          {PRESETS.map((s) => (
            <button
              key={s.bg}
              onClick={() => apply(s)}
              aria-label={s.label ?? s.bg}
              title={s.label ?? s.bg}
              style={{
                height: 32,
                width: 32,
                borderRadius: 8,
                background: s.bg,
                border: '1px solid rgba(255,255,255,0.25)',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
              }}
            />
          ))}
        </div>

        <div style={{ marginTop: 12, fontSize: 11, opacity: 0.8 }}>Custom</div>
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
          <input
            type="color"
            value={bg}
            onChange={(e) => apply({ bg: e.target.value })}
            aria-label="Pick background color"
            style={{
              height: 32,
              width: 44,
              cursor: 'pointer',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 6,
              padding: 0,
            }}
          />
          <button
            onClick={() => {
              try {
                localStorage.removeItem('theme-bg');
                localStorage.removeItem('theme-fg');
              } catch {}
              apply({ bg: '#0d6efd', fg: '#0b1220' });
            }}
            style={{
              fontSize: 12,
              textDecoration: 'underline',
              opacity: 0.85,
              background: 'transparent',
              color: '#fff',
              border: 0,
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
