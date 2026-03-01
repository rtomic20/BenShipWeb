import { useLang } from '../contexts/LangContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* ── Ken Burns background ─────────────────────────────
          Odvojen div od sadržaja — animacija scale+pan ne utječe
          na layout ni klikabilnost sadržaja iznad.             */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          animation: 'kenBurns 22s ease-in-out infinite alternate',
          willChange: 'transform',
        }}
      />

      {/* Tamni overlay — daje čitljivost tekstu */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(13,31,60,0.65) 0%, rgba(13,31,60,0.45) 50%, rgba(13,31,60,0.85) 100%)',
        }}
      />

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
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

      {/* ── Sadržaj ──────────────────────────────────────── */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-[#C9A84C]/60 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-medium tracking-wider uppercase">
          <span>⚓</span>
          <span>Ship Chandler · Croatia</span>
        </div>

        {/* Glavni naslov */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 whitespace-pre-line drop-shadow-lg">
          {t.hero_title}
        </h1>

        {/* Inspirativni citat */}
        <p className="text-lg sm:text-xl italic text-[#C9A84C]/90 mb-5 font-light tracking-wide">
          {t.hero_quote}
        </p>

        {/* Podnaslov */}
        <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero_subtitle}
        </p>

        {/* CTA */}
        <a
          href="#kontakt"
          className="inline-block bg-[#C9A84C] hover:bg-[#b8963f] text-[#0D1F3C] font-bold text-base px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-wide"
        >
          {t.hero_cta}
        </a>

        {/* Scroll indikator */}
        <div className="mt-14 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
