import { useLang } from '../contexts/LangContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(13,31,60,0.70) 0%, rgba(13,31,60,0.55) 60%, rgba(13,31,60,0.80) 100%),
          url('https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920&q=80&auto=format&fit=crop')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Anchor wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
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
