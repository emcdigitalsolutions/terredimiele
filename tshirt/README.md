# Stampe maglietta — Terre di Miele

Due file SVG vettoriali pronti per la stampa, derivati dallo stile del biglietto da visita v6.

| File | Posizione maglietta | Larghezza | Altezza |
|------|---------------------|-----------|---------|
| `tshirt-fronte-90mm.svg` | Fronte (petto sinistro) | **90 mm** | ~60 mm |
| `tshirt-retro-250mm.svg` | Retro (centro schiena) | **250 mm** | ~90 mm |

## Indicazioni per lo stampatore

**Tipo di stampa consigliata**: serigrafia (3-4 colori) oppure DTF/DTG su tessuto chiaro.

**Colori esatti** (per matching Pantone):

| Ruolo | HEX | Pantone vicino |
|-------|-----|----------------|
| Marrone scuro (testo principale, contorni) | `#3d2b0a` | Pantone 476 C |
| Marrone medio (accenti) | `#8B4513` | Pantone 4625 C |
| Oro dorato (riempimenti) | `#D4A017` | Pantone 124 C |
| Oro chiaro (highlight) | `#F4C542` | Pantone 1235 C |
| Giallo ape (riempimento corpo ape) | `#F4C542` | Pantone 1235 C |
| Nero strisce ape | `#2c1810` | Pantone Black 6 C |
| Bianco ali ape | `#FFFFFF` | — |

**I gradient** (`goldGrad`, `darkGold2`) sono ammessi nei file. Se la tipologia di stampa non li supporta:
- Sostituisci con tinta piatta `#D4A017` (gradient oro) e `#8B4513` (gradient scritto "di Miele")
- Lo stampatore può aprire l'SVG in Inkscape/Illustrator e fare flatten dei gradient

## Convertire testi in path (raccomandato prima della stampa)

Gli SVG usano i font **Playfair Display**, **DM Sans** e **Great Vibes** (Google Fonts). Per evitare che lo stampatore debba installarli:

**Inkscape** (gratis, https://inkscape.org):
1. Apri il file SVG
2. `Edit` → `Select All` (Ctrl+A)
3. `Path` → `Object to Path` (Ctrl+Shift+C)
4. `File` → `Save As` → mantieni formato SVG → salva con suffisso `-outlined.svg`

**Adobe Illustrator**:
1. Apri il file SVG
2. `Select` → `All` (Ctrl+A)
3. `Type` → `Create Outlines` (Ctrl+Shift+O)
4. `File` → `Save As` → SVG, attiva "Preserve Illustrator Editing Capabilities" se serve riapertura

A quel punto il file è 100% vettoriale **senza dipendenze da font installati**.

## Note di stampa

- **Tessuto chiaro** (bianco, panna, beige): i colori funzionano direttamente.
- **Tessuto scuro** (nero, marrone): consiglio di invertire — sostituisci il marrone scuro `#3d2b0a` con bianco `#FFFFFF` o panna `#FFF3CC`. Il giallo/oro mantiene leggibilità.
- **Margine minimo dal bordo della maglietta**: 1 cm consigliato.
- **Posizione petto sinistro (fronte)**: ~10 cm sotto il colletto, ~7 cm dalla cucitura della spalla.
- **Posizione retro**: centrato in larghezza, ~12 cm sotto la cucitura del colletto.

## Anteprima

Per vedere come appariranno: apri i file `.svg` direttamente con un browser (Chrome, Firefox, Edge). I gradient e le forme renderizzano fedelmente.
