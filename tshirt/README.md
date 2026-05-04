# Stampe maglietta — Terre di Miele

Stampe vettoriali progettate per **maglietta gialla**, derivate dallo stile del biglietto da visita v6.

| File | Posizione | Larghezza | Altezza |
|------|-----------|-----------|---------|
| `tshirt-fronte-90mm.svg` | Fronte (petto sinistro) | **90 mm** | 70 mm |
| `tshirt-retro-250mm.svg` | Retro (centro schiena) | **250 mm** | 110 mm |

## Strategia di design

**Stampa a 2 colori** sul giallo della maglietta:

| Colore | HEX | Pantone vicino | Uso |
|--------|-----|----------------|-----|
| Marrone scuro | `#3d2b0a` | Pantone 476 C | Testi, contorni, ape, pattern, decorazioni |
| Bianco crema | `#FFFAF0` | Pantone 11-0602 TPX (Bright White) | Ali ape, highlight occhi |

Il **giallo del tessuto** fa da riempimento naturale: il corpo dell'ape, l'interno dell'esagono e gli sfondi non vengono stampati — viene lasciato il tessuto. Risultato:
- **Contrasto massimo** (marrone scuro su giallo è una delle coppie più leggibili).
- **Costo serigrafia ridotto** (2 colori invece di 5+).
- **Coerenza brand** (il giallo della maglietta = il giallo del miele).

## Composizione

**Fronte (90×70 mm) — emblem verticale**
1. Esagono grande con doppio bordo + pattern honeycomb decorativo
2. Ape stilizzata heraldic al centro (ali bianche, corpo "trasparente" col giallo del tessuto)
3. Wordmark "Terre di Miele" (Playfair Display)
4. Divider linee + esagono pieno
5. **APICOLTURA LA GRECA** (tag principale, DM Sans Bold)
6. MIELE SICILIANO (sub-tag)

**Retro (250×110 mm) — banner orizzontale 3-fasce**
- **Sx**: cluster esagoni con ape grande dettagliata
- **Centro top**: tag superiore APICOLTURA LA GRECA con linee divider e esagoni piccoli
- **Centro mid**: wordmark gigante "Terre di Miele"
- **Centro bottom**: tagline corsivo "Miele Siciliano" (Great Vibes)
- **Centro footer**: SALVATORE LA GRECA · CAMPOBELLO DI LICATA · sito
- **Dx**: cluster esagoni con goccia di miele (silhouette + highlight)
- **Sfondo**: pattern honeycomb molto sottile (10% opacity) su tutta la superficie

## Convertire testi in path (raccomandato prima della stampa)

I file usano i font **Playfair Display**, **DM Sans** e **Great Vibes** (Google Fonts free). Per garantire che lo stampatore riproduca esattamente le lettere senza dover installare i font:

**Inkscape** (gratis, https://inkscape.org):
1. Apri il file SVG
2. `Edit` → `Select All` (Ctrl+A)
3. `Path` → `Object to Path` (Ctrl+Shift+C)
4. `File` → `Save As` → mantieni formato SVG → suffisso `-outlined.svg`

**Adobe Illustrator**:
1. Apri il file SVG
2. `Select` → `All` (Ctrl+A)
3. `Type` → `Create Outlines` (Ctrl+Shift+O)
4. `File` → `Save As` → SVG, salva

A quel punto il file è 100% vettoriale **senza dipendenze da font installati**.

## Note tecniche per lo stampatore

- **Nessun gradient nella versione finale**: tinte piatte, ottimale per serigrafia.
- **Nessun fill di sfondo**: il tessuto giallo si vede attraverso le aree "vuote" degli SVG. Quando importati in Illustrator/CorelDRAW, gli oggetti senza fill restano trasparenti.
- **Stroke minimi**: 1.2 unit nel viewBox = ~0.12 mm. Per serigrafia consiglio di non scendere sotto 0.3 mm reali → eventualmente convertire le linee più sottili in path con thickness aumentato.
- **Margine minimo dal bordo della maglietta**: 1 cm consigliato.
- **Posizione petto sinistro (fronte)**: ~10 cm sotto il colletto, ~7 cm dalla cucitura della spalla.
- **Posizione retro**: centrato in larghezza, ~12 cm sotto la cucitura del colletto.

## Anteprima

Apri i file `.svg` direttamente con un browser (Chrome, Firefox, Edge) — il rendering è fedele alla stampa. Per simulare il risultato sulla maglietta gialla: imposta lo sfondo del browser a `#FFD700` (es. tramite Chrome DevTools → Elements → `<body>` → `style="background:#FFD700"`).

## Varianti future (su richiesta)

- **Versione 1 colore solo**: tutto marrone scuro, niente bianco crema sulle ali (ali in outline solo). Stampa più economica.
- **Versione invertita** per maglietta marrone scuro: tutto in crema/oro chiaro, il colore scuro fa da fondo del tessuto.
- **Composizione verticale** del retro per stampa su grembiule o totebag.
