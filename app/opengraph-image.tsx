import { ImageResponse } from 'next/og'
import { site } from '@/content/site'

export const alt = `${site.name} - ${site.title}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadFont(url: string) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to load font: ${url}`)
  return res.arrayBuffer()
}

export default async function OpenGraphImage() {
  const [syneBold, manrope] = await Promise.all([
    loadFont(
      'https://cdn.jsdelivr.net/fontsource/fonts/syne@5.2.5/latin-700-normal.woff'
    ),
    loadFont(
      'https://cdn.jsdelivr.net/fontsource/fonts/manrope@5.2.5/latin-500-normal.woff'
    ),
  ])

  const stack = site.coreStack.slice(0, 4)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: 'linear-gradient(145deg, #1A1A17 0%, #0E0E0C 72%)',
          color: '#F2EFE8',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -140,
            left: -100,
            width: 520,
            height: 460,
            borderRadius: 999,
            background: '#F26B3A',
            opacity: 0.18,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -180,
            right: -80,
            width: 500,
            height: 440,
            borderRadius: 999,
            background: '#7EA894',
            opacity: 0.14,
            display: 'flex',
          }}
        />

        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              fontFamily: 'Syne',
              fontSize: 42,
              fontWeight: 700,
              letterSpacing: '-0.03em',
            }}
          >
            <span>{site.shortName}</span>
            <span style={{ color: '#F26B3A' }}>.</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: 'Manrope',
              fontSize: 22,
              color: '#7EA894',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: '#7EA894',
                display: 'flex',
              }}
            />
            <span>Available for hire</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            position: 'relative',
            maxWidth: 920,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontFamily: 'Manrope',
              fontSize: 24,
              color: '#F26B3A',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            {site.title}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'Syne',
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
            }}
          >
            <div style={{ display: 'flex' }}>Mohammad</div>
            <div style={{ display: 'flex' }}>
              <span>Fasih</span>
              <span style={{ color: '#F26B3A' }}>.</span>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Manrope',
              fontSize: 28,
              color: '#B0AA9E',
              lineHeight: 1.35,
              maxWidth: 820,
            }}
          >
            {`${site.location} · ${site.experience}`}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 14,
            position: 'relative',
          }}
        >
          {stack.map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 20px',
                borderRadius: 14,
                border: '1px solid #302F2A',
                background: '#1A1A17',
                fontFamily: 'Manrope',
                fontSize: 22,
                color: '#F2EFE8',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Syne', data: syneBold, style: 'normal', weight: 700 },
        { name: 'Manrope', data: manrope, style: 'normal', weight: 500 },
      ],
    }
  )
}
