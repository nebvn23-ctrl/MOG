# MOG — $MOG

Site one-page pentru MOG, construit în Next.js pornind de la designul realizat
în Claude Design.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · next/image · next/font

## Pornire rapidă

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producție
npm run start    # servește build-ul local
```

Nu e nevoie de variabile de mediu.

---

## Unde pui CA, X, Telegram și linkul de Buy

Toate se editează **într-un singur loc**: `src/config/mog.ts`, blocul `LINKS`:

```ts
export const LINKS = {
  x: "[X_LINK]",                          // https://x.com/contul_tau
  telegram: "[TELEGRAM_LINK]",            // https://t.me/grupul_tau
  buy: "[BUY_LINK]",                      // Dexscreener / pump.fun etc.
  contractAddress: "[CONTRACT_ADDRESS]",  // adresa reală a tokenului
};
```

**Important:** scoate parantezele drepte `[ ]` când pui valoarea reală.

Corect:
```ts
x: "https://x.com/mogcoin",
contractAddress: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
```

Greșit (rămâne „COMING SOON"):
```ts
x: "[https://x.com/mogcoin]",
```

Cum se comportă:
- **CA** apare în hero. Când e completat, se poate copia cu un click
  (afișează „COPIED!"). Când e gol, arată „COMING SOON" și butonul e inactiv.
- **X / Telegram** apar lângă CA. Când sunt goale, arată „X — soon" / „TG — soon".
- Ce lași ca placeholder nu strică nimic — rămâne automat în starea „soon".

---

## Structura site-ului

1. **Nav** — logo $MOG (click de 5 ori → MOG MODE), grafic decorativ, linkuri
2. **Hero** — video de fundal cu parallax, titlu MOG cu efect glitch pe 3 straturi,
   marquee, bara CA + social
3. **Floaters** — poze care plutesc la scroll (doar pe desktop)
4. **Lore** — textul despre ce înseamnă „to mog"
5. **Archive** — două carusele circulare infinite, în direcții opuse
6. **Live counter** — contor decorativ pe tot ecranul, crește la click
7. **Gallery** — 12 imagini; click pe oricare → ștampila „MOGGED"
8. **Video** — clipul cu controale
9. **Footer**

### Interacțiuni
- Click pe orice imagine (galerie, carusele, floaters) → ștampila „MOGGED"
- Click de 5 ori pe logo → flash „MOG MODE" pe tot ecranul
- Click pe contor → crește numărul

---

## Note despre conținut

- **Graficul din nav și contorul „live" sunt pur decorative.** Nu sunt conectate
  la nicio sursă reală de date și nu reprezintă prețuri sau statistici reale.
- **Galeria conține doar artă MOG originală.** Două imagini din exportul inițial
  (o fotografie de presă din Biroul Oval și un cadru din filmele Marvel) au fost
  excluse intenționat, fiind materiale protejate prin drepturi de autor, cu risc
  legal pentru un site comercial.

## Cum adaugi imagini noi

1. Pui fișierul în `public/media/mog/`
2. Adaugi o intrare în `GALLERY` din `src/config/mog.ts`:
   ```ts
   { id: 13, src: "/media/mog/nume-fisier.jpg", tag: "ETICHETA", alt: "Descriere." }
   ```

---

## Publicare pe Vercel

1. Urcă proiectul pe GitHub — **conținutul** folderului, nu folderul în sine.
   (În rădăcina repo-ului trebuie să vezi direct `package.json`, `src`, `public`.)
2. Intră pe [vercel.com](https://vercel.com) → **Sign up with GitHub**
3. **Add New → Project** → alegi repo-ul → **Import**
4. Verifică: **Framework Preset** trebuie să fie **Next.js** (nu „Other").
   Dacă scrie altceva, schimbă-l manual.
5. **Deploy** — durează 1–2 minute (dacă durează 3 secunde, ceva e greșit).
6. Pentru domeniu propriu: **Settings → Domains → Add**, apoi configurezi
   înregistrările DNS afișate de Vercel.
7. Actualizează `SITE.domain` în `src/config/mog.ts` cu domeniul real, ca
   metadatele SEO și sitemap-ul să fie corecte.

Orice modificare salvată pe GitHub declanșează automat un redeploy pe Vercel.
