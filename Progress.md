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
- *Isprobano: logo slika u bijelom containeru — reverted nazad na tekst (nije dobro izgledalo na navy bg)*
- Anchor linkovi: O nama · Usluge · **Zaposlenici** · Kontakt
- HR/EN toggle (zastavica + oznaka)
- Hamburger za mobile (animirani X)
- Transparentan → solid pri scrollu (useEffect + `scrollY > 50`)

### Hero
- **Ken Burns slideshow** — 4 fotografije brodova (Pexels, besplatne za komercijalnu upotrebu):
  | Redoslijed | Pexels ID | Opis |
  |---|---|---|
  | 1 | 3840441 | Aerijalni pogled, brod na otvorenom moru (Tom Fisk) |
  | 2 | 3278012 | Brod bočno na moru, dnevno svjetlo |
  | 3 | 2231743 | Drone pogled, rđava oplatnica vs plavo more |
  | 4 | 1554646 | Aerijalni pogled na luku |
- Svaka slika se prikazuje **7 sekundi**, crossfade prijelaz **1.5s**
- Ken Burns animacija (`scale 1.18→1.0 + translateX ±4%`) teče kontinuirano na svim slikama
- Klikabilne točkice (pill indikatori) — ručno prebacivanje slike
- Preload svih slika (`<img display:none>`) — nema trzanja pri prijelazu
- Tamni overlay gradient: 65% → 42% → 88% navy
- Inspirativni citat u kurzivu zlatne boje
- SVG wave divider (bijeli, 60px)

#### CSS animacije (styles.css)
| Keyframe | Opis |
|---|---|
| `kenBurns` | `scale+translateX/Y` na svakom background divu |

### Redoslijed sekcija
Poravnato s redoslijedom u navbaru:
```
Hero → O nama → Usluge → Zaposlenici → Kontakt
```

### Zaposlenici (`#zaposlenici`) — nova sekcija
- Navy pozadina (#0D1F3C), bijeli tekst — vizualno se ističe od ostatka
- 4 kartice u gridu (2 stupca mobile, 4 desktop)
- Avatar: `ui-avatars.com` — inicijali na navy pozadini, zlatni tekst
- Hover efekt: zlatni border ring + name mijenja boju + linija se produljuje
- Zaposlenici i pozicije:
  | Ime | Pozicija (HR) | Pozicija (EN) |
  |---|---|---|
  | Zdenka Perović | Direktorica | CEO |
  | Mauro Kesovija | Voditelj nabave | Head of Procurement |
  | Bojan Vukelić | Operativni menadžer | Operations Manager |
  | Željko Kesovija | Voditelj tehničke nabave | Technical Procurement Manager |

### About (`#o-nama`)
- 2-stupčani layout (lg): tekst lijevo, stat kartice desno
- 3 kartice: 36+ godina (od 1990.) · 10.000+ brodova · 24/7
- About tekst: povijest tvrtke od 1990. u Rijeci

### Services (`#usluge`)
- 6 kartica u grid (1 → 2 → 3 kolone)
- Svaka kartica: inline SVG ikona + naslov + opis
- Hover: zlatni border + zlatna ikona

### Contact (`#kontakt`)
- Lijevo: adresa (Riva boduli 1, Rijeka), telefon, fax, email, radno vrijeme s ikonama
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
| Navbar (tekst logo — BEN/SHIP/SUPPLY) | ✅ |
| Hero (Ken Burns efekt, brod foto, citat) | ✅ |
| Zaposlenici sekcija | ✅ |
| About | ✅ |
| Services | ✅ |
| Contact (Netlify form) | ✅ |
| Footer | ✅ |
| `vite build` bez grešaka | ✅ |
| Git init + initial commit | ✅ |
| GitHub push | ✅ |
| Netlify deploy | ⬜ |
| Vlastita domena | ⬜ (opcionalno) |
