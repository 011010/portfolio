import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0b0c10',
          border: '1px solid #272935',
          borderRadius: 7,
          color: '#4fe3b4',
          fontFamily: 'monospace',
          fontWeight: 700,
          fontSize: 18,
          letterSpacing: -1,
        }}
      >
        {'>_'}
      </div>
    ),
    { ...size }
  )
}
