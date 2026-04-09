import puppeteer from 'puppeteer';
import fs from 'fs';

const dir = './temporary screenshots';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/chjdo/.cache/puppeteer/chrome/win64-146.0.7680.153/chrome-win64/chrome.exe',
  args: ['--no-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3001', { waitUntil: 'networkidle2' });

await page.evaluate(() => {
  document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
});
await new Promise(r => setTimeout(r, 600));

const sections = [
  { id: '#top', name: 'hero' },
  { id: '#coffee', name: 'coffee' },
  { id: '#cheese', name: 'cheese' },
  { id: '#about', name: 'about' },
  { id: '#visit', name: 'visit' },
];

let n = 10;
for (const s of sections) {
  await page.evaluate((id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'instant' });
  }, s.id);
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: `${dir}/screenshot-${n}-${s.name}.png`, fullPage: false });
  console.log(`Saved ${s.name}`);
  n++;
}

await browser.close();
