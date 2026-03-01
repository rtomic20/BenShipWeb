import { useLang } from '../contexts/LangContext'

/* Avatar generiran od inicijala — bez copyrighta, bez eksternih dependencija.
   ui-avatars.com je besplatni javni servis, radi s bilo kojim imenom.        */
function avatar(name: string) {
  const encoded = encodeURIComponent(name)
  return `https://ui-avatars.com/api/?name=${encoded}&size=300&background=0D1F3C&color=C9A84C&font-size=0.38&bold=true&rounded=false`
}

export default function Team() {
  const { t } = useLang()

  const members = [
    {
      name: 'Mauro Kesovija',
      role: t.team_role_mauro,
      img: avatar('Mauro Kesovija'),
      // Inicijali: MK — zlatno na navy, pristojno za placeholder
    },
    {
      name: 'Zdenka Perović',
      role: t.team_role_zdenka,
      img: avatar('Zdenka Perović'),
    },
    {
      name: 'Bojan Vukelić',
      role: t.team_role_bojan,
      img: avatar('Bojan Vukelić'),
    },
    {
      name: 'Željko Kesovija',
      role: t.team_role_zeljko,
      img: avatar('Željko Kesovija'),
    },
  ]

  return (
    <section id="zaposlenici" className="py-24 bg-[#0D1F3C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
              Ben Ship Supply
            </span>
            <div className="w-10 h-0.5 bg-[#C9A84C]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.team_title}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t.team_subtitle}
          </p>
        </div>

        {/* Grid — 2 stupca na mobilu, 4 na desktopu */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {members.map((m) => (
            <div
              key={m.name}
              className="group flex flex-col items-center text-center"
            >
              {/* Avatar okvir */}
              <div className="relative mb-5">
                {/* Zlatni border ring koji se pojačava na hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#C9A84C]/20 group-hover:border-[#C9A84C]/70 transition-colors duration-300 z-10" />
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full aspect-square object-cover rounded-2xl"
                  loading="lazy"
                />
                {/* Lagani overlay na hover */}
                <div className="absolute inset-0 rounded-2xl bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/5 transition-colors duration-300" />
              </div>

              {/* Ime */}
              <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-[#C9A84C] transition-colors duration-200">
                {m.name}
              </h3>

              {/* Pozicija */}
              <p className="text-[#C9A84C]/70 text-sm font-medium uppercase tracking-wider">
                {m.role}
              </p>

              {/* Dekorativna linija ispod */}
              <div className="mt-3 w-8 h-0.5 bg-[#C9A84C]/30 group-hover:w-14 group-hover:bg-[#C9A84C]/70 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
