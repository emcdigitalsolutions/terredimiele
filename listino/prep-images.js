// Ottimizza/ritaglia foto per il listino (versione completa: header + 7 prodotti)
const sharp = require('C:/workspace/lacompagniadelglutenfree/node_modules/sharp');
const path = require('path');
const fs = require('fs');

const IMG = path.join(__dirname, '..', 'images');
const OUT = path.join(__dirname, 'img');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

// Mapping prodotto → file sorgente (come da sito + foto di reportage)
const PRODUCTS = {
  'eucalipto':   'barattoli3.jpg',
  'millefiori':  'barattoli4.jpg',
  'castagno':    '08.jpg',         // telaio favo carico → robusto, montano
  'balsamico':   'barattoli.jpg',  // composizione 8 barattoli + tovaglia ricamata
  'sulla':       'barattoli5.jpg', // cestini chiari + setaccio → delicato, floreale
  'polline':     'assaggi2.jpg',   // macinino antico + polline visibile
  'favo':        '01.jpg',         // ⭐ favo intero colato di miele
};

(async () => {
  // Header logo = hero dal sito (barattoli.jpg crop quadrato centrato)
  await sharp(path.join(IMG, 'barattoli.jpg'))
    .resize(600, 600, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 88 })
    .toFile(path.join(OUT, 'header-mark.jpg'));
  console.log('✓ header-mark.jpg');

  // Logo testuale "Apicoltura La Greca" usato come decorazione secondaria
  await sharp(path.join(IMG, 'logo.jpg'))
    .resize(512, 512, { fit: 'cover' })
    .png()
    .toFile(path.join(OUT, 'logo.png'));
  console.log('✓ logo.png');

  // Foto specifiche prodotti (crop quadrato 500x500)
  for (const [slug, src] of Object.entries(PRODUCTS)) {
    const srcPath = path.join(IMG, src);
    if (!fs.existsSync(srcPath)) { console.log(`✗ source missing: ${src}`); continue; }
    await sharp(srcPath)
      .resize(500, 500, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 85 })
      .toFile(path.join(OUT, `${slug}.jpg`));
    console.log(`✓ ${slug}.jpg`);
  }

  // QR
  await sharp(path.join(IMG, 'qrcode-terredimiele.png'))
    .resize(300, 300, { fit: 'contain', background: '#fff' })
    .png()
    .toFile(path.join(OUT, 'qr.png'));
  console.log('✓ qr.png');
})();
