import { ImageResponse } from 'next/og';

export const alt = 'Husari Orozco — Desarrollador Full Stack';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0B0C10',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* Grid de puntos, el mismo motivo del sitio */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 12, height: 12, borderRadius: 99, background: '#272935' }} />
          <div style={{ width: 12, height: 12, borderRadius: 99, background: '#272935' }} />
          <div style={{ width: 12, height: 12, borderRadius: 99, background: '#4FE3B4' }} />
          <div style={{ marginLeft: 16, color: '#8D8FA3', fontSize: 22, letterSpacing: 1 }}>
            ~/husari-orozco
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#4FE3B4', fontSize: 24, letterSpacing: 2, marginBottom: 24 }}>
            {'// DESARROLLADOR FULL STACK · OAXACA, MX'}
          </div>
          <div
            style={{
              color: '#E9E8F0',
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Software para la operación real, no para la demo.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '1px solid #272935',
            paddingTop: 28,
          }}
        >
          <div style={{ color: '#E9E8F0', fontSize: 30, fontWeight: 600 }}>Husari Orozco</div>
          <div style={{ color: '#8D8FA3', fontSize: 22, letterSpacing: 1 }}>
            LARAVEL · REACT · TYPESCRIPT · RUST
          </div>
        </div>
      </div>
    ),
    size
  );
}
