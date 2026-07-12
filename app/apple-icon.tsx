import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #1A1A17 0%, #0E0E0C 100%)',
          borderRadius: 40,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -40,
            left: -40,
            width: 140,
            height: 140,
            borderRadius: 999,
            background: 'rgba(242, 107, 58, 0.18)',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: '-0.04em',
            color: '#F2EFE8',
            lineHeight: 1,
            paddingBottom: 8,
          }}
        >
          F
          <span
            style={{
              color: '#F26B3A',
              fontSize: 92,
              lineHeight: 1,
              marginLeft: 2,
            }}
          >
            .
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
