import { copyFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Script is in apps/docs/scripts/, so go up 3 levels to reach monorepo root
const rootDir = join(__dirname, '../../..');
const sourceFile = join(rootDir, 'packages/hover-tilt/dist/hover-tilt.js');
const destDir = join(__dirname, '../public');
const destFile = join(destDir, 'hover-tilt.js');

try {
  // Ensure public directory exists
  mkdirSync(destDir, { recursive: true });

  // Copy the file
  copyFileSync(sourceFile, destFile);
  console.log(`✓ Copied ${sourceFile} to ${destFile}`);
} catch (error) {
  console.error('Error copying Web Component file:', error.message);
  process.exit(1);
}
