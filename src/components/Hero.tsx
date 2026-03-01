import { useState, useEffect } from 'react'
import { useLang } from '../contexts/LangContext'

/* ── 4 fotografije brodova (Pexels — besplatne za komercijalnu upotrebu) ──
   Svaka se prikazuje 7 sekundi, crossfade 1.5s, Ken Burns na svakoj.        */
const IMAGES = [
  {
    url: 'https://images.pexels.com/photos/3840441/pexels-photo-3840441.jpeg?auto=compress&cs=tinysrgb&w=1920',
    position: 'center 40%',   // aerijalni pogled, brod na otvorenom moru
  },
  {
    url: 'https://images.pexels.com/photos/3278012/pexels-photo-3278012.jpeg?auto=compress&cs=tinysrgb&w=1920',
    position: 'center 50%',   // brod bočno na moru, dnevno svjetlo
  },
  {
    url: 'https://images.pexels.com/photos/2231743/pexels-photo-2231743.jpeg?auto=compress&cs=tinysrgb&w=1920',
    position: 'center 35%',   // drone pogled, rđava oplatnica vs plavo more
  },
  {
    url: 'https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=1920',
    position: 'center 45%',   // aerijalni pogled, luka
  },
]

const SLIDE_DURATION = 7000  // ms koliko se prikazuje svaka slika
const FADE_DURATION  = 1500  // ms crossfade prijelaz

export default function Hero() {
  const { t } = useLang()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % IMAGES.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* ── Preload svih slika u memoriju ──────────────────── */}
      {IMAGES.map(img => (
        <img key={img.url} src={img.url} alt="" style={{ display: 'none' }} aria-hidden="true" />
      ))}

      {/* ── Ken Burns slideshow ─────────────────────────────
          Sve slike su uvijek prisutne; samo opacity se mijenja.
          Ken Burns teče kontinuirano na svakoj — kad slika
          postane aktivna, zatekne je negdje usred animacije
          što daje lijepi prirodni osjećaj kretanja.             */}
      {IMAGES.map((img, i) => (
        <div
          key={img.url}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${img.url}')`,
            backgroundSize: 'cover',
            backgroundPosition: img.position,
            opacity: i === current ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            animation: 'kenBurns 22s ease-in-out infinite alternate',
            willChange: 'transform, opacity',
            zIndex: 1,
          }}
        />
      ))}

      {/* ── Tamni overlay ───────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(13,31,60,0.65) 0%, rgba(13,31,60,0.42) 50%, rgba(13,31,60,0.88) 100%)',
          zIndex: 2,
        }}
      />

      {/* ── Wave divider ─────────────────────────────────── */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4 }}>
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
      <div
        className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center"
        style={{ zIndex: 10 }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-[#C9A84C]/60 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-medium tracking-wider uppercase">
          <span>⚓</span>
          <span>Ship Chandler · Croatia</span>
        </div>

        {/* Naslov */}
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

        {/* ── Indikator točkice — klik mijenja sliku ─────── */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slika ${i + 1}`}
              style={{
                height: '8px',
                width: i === current ? '24px' : '8px',
                borderRadius: '9999px',
                background: i === current ? '#C9A84C' : 'rgba(255,255,255,0.35)',
                transition: 'all 0.4s ease',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* Scroll indikator */}
        <div className="mt-8 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
