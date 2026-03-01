import { useLang } from '../contexts/LangContext'

const icons = [
  // Provisions — fork & knife
  <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-9h6M6 3v3a6 6 0 0012 0V3" />
  </svg>,
  // Bonded — box/package
  <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
  </svg>,
  // Deck/Engine — wrench
  <svg key="3" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09.542-.56 1.17-1.184 1.31-.625.14-1.63-.2-2.063-.73-.433-.53-.497-1.36-.174-1.87.322-.51 1.12-.68 1.75-.52.63.16 1.58.81 1.671 1.81zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.328l5.603 3.113z" />
  </svg>,
  // Spare parts — cog
  <svg key="4" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3M15.75 4.505l-.75 1.3M11.25 2.25h1.5M11.25 21.75h1.5m-7.5-15h1.5m10.5 0h1.5M5.25 12h1.5m10.5 0h1.5" />
  </svg>,
  // Medical — heart
  <svg key="5" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>,
  // Water/Fuel — droplet
  <svg key="6" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>,
]

export default function Services() {
  const { t } = useLang()

  const services = [
    { title: t.svc1_title, desc: t.svc1_desc },
    { title: t.svc2_title, desc: t.svc2_desc },
    { title: t.svc3_title, desc: t.svc3_desc },
    { title: t.svc4_title, desc: t.svc4_desc },
    { title: t.svc5_title, desc: t.svc5_desc },
    { title: t.svc6_title, desc: t.svc6_desc },
  ]

  return (
    <section id="usluge" className="py-24 bg-[#F4F6F9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
              Services
            </span>
            <div className="w-10 h-0.5 bg-[#C9A84C]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1F3C] mb-4">
            {t.services_title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t.services_subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0D1F3C]/5 group-hover:bg-[#C9A84C]/10 flex items-center justify-center mb-5 transition-colors text-[#0D1F3C] group-hover:text-[#C9A84C]">
                {icons[i]}
              </div>
              <h3 className="text-xl font-bold text-[#0D1F3C] mb-3">{svc.title}</h3>
              <p className="text-gray-600 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
