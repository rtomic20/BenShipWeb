import { createContext, useContext, useState } from 'react'

type Lang = 'hr' | 'en'

const strings = {
  hr: {
    // Navbar
    nav_about: 'O nama',
    nav_services: 'Usluge',
    nav_team: 'Zaposlenici',
    nav_contact: 'Kontakt',

    // Hero
    hero_title: 'Sve što vaš brod treba —\nna jednom mjestu',
    hero_quote: '"Na moru nema zastoja — ni u našoj predanosti vašem brodu."',
    hero_subtitle: 'Profesionalni ship chandler s višedesetljetnim iskustvom u opskrbi brodova u Hrvatskoj.',
    hero_cta: 'Kontaktirajte nas',

    // About
    about_title: 'O nama',
    about_text1: 'Ben Ship Supply d.o.o. od svog osnivanja 1990. godine bavi se opskrbom brodova u gradu Rijeci. Ono što je počelo kao mali tim od tri iskusna ship chandlera, s godinama je naraslo u snažnu i uglednu tvrtku.',
    about_text2: 'Danas smo vješt i predan tim. Kombinacijom mladosti, iskustva i predanosti te proaktivnim pristupom osiguravamo sigurnu i pravovremenu isporuku svega što vaš brod treba. U Ben Ship Supply-u imamo sposobnost, fleksibilnost i volju da se prilagodimo vašim specifičnim potrebama i zahtjevima. Razumijemo važnost kvalitete i brzine te radimo na tome da osiguramo oboje bez kompromisa.',
    stat1_num: '36+',
    stat1_label: 'godina iskustva',
    stat2_num: '10.000+',
    stat2_label: 'opskrbljenih brodova',
    stat3_num: '24/7',
    stat3_label: 'dostupnost',

    // Services
    services_title: 'Naše usluge',
    services_subtitle: 'Potpuna opskrba broda na jednom mjestu — od palube do strojarnice.',
    svc1_title: 'Namirnice',
    svc1_desc: 'Svježe, konzervirane i smrznute namirnice vrhunske kvalitete za posadu.',
    svc2_title: 'Carinsko skladište',
    svc2_desc: 'Bonded stores — duhan, alkohol i ostala carinski oslobođena roba.',
    svc3_title: 'Brodski materijal',
    svc3_desc: 'Oprema za palubu i strojarnice, sigurnosna oprema, čišćenje.',
    svc4_title: 'Rezervni dijelovi',
    svc4_desc: 'Brza nabava i dostava rezervnih dijelova za sve tipove brodova.',
    svc5_title: 'Medicinska oprema',
    svc5_desc: 'Brodske ljekarne, medicinska sredstva i oprema prema SOLAS standardima.',
    svc6_title: 'Voda i gorivo',
    svc6_desc: 'Opskrba svježom vodom i gorivom direktno na vez.',

    // Contact
    contact_title: 'Kontakt',
    contact_subtitle: 'Javite nam se — odgovaramo u najkraćem mogućem roku.',
    contact_address_label: 'Adresa',
    contact_address: 'Riva boduli 1, 51000 Rijeka, Hrvatska',
    contact_phone_label: 'Telefon',
    contact_phone: '+385 51 214 712 / 320 870',
    contact_fax_label: 'Fax',
    contact_fax: '+385 51 320 871',
    contact_email_label: 'Email',
    contact_email: 'bssupply1@gmail.com',
    contact_hours_label: 'Radno vrijeme',
    contact_hours: 'Pon–Pet 08:00–16:00 | Dostupni 24/7',
    form_name: 'Vaše ime',
    form_email: 'Email adresa',
    form_message: 'Poruka',
    form_submit: 'Pošalji poruku',
    form_success: 'Hvala! Vaša poruka je poslana.',

    // Team
    team_title: 'Naš tim',
    team_subtitle: 'Iskustvo i predanost koje stoje iza svakog broda koji opskrbljujemo.',
    team_role_mauro: 'Voditelj nabave',
    team_role_zdenka: 'Direktorica',
    team_role_bojan: 'Operativni menadžer',
    team_role_zeljko: 'Voditelj tehničke nabave',

    // Footer
    footer_copy: '© 2025 Ben Ship Supply. Sva prava pridržana.',
  },
  en: {
    // Navbar
    nav_about: 'About',
    nav_services: 'Services',
    nav_team: 'Team',
    nav_contact: 'Contact',

    // Hero
    hero_title: 'Everything your vessel needs —\nin one place',
    hero_quote: '"There are no delays at sea — nor in our commitment to your vessel."',
    hero_subtitle: 'Professional ship chandler with decades of experience supplying vessels in Croatia.',
    hero_cta: 'Contact us',

    // About
    about_title: 'About Us',
    about_text1: 'Ben Ship Supply d.o.o. has been dealing with chandlery supplies in the city of Rijeka since 1990, when it was founded. What started as a small team of three experienced ship chandlers, over the years grew into a strong and reputable company.',
    about_text2: "Today we are a skilled and dedicated team. With our combination of youth, experience, commitment and with our proactive approach we provide the safe and timely delivery of all your vessel's needs. At Ben Ship Supply we have the ability, flexibility and willingness to adjust to your specific needs and demands. We understand the importance of both quality and speed and work to ensure the best of both without compromising one or the other.",
    stat1_num: '36+',
    stat1_label: 'years of experience',
    stat2_num: '10,000+',
    stat2_label: 'vessels supplied',
    stat3_num: '24/7',
    stat3_label: 'availability',

    // Services
    services_title: 'Our Services',
    services_subtitle: 'Complete vessel supply in one place — from deck to engine room.',
    svc1_title: 'Provisions',
    svc1_desc: 'Fresh, canned and frozen provisions of the highest quality for the crew.',
    svc2_title: 'Bonded Stores',
    svc2_desc: 'Bonded stores — tobacco, spirits and other duty-free goods.',
    svc3_title: 'Deck & Engine Stores',
    svc3_desc: 'Deck and engine room equipment, safety gear, cleaning supplies.',
    svc4_title: 'Spare Parts',
    svc4_desc: 'Fast sourcing and delivery of spare parts for all vessel types.',
    svc5_title: 'Medical Supplies',
    svc5_desc: 'Ship medicine chests, medical supplies and equipment per SOLAS standards.',
    svc6_title: 'Fresh Water & Fuel',
    svc6_desc: 'Supply of fresh water and fuel directly alongside.',

    // Contact
    contact_title: 'Contact',
    contact_subtitle: 'Get in touch — we respond as quickly as possible.',
    contact_address_label: 'Address',
    contact_address: 'Riva boduli 1, 51000 Rijeka, Croatia',
    contact_phone_label: 'Phone',
    contact_phone: '+385 51 214 712 / 320 870',
    contact_fax_label: 'Fax',
    contact_fax: '+385 51 320 871',
    contact_email_label: 'Email',
    contact_email: 'bssupply1@gmail.com',
    contact_hours_label: 'Business hours',
    contact_hours: 'Mon–Fri 08:00–16:00 | Available 24/7',
    form_name: 'Your name',
    form_email: 'Email address',
    form_message: 'Message',
    form_submit: 'Send message',
    form_success: 'Thank you! Your message has been sent.',

    // Team
    team_title: 'Our Team',
    team_subtitle: 'The experience and dedication behind every vessel we supply.',
    team_role_mauro: 'Head of Procurement',
    team_role_zdenka: 'CEO',
    team_role_bojan: 'Operations Manager',
    team_role_zeljko: 'Technical Procurement Manager',

    // Footer
    footer_copy: '© 2025 Ben Ship Supply. All rights reserved.',
  },
} as const

type Strings = (typeof strings)[Lang]

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: Strings
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('hr')
  const t = strings[lang]
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
