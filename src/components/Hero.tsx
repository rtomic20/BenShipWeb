import { useLang } from '../contexts/LangContext'

/* ── Ship SVG silhouettes ─────────────────────────────────────────────────
   All drawn on a coordinate grid; hull waterline sits at bottom of viewBox.
   fill="currentColor" so opacity/colour controlled by wrapper CSS.
   ───────────────────────────────────────────────────────────────────────── */

function ContainerShip() {
  return (
    <svg viewBox="0 0 480 90" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Hull */}
      <path d="M0,90 L0,68 L10,57 L35,53 L435,53 L455,59 L472,68 L480,90 Z" />
      {/* Bridge superstructure */}
      <rect x="385" y="20" width="88" height="33" />
      {/* Bridge wing */}
      <rect x="390" y="10" width="78" height="10" />
      {/* Funnel */}
      <polygon points="407,10 411,0 426,0 422,10" />
      {/* Smoke puff 1 */}
      <circle cx="416" cy="0" r="4" style={{ animation: 'smoke 2.2s ease-out 0s infinite', transformOrigin: '416px 0px' }} />
      {/* Smoke puff 2 */}
      <circle cx="418" cy="0" r="3" style={{ animation: 'smoke 2.2s ease-out 0.8s infinite', transformOrigin: '418px 0px' }} />
      {/* Container rows — bottom */}
      <rect x="40"  y="41" width="82" height="12" rx="1" />
      <rect x="127" y="41" width="82" height="12" rx="1" />
      <rect x="214" y="41" width="82" height="12" rx="1" />
      <rect x="301" y="41" width="76" height="12" rx="1" />
      {/* Container rows — top */}
      <rect x="40"  y="29" width="82" height="12" rx="1" />
      <rect x="127" y="29" width="82" height="12" rx="1" />
      <rect x="214" y="29" width="82" height="12" rx="1" />
      {/* Bow mast */}
      <rect x="17" y="14" width="3" height="43" />
      {/* Radar mast at bridge */}
      <rect x="468" y="10" width="2" height="12" />
    </svg>
  )
}

function CargoShip() {
  return (
    <svg viewBox="0 0 360 82" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Hull */}
      <path d="M0,82 L0,60 L8,51 L28,48 L318,48 L338,54 L352,63 L360,82 Z" />
      {/* Bridge */}
      <rect x="263" y="18" width="80" height="30" />
      {/* Bridge top */}
      <rect x="268" y="8" width="70" height="10" />
      {/* Funnel */}
      <polygon points="280,8 284,0 298,0 294,8" />
      {/* Smoke */}
      <circle cx="289" cy="0" r="3.5" style={{ animation: 'smoke 2s ease-out 0.3s infinite', transformOrigin: '289px 0px' }} />
      {/* Cargo hatches */}
      <rect x="35"  y="36" width="66" height="12" rx="1" />
      <rect x="106" y="36" width="66" height="12" rx="1" />
      <rect x="177" y="36" width="66" height="12" rx="1" />
      {/* Derrick / crane post */}
      <rect x="240" y="18" width="3" height="30" />
      <line x1="241" y1="18" x2="258" y2="26" stroke="currentColor" strokeWidth="2" />
      {/* Bow mast */}
      <rect x="14" y="12" width="3" height="38" />
    </svg>
  )
}

function Tanker() {
  return (
    <svg viewBox="0 0 270 72" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Hull */}
      <path d="M0,72 L0,52 L7,42 L22,39 L234,39 L248,45 L258,54 L270,72 Z" />
      {/* Bridge at stern */}
      <rect x="196" y="14" width="62" height="25" />
      {/* Bridge top */}
      <rect x="201" y="5" width="52" height="9" />
      {/* Funnel */}
      <polygon points="213,5 216,0 230,0 227,5" />
      {/* Smoke */}
      <circle cx="221" cy="0" r="3" style={{ animation: 'smoke 1.8s ease-out 0.5s infinite', transformOrigin: '221px 0px' }} />
      {/* Tank domes (characteristic tanker profile) */}
      <ellipse cx="62"  cy="39" rx="20" ry="6" />
      <ellipse cx="114" cy="39" rx="20" ry="6" />
      <ellipse cx="162" cy="39" rx="18" ry="5.5" />
      {/* Pipe rail along deck */}
      <rect x="28" y="37" width="162" height="2" />
      {/* Bow mast */}
      <rect x="12" y="10" width="2.5" height="29" />
    </svg>
  )
}

/* ── Ship wrapper: sail (horizontal) + bob (vertical) ──── */
interface ShipProps {
  Ship: () => React.ReactElement
  width: number
  bottom: number
  opacity: number
  sailDuration: number
  sailDelay: number
  bobDuration: number
  bobDelay: number
}

function AnimatedShip({ Ship, width, bottom, opacity, sailDuration, sailDelay, bobDuration, bobDelay }: ShipProps) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom,
        left: 0,
        width,
        color: `rgba(255,255,255,${opacity})`,
        animation: `sail ${sailDuration}s linear ${sailDelay}s infinite`,
      }}
    >
      {/* Inner div for bob so it doesn't interfere with sail transform */}
      <div style={{ animation: `bob ${bobDuration}s ease-in-out ${bobDelay}s infinite` }}>
        <Ship />
      </div>
    </div>
  )
}

/* ── Hero section ─────────────────────────────────────────────────────── */
export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom,
            rgba(13,31,60,0.72) 0%,
            rgba(13,31,60,0.50) 55%,
            rgba(13,31,60,0.82) 100%),
          url('https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920&q=80&auto=format&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* ── Animated ships layer ─────────────────────────────── */}
      {/* pointer-events-none so ships don't block clicks         */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
        {/*
          Three ships, right → left, different speeds & depths:
          - ContainerShip: large (close), medium speed
          - CargoShip: medium (mid-distance), slower
          - Tanker: small (far away), slowest + more transparent
          Negative delay = ships already in motion when page loads.
        */}
        <AnimatedShip
          Ship={ContainerShip}
          width={380}
          bottom={58}
          opacity={0.58}
          sailDuration={32}
          sailDelay={-9}
          bobDuration={3.2}
          bobDelay={0}
        />
        <AnimatedShip
          Ship={CargoShip}
          width={265}
          bottom={70}
          opacity={0.38}
          sailDuration={44}
          sailDelay={-22}
          bobDuration={4.0}
          bobDelay={1.1}
        />
        <AnimatedShip
          Ship={Tanker}
          width={175}
          bottom={80}
          opacity={0.25}
          sailDuration={58}
          sailDelay={-38}
          bobDuration={5.0}
          bobDelay={2.3}
        />
      </div>

      {/* ── Wave divider ─────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 6 }}>
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', height: '60px', width: '100%' }}
        >
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ── Hero content ─────────────────────────────────────── */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center" style={{ zIndex: 10 }}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-[#C9A84C]/60 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-medium tracking-wider uppercase">
          <span>⚓</span>
          <span>Ship Chandler · Croatia</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 whitespace-pre-line">
          {t.hero_title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero_subtitle}
        </p>

        {/* CTA */}
        <a
          href="#kontakt"
          className="inline-block bg-[#C9A84C] hover:bg-[#b8963f] text-[#0D1F3C] font-bold text-base px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-wide"
        >
          {t.hero_cta}
        </a>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce opacity-60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
