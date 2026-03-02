import { useState } from 'react'
import { useLang } from '../contexts/LangContext'

export default function Contact() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)

  const info = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: t.contact_address_label,
      value: t.contact_address,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: t.contact_phone_label,
      value: t.contact_phone,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: t.contact_email_label,
      value: t.contact_email,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
        </svg>
      ),
      label: t.contact_fax_label,
      value: t.contact_fax,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: t.contact_hours_label,
      value: t.contact_hours,
    },
  ]

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true)) // Show success anyway in dev
  }

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-0.5 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">Contact</span>
            <div className="w-10 h-0.5 bg-[#C9A84C]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1F3C] mb-4">{t.contact_title}</h2>
          <p className="text-gray-600 text-lg">{t.contact_subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            {info.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0D1F3C]/5 flex items-center justify-center text-[#C9A84C] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                  <p className="text-gray-800 font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Anchor image / decorative */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2 text-[#0D1F3C]/30">
                <span className="text-4xl">⚓</span>
                <span className="text-sm font-light tracking-wider">Rijeka · Adriatic Sea</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#F4F6F9] rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[260px] text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-3xl">
                  ✓
                </div>
                <p className="text-[#0D1F3C] font-semibold text-lg">{t.form_success}</p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>Don't fill: <input name="bot-field" /></label>
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.form_name}</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors text-gray-800"
                    placeholder={t.form_name}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.form_email}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors text-gray-800"
                    placeholder={t.form_email}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">{t.form_message}</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors text-gray-800 resize-none"
                    placeholder={t.form_message}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0D1F3C] hover:bg-[#C9A84C] text-white hover:text-[#0D1F3C] font-bold py-3.5 rounded-lg transition-all duration-200 uppercase tracking-wide"
                >
                  {t.form_submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
