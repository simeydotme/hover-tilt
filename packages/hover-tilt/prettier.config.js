import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseConfig = JSON.parse(readFileSync(join(__dirname, '../../.prettierrc'), 'utf-8'));

export default {
  ...baseConfig,
  tailwindStylesheet: './src/app.css'
};
