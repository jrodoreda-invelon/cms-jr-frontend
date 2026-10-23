const fs = require('fs');

fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist');

for (const f of ['index.html', 'app.js', 'style.css']) {
  fs.copyFileSync(f, `dist/${f}`);
}

const cfg = {
  API_BASE_URL: process.env.API_BASE_URL,
  MY_TOKEN: process.env.MY_TOKEN,
};
fs.writeFileSync('dist/config.js', `window.CONFIG = ${JSON.stringify(cfg)};`);