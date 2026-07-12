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
            left: -80,
            width: 520,
            height: 460,
            borderRadius: 999,
            background: '#F26B3A',
            opacity: 0.2,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -180,
            right: -60,
            width: 500,
            height: 440,
            borderRadius: 999,
            background: '#7EA894',
            opacity: 0.14,
            display: 'flex',
          }}
        />

        {/* Left column — designed to look good in WhatsApp's square crop */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 630,
            height: '100%',
            padding: '56px 48px',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontFamily: 'Manrope',
              fontSize: 20,
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

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                fontFamily: 'Syne',
                fontSize: 36,
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
                flexDirection: 'column',
                fontFamily: 'Syne',
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1.05,
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
                fontSize: 24,
                color: '#F26B3A',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {site.title}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              fontFamily: 'Manrope',
              fontSize: 22,
              color: '#B0AA9E',
            }}
          >
            {`${site.location} · ${site.experience}`}
          </div>
        </div>

        {/* Right column — extra context for large previews */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 18,
            width: 570,
            height: '100%',
            padding: '56px 56px 56px 24px',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontFamily: 'Manrope',
              fontSize: 26,
              color: '#B0AA9E',
              lineHeight: 1.4,
              maxWidth: 460,
            }}
          >
            Full stack engineer for web, mobile, and reliable APIs.
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              maxWidth: 460,
            }}
          >
            {stack.map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 16px',
                  borderRadius: 14,
                  border: '1px solid #302F2A',
                  background: '#1A1A17',
                  fontFamily: 'Manrope',
                  fontSize: 20,
                  color: '#F2EFE8',
                }}
              >
                {item}
              </div>
            ))}
          </div>
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
