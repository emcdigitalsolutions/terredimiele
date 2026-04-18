const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const CARD_WIDTH = '85mm';
const CARD_HEIGHT = '55mm';

async function generatePDF(htmlFile, outputFile) {
    const browser = await puppeteer.launch({
        executablePath: CHROME_PATH,
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
    });

    try {
        const page = await browser.newPage();

        // Set viewport to approximate card size at 300 DPI
        await page.setViewport({ width: 1004, height: 650, deviceScaleFactor: 3 });

        const filePath = path.resolve(__dirname, htmlFile).replace(/\\/g, '/');
        console.log(`  Loading: file:///${filePath}`);

        await page.goto(`file:///${filePath}`, {
            waitUntil: 'networkidle0',
            timeout: 30000
        });

        // Wait for web fonts
        await page.evaluateHandle('document.fonts.ready');

        // Wait for all images to load (QR code)
        await page.evaluate(() => {
            return Promise.all(
                Array.from(document.images)
                    .filter(img => !img.complete)
                    .map(img => new Promise((resolve) => {
                        img.onload = resolve;
                        img.onerror = resolve;
                        setTimeout(resolve, 5000);
                    }))
            );
        });

        // Extra rendering time
        await new Promise(r => setTimeout(r, 2500));

        // Inject print-optimized CSS: card fills the entire page
        await page.addStyleTag({
            content: `
                @media print {
                    html, body {
                        margin: 0 !important;
                        padding: 0 !important;
                        background: none !important;
                        width: ${CARD_WIDTH} !important;
                        height: ${CARD_HEIGHT} !important;
                        min-height: ${CARD_HEIGHT} !important;
                        max-height: ${CARD_HEIGHT} !important;
                        display: block !important;
                        overflow: hidden !important;
                    }
                    .label { display: none !important; }
                    .card {
                        width: ${CARD_WIDTH} !important;
                        height: ${CARD_HEIGHT} !important;
                        margin: 0 !important;
                        border-radius: 0 !important;
                        box-shadow: none !important;
                        position: fixed !important;
                        top: 0 !important;
                        left: 0 !important;
                    }
                }
            `
        });

        await page.emulateMediaType('print');

        // Generate PDF at exact card dimensions
        await page.pdf({
            path: path.resolve(__dirname, outputFile),
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            printBackground: true,
            margin: { top: 0, right: 0, bottom: 0, left: 0 },
            preferCSSPageSize: false,
        });

        console.log(`  OK: ${outputFile}`);
    } finally {
        await browser.close();
    }
}

async function main() {
    console.log('=== Generazione PDF Biglietto da Visita - Terre di Miele ===\n');

    const files = [
        ['fronte.html', 'fronte.pdf'],
        ['retro.html', 'retro.pdf'],
        ['fronte-v2.html', 'fronte-v2.pdf'],
        ['retro-v2.html', 'retro-v2.pdf'],
        ['fronte-v3.html', 'fronte-v3.pdf'],
        ['retro-v3.html', 'retro-v3.pdf'],
        ['fronte-v4.html', 'fronte-v4.pdf'],
        ['retro-v4.html', 'retro-v4.pdf'],
        ['fronte-v5.html', 'fronte-v5.pdf'],
        ['retro-v5.html', 'retro-v5.pdf'],
    ];

    for (let i = 0; i < files.length; i++) {
        const [html, pdf] = files[i];
        console.log(`[${i+1}/${files.length}] Generando ${pdf}...`);
        try {
            await generatePDF(html, pdf);
        } catch (e) {
            console.log(`  SKIP (${e.code || e.message})`);
        }
    }

    console.log('\nPDF generati con successo!');
    console.log('Dimensioni: 85mm x 55mm (standard europeo)');
}

main().catch(err => {
    console.error('Errore:', err.message);
    process.exit(1);
});