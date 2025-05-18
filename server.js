import express from 'express';
import cors from 'cors';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import config from './config.js';
import handlers from './demoHandlers.js';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(config.distDir));

// Serve demo files from the root directory
app.use('/files', express.static(config.filesDir));

// Endpoint to open a local project directory or execute specific applications
app.post('/api/open', (req, res) => {
  const { path: projectPath } = req.body;
  if (!projectPath) {
    return res.status(400).json({ error: 'No path provided' });
  }
  const handler = handlers[projectPath];
  if (handler) {
    return handler(req, res);
  }
  // Default: open directory
  if (process.env.PROJECT_DOMAIN) {
    return res.json({
      success: true,
      message: 'Project Information',
      details: 'This would open the project directory on your local machine when running locally.'
    });
  } else {
    try {
      const opener = spawn(config.defaultOpenCommand, [projectPath]);
      opener.on('error', err => {
        console.error('Error opening path:', err);
        res.status(500).json({ error: 'Failed to open path' });
      });
      opener.on('close', code => {
        if (code !== 0) {
          console.error('defaultOpenCommand exited with code ' + code);
          return res.status(500).json({ error: 'Failed to open path' });
        }
      });
      return res.json({ success: true, message: 'Launched project directory' });
    } catch (err) {
      console.error('Failed to open path:', err);
      return res.status(500).json({ error: 'Failed to open path' });
    }
  }
});

// Add a catch-all route to serve the SPA for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(config.distDir, 'index.html'));
});

const PORT = process.env.PORT || 3001;
// Start server only when not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Backend listening at http://localhost:${PORT}`);
  });
}

// Import keep-alive script to prevent Glitch from sleeping
try {
  // Only load in production (Glitch)
  if (process.env.PROJECT_DOMAIN) {
    import('./keep-alive.js').then(() => {
      console.log('Keep-alive service loaded');
    }).catch(err => {
      console.error('Error loading keep-alive service:', err);
    });
  }
} catch (error) {
  console.error('Error in keep-alive import:', error);
}

// Export app for testing
export default app;
