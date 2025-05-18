import path from 'path';
import { fileURLToPath } from 'url';

// Resolve directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base project directory
const baseDir = __dirname;
// Directory for demo applications
const appsDir = path.join(baseDir, 'apps');
// Directory for built frontend assets
const distDir = path.join(baseDir, 'dist');
// Directory for serving static files
const filesDir = path.join(baseDir, 'files');
// Default command to open paths
const defaultOpenCommand = 'xdg-open';

// Demo execution configuration
const demos = {
  'ecosystem-simulation': { type: 'java', fileName: 'ecosystem-simulation.jar', args: [] },
  'code-processor': { type: 'exec', fileName: 'CodeProcessor' },
  'caesar-cipher': { type: 'java', fileName: 'CaesarCipher.jar', args: ['-Dui.mode=gui'] }
};

export default { baseDir, appsDir, distDir, filesDir, defaultOpenCommand, demos };
