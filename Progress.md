# BenShip Web — Progress

Korporativna stranica za **Ben Ship Supply** (ship chandler, Hrvatska).
Gradi se odvojeno od ShipChandler upravljačke aplikacije.

---

## Stack

| Tehnologija | Verzija | Napomena |
|---|---|---|
| React | 19.2 | |
| Vite | 7.3 | build tool + dev server |
| Tailwind CSS | v4.2 | `@tailwindcss/vite` plugin (nema config file) |
| TypeScript | 5.9 | `noUnusedLocals: false` (izbjegava lažne build greške) |

---

## Struktura projekta

```
BenShipWeb/
├── public/
│   ├── benship-logo.jpg          ← originalni logo firme (WhatsApp slika)
│   └── logo.svg                  ← rezervni SVG logotip
├── src/
│   ├── main.tsx                  ← entry point, import styles.css
│   ├── App.tsx                   ← LangProvider + sve sekcije vertikalno
│   ├── styles.css                ← @import "tailwindcss" + custom --color-* varijable
│   ├── contexts/
│   │   └── LangContext.tsx       ← HR/EN string mapa, useLang() hook
│   └── components/
│       ├── Navbar.tsx            ← sticky, glassmorphism scroll, hamburger (mobile)
│       ├── Hero.tsx              ← fullscreen bg (Unsplash), slogan, CTA
│       ├── About.tsx             ← tekst firme + 3 stat kartice
│       ├── Services.tsx          ← 6 kartica usluga s inline SVG ikonama
│       ├── Contact.tsx           ← kontakt info + Netlify Forms forma
│       └── Footer.tsx            ← copyright, anchor linkovi
├── index.html
├── package.json
├── vite.config.ts                ← port 4200, tailwindcss() plugin
└── tsconfig.app.json
```

---

## Dizajn — paleta boja

| Token | Hex | Upotreba |
|---|---|---|
| `navy` | `#0D1F3C` | Navbar, footer, naslovi, CTA pozadina |
| `gold` | `#C9A84C` | Akcenti, hover, stat brojevi, badge |
| `light` | `#F4F6F9` | Pozadina Services i Contact forme |
| White | `#FFFFFF` | Pozadina About, kartice |

---

## Sekcije i što imaju

### Navbar
- Tekst logo: **BEN** (gold) **SHIP** (white) **SUPPLY** (sivo, hidden na xs)
- Anchor linkovi: O nama · Usluge · **Zaposlenici** · Kontakt
- HR/EN toggle (zastavica + oznaka)
- Hamburger za mobile (animirani X)
- Transparentan → solid pri scrollu (useEffect + `scrollY > 50`)

### Hero
- **Ken Burns efekt** — odvojen background `<div>` s animacijom:
  - `scale(1.18) translateX(4%)` → `scale(1.0) translateX(-4%)`
  - Trajanje 22s, `ease-in-out`, `infinite alternate` (gore-dolje bez skipanja)
  - `willChange: transform` za GPU akceleraciju
- Fotografija kontejnerskog broda (Unsplash, photo-1558618666-fcd25c85cd64)
- Dark overlay gradient: 65% → 45% → 85% navy (čitljivost teksta)
- Inspirativni citat u kurzivu: *"Na moru nema zastoja — ni u našoj predanosti"*
- Badge, naslov, podnaslov, CTA gumb → `#kontakt`
- SVG wave divider (bijeli, 60px)

#### CSS animacije (styles.css)
| Keyframe | Opis |
|---|---|
| `kenBurns` | `scale+translateX/Y` na background divu — cinematični efekt kretanja |

### Zaposlenici (`#zaposlenici`) — nova sekcija
- Navy pozadina (#0D1F3C), bijeli tekst — vizualno se ističe od ostatka
- 4 kartice u gridu (2 stupca mobile, 4 desktop)
- Avatar: `ui-avatars.com` — inicijali na navy pozadini, zlatni tekst
- Hover efekt: zlatni border ring + name mijenja boju + linija se produljuje
- Zaposlenici i pozicije:
  | Ime | Pozicija (HR) | Pozicija (EN) |
  |---|---|---|
  | Mauro Kesovija | Direktor | CEO |
  | Zdenka Perović | Voditeljica nabave | Head of Procurement |
  | Bojan Vukelić | Operativni menadžer | Operations Manager |
  | Željko Kesovija | Komercijalista | Sales Manager |

### About (`#o-nama`)
- 2-stupčani layout (lg): tekst lijevo, stat kartice desno
- 3 kartice: 25+ godina · 500+ brodova · 24/7

### Services (`#usluge`)
- 6 kartica u grid (1 → 2 → 3 kolone)
- Svaka kartica: inline SVG ikona + naslov + opis
- Hover: zlatni border + zlatna ikona

### Contact (`#kontakt`)
- Lijevo: adresa, telefon, email, radno vrijeme s ikonama
- Desno: Netlify Forms forma (data-netlify="true")
  - Honeypot polje (spam zaštita)
  - Nakon submita: success state (zelena kvačica)
  - U dev modu: fetch na '/' → uvijek prikazuje success

### Footer
- Logo + anchor linkovi + copyright
- Tekstovi se mijenjaju s jezikom

---

## Lokalno pokretanje

```bash
cd "C:\Users\Lenovo.DESKTOP-7HJOOS6\Desktop\BenShipWeb"
npm run dev
# → http://localhost:4200
```

## Production build

```bash
npx vite build
# Izlaz: dist/ (~215 kB JS, ~20 kB CSS)
```

---

## Hosting — Netlify (plan)

1. Kreirati GitHub repo `BenShipWeb` na github.com
2. Push:
   ```bash
   git remote add origin https://github.com/TVOJ_USERNAME/BenShipWeb.git
   git push -u origin master
   ```
3. Netlify → "New site from Git" → odaberi repo
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Netlify Forms se automatski aktiviraju jer HTML build sadrži `data-netlify="true"`
5. Svaki `git push main` → automatski rebuild (~1 min)

---

## Status implementacije

| Komponenta | Status |
|---|---|
| Scaffold + deps | ✅ |
| Tailwind v4 config | ✅ |
| LangContext HR/EN | ✅ |
| Navbar (tekst logo + Zaposlenici link) | ✅ |
| Hero (Ken Burns efekt, brod foto, citat) | ✅ |
| Zaposlenici sekcija | ✅ |
| About | ✅ |
| Services | ✅ |
| Contact (Netlify form) | ✅ |
| Footer | ✅ |
| `vite build` bez grešaka | ✅ |
| Git init + initial commit | ✅ |
| GitHub push | ⬜ |
| Netlify deploy | ⬜ |
| Vlastita domena | ⬜ (opcionalno) |
