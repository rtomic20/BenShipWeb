import { useLang } from '../contexts/LangContext'

const stats = [
  { key: 'stat1' as const },
  { key: 'stat2' as const },
  { key: 'stat3' as const },
]

export default function About() {
  const { t } = useLang()

  const statData = [
    { num: t.stat1_num, label: t.stat1_label },
    { num: t.stat2_num, label: t.stat2_label },
    { num: t.stat3_num, label: t.stat3_label },
  ]

  return (
    <section id="o-nama" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
                Ben Ship Supply
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1F3C] mb-6">
              {t.about_title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-lg">
              {t.about_text1}
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t.about_text2}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6">
            {statData.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 rounded-2xl bg-[#F4F6F9] border border-gray-100 hover:border-[#C9A84C]/30 transition-colors"
              >
                <div className="text-4xl font-bold text-[#C9A84C] min-w-[100px] text-center">
                  {s.num}
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-gray-700 font-medium text-lg">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
