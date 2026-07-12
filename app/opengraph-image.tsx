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

const Bokeh = ({
  left,
  top,
  size: s,
  opacity = 0.35,
}: {
  left: number
  top: number
  size: number
  opacity?: number
}) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      width: s,
      height: s,
      borderRadius: 999,
      background: '#7EB6FF',
      opacity,
      display: 'flex',
    }}
  />
)

export default async function OpenGraphImage() {
  const [interBold, interRegular, interItalic] = await Promise.all([
    loadFont(
      'https://cdn.jsdelivr.net/fontsource/fonts/inter@5.2.5/latin-700-normal.woff'
    ),
    loadFont(
      'https://cdn.jsdelivr.net/fontsource/fonts/inter@5.2.5/latin-400-normal.woff'
    ),
    loadFont(
      'https://cdn.jsdelivr.net/fontsource/fonts/inter@5.2.5/latin-400-italic.woff'
    ),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(ellipse 80% 70% at 50% 45%, #0F1B33 0%, #070D18 55%, #04070F 100%)',
          color: '#FFFFFF',
        }}
      >
        {/* Soft vignette / cyan atmosphere */}
        <div
          style={{
            position: 'absolute',
            left: 180,
            top: 80,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: '#3B82F6',
            opacity: 0.08,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: -40,
            bottom: -80,
            width: 380,
            height: 380,
            borderRadius: 999,
            background: '#60A5FA',
            opacity: 0.07,
            display: 'flex',
          }}
        />

        {/* Bokeh orbs */}
        <Bokeh left={40} top={70} size={18} opacity={0.45} />
        <Bokeh left={120} top={520} size={12} opacity={0.35} />
        <Bokeh left={280} top={40} size={10} opacity={0.3} />
        <Bokeh left={520} top={90} size={22} opacity={0.25} />
        <Bokeh left={480} top={500} size={14} opacity={0.4} />
        <Bokeh left={700} top={60} size={16} opacity={0.28} />
        <Bokeh left={900} top={480} size={20} opacity={0.32} />
        <Bokeh left={1050} top={120} size={11} opacity={0.35} />
        <Bokeh left={980} top={300} size={8} opacity={0.4} />

        {/* Sweeping arc lines */}
        <div
          style={{
            position: 'absolute',
            left: -80,
            top: 180,
            width: 900,
            height: 900,
            borderRadius: 999,
            border: '1px solid rgba(147, 197, 253, 0.18)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: -40,
            top: 240,
            width: 780,
            height: 780,
            borderRadius: 999,
            border: '1px solid rgba(147, 197, 253, 0.12)',
            display: 'flex',
          }}
        />

        {/* Network node (center-left) */}
        <div
          style={{
            position: 'absolute',
            left: 300,
            top: 210,
            width: 160,
            height: 160,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.55,
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: 120,
              height: 120,
              borderRadius: 999,
              border: '1px solid rgba(147, 197, 253, 0.35)',
              display: 'flex',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 70,
              height: 70,
              borderRadius: 999,
              border: '1px solid rgba(147, 197, 253, 0.45)',
              display: 'flex',
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#93C5FD',
              boxShadow: '0 0 20px rgba(147, 197, 253, 0.8)',
              display: 'flex',
            }}
          />
          {/* Node spokes approximated as thin bars */}
          <div
            style={{
              position: 'absolute',
              width: 2,
              height: 70,
              background: 'rgba(147, 197, 253, 0.35)',
              top: -10,
              display: 'flex',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 70,
              height: 2,
              background: 'rgba(147, 197, 253, 0.35)',
              left: -10,
              display: 'flex',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 60,
              height: 2,
              background: 'rgba(147, 197, 253, 0.3)',
              transform: 'rotate(45deg)',
              display: 'flex',
            }}
          />
        </div>

        {/* Left stack logos */}
        <div
          style={{
            position: 'absolute',
            left: 56,
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 28,
          }}
        >
          {/* React */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <svg width="56" height="56" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="5" fill="#FFFFFF" />
              <ellipse
                cx="28"
                cy="28"
                rx="22"
                ry="8.5"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
              <ellipse
                cx="28"
                cy="28"
                rx="22"
                ry="8.5"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                transform="rotate(60 28 28)"
              />
              <ellipse
                cx="28"
                cy="28"
                rx="22"
                ry="8.5"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                transform="rotate(120 28 28)"
              />
            </svg>
          </div>

          <div
            style={{
              width: 1,
              height: 48,
              background: 'rgba(255,255,255,0.35)',
              display: 'flex',
            }}
          />

          {/* Node */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              width: 64,
              height: 68,
            }}
          >
            <svg
              width="58"
              height="64"
              viewBox="0 0 58 64"
              style={{ position: 'absolute' }}
            >
              <path
                d="M29 2 L54 16 V48 L29 62 L4 48 V16 Z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.5"
              />
            </svg>
            <div
              style={{
                display: 'flex',
                fontFamily: 'Inter',
                fontSize: 13,
                fontWeight: 700,
                color: '#FFFFFF',
                position: 'relative',
              }}
            >
              node
            </div>
          </div>

          <div
            style={{
              width: 1,
              height: 48,
              background: 'rgba(255,255,255,0.35)',
              display: 'flex',
            }}
          />

          {/* Mongo leaf */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="42" height="58" viewBox="0 0 42 58">
              <path
                d="M21 2 C34 18 36 34 21 56 C6 34 8 18 21 2 Z"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.5"
              />
              <path
                d="M21 14 V48"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div
            style={{
              width: 1,
              height: 48,
              background: 'rgba(255,255,255,0.35)',
              display: 'flex',
            }}
          />

          {/* Next.js wordmark */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'Inter',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: '-0.04em',
              color: '#FFFFFF',
            }}
          >
            NEXT.js
          </div>
        </div>

        {/* Right text block */}
        <div
          style={{
            position: 'absolute',
            right: 64,
            top: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            maxWidth: 560,
            gap: 14,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontFamily: 'Inter',
              fontSize: 54,
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              lineHeight: 1.1,
            }}
          >
            Muhammad Fasih
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Inter',
              fontSize: 22,
              fontWeight: 400,
              color: 'rgba(255,255,255,0.92)',
              letterSpacing: '0.01em',
            }}
          >
            Full-Stack Engineer | MERN · Next.js · System Design
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Inter Italic',
              fontSize: 18,
              fontStyle: 'italic',
              color: 'rgba(226, 232, 240, 0.78)',
              marginTop: 4,
            }}
          >
            Crafting scalable, clean & performance-driven solutions
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter', data: interBold, style: 'normal', weight: 700 },
        { name: 'Inter', data: interRegular, style: 'normal', weight: 400 },
        {
          name: 'Inter Italic',
          data: interItalic,
          style: 'italic',
          weight: 400,
        },
      ],
    }
  )
}
