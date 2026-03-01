import { createContext, useContext, useState } from 'react'

type Lang = 'hr' | 'en'

const strings = {
  hr: {
    // Navbar
    nav_about: 'O nama',
    nav_services: 'Usluge',
    nav_contact: 'Kontakt',

    // Hero
    hero_title: 'Sve što vaš brod treba —\nna jednom mjestu',
    hero_subtitle: 'Profesionalni ship chandler s višedesetljetnim iskustvom u opskrbi brodova u Hrvatskoj.',
    hero_cta: 'Kontaktirajte nas',

    // About
    about_title: 'O nama',
    about_text1: 'Ben Ship Supply vodeći je ship chandler u Republici Hrvatskoj s dugogodišnjom tradicijom u opskrbi brodova svim potrebnim zalihama. Naša misija je pružiti brzu, pouzdanu i profesionalnu uslugu svakom brodu koji uplovi u naše luke.',
    about_text2: 'Od namirnica i brodskog materijala do rezervnih dijelova i medicinske opreme — sve isporučujemo na brod u dogovorenom roku, 24 sata dnevno, 7 dana u tjednu.',
    stat1_num: '25+',
    stat1_label: 'godina iskustva',
    stat2_num: '500+',
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
    contact_address: 'Put Supavla 7, 21000 Split, Hrvatska',
    contact_phone_label: 'Telefon',
    contact_phone: '+385 21 123 456',
    contact_email_label: 'Email',
    contact_email: 'info@benship.hr',
    contact_hours_label: 'Radno vrijeme',
    contact_hours: 'Pon–Pet 08:00–16:00 | Dostupni 24/7',
    form_name: 'Vaše ime',
    form_email: 'Email adresa',
    form_message: 'Poruka',
    form_submit: 'Pošalji poruku',
    form_success: 'Hvala! Vaša poruka je poslana.',

    // Footer
    footer_copy: '© 2025 Ben Ship Supply. Sva prava pridržana.',
  },
  en: {
    // Navbar
    nav_about: 'About',
    nav_services: 'Services',
    nav_contact: 'Contact',

    // Hero
    hero_title: 'Everything your vessel needs —\nin one place',
    hero_subtitle: 'Professional ship chandler with decades of experience supplying vessels in Croatia.',
    hero_cta: 'Contact us',

    // About
    about_title: 'About Us',
    about_text1: 'Ben Ship Supply is a leading ship chandler in Croatia with a long tradition of supplying vessels with all necessary provisions. Our mission is to provide fast, reliable and professional service to every ship calling at Croatian ports.',
    about_text2: 'From provisions and deck stores to spare parts and medical supplies — we deliver everything on board within the agreed timeframe, 24 hours a day, 7 days a week.',
    stat1_num: '25+',
    stat1_label: 'years of experience',
    stat2_num: '500+',
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
    contact_address: 'Put Supavla 7, 21000 Split, Croatia',
    contact_phone_label: 'Phone',
    contact_phone: '+385 21 123 456',
    contact_email_label: 'Email',
    contact_email: 'info@benship.hr',
    contact_hours_label: 'Business hours',
    contact_hours: 'Mon–Fri 08:00–16:00 | Available 24/7',
    form_name: 'Your name',
    form_email: 'Email address',
    form_message: 'Message',
    form_submit: 'Send message',
    form_success: 'Thank you! Your message has been sent.',

    // Footer
    footer_copy: '© 2025 Ben Ship Supply. All rights reserved.',
  },
} as const

type Strings = typeof strings['hr']

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
