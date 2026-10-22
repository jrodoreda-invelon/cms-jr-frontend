const fs = require('fs');
const cfg = {
  API_BASE_URL: process.env.API_BASE_URL,
  MY_TOKEN: process.env.MY_TOKEN,
};
fs.writeFileSync('generate-config.js', `window.CONFIG = ${JSON.stringify(cfg)};`);