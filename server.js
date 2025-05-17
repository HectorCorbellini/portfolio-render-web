import express from 'express';
import cors from 'cors';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve demo files from the root directory
app.use('/files', express.static(path.join(__dirname, 'files')));

// Endpoint to open a local project directory or execute specific applications
app.post('/api/open', (req, res) => {
  const { path: projectPath } = req.body;
  if (!projectPath) {
    return res.status(400).json({ error: 'No path provided' });
  }

  // Check if this is the ecosystem simulation project
  if (projectPath.includes('ecosystem-simulation')) {
    console.log('Handling ecosystem simulation demo request...');
    
    // Check if we're running on Glitch
    if (process.env.PROJECT_DOMAIN) {
      // On Glitch, we can't directly execute JAR files, so provide alternative feedback
      console.log('Running on Glitch, providing demo information instead of executing JAR');
      return res.json({ 
        success: true, 
        message: 'Ecosystem Simulation Demo Information', 
        details: 'This Java application simulates an ecosystem with various species and visualizes population dynamics. When running locally, this button would launch the actual application.'
      });
    } else {
      // Running locally, try to execute the JAR file
      const jarPath = path.join(__dirname, 'ecosystem-simulation.jar');
      
      try {
        const java = spawn('java', ['-jar', jarPath]);
        
        java.stdout.on('data', (data) => {
          console.log(`Ecosystem simulation stdout: ${data}`);
        });
        
        java.stderr.on('data', (data) => {
          console.error(`Ecosystem simulation stderr: ${data}`);
        });
        
        java.on('error', (err) => {
          console.error('Error executing JAR file:', err);
          res.status(500).json({ error: 'Failed to execute JAR file' });
        });
        
        java.on('close', (code) => {
          if (code !== 0) {
            console.error(`Java process exited with code ${code}`);
            return res.status(500).json({ error: 'JAR execution failed' });
          }
          console.log('JAR execution completed successfully');
        });
        
        // Respond immediately as the JAR will run in the background
        return res.json({ success: true, message: 'Ecosystem simulation launched' });
      } catch (error) {
        console.error('Failed to execute ecosystem simulation:', error);
        return res.status(500).json({ error: 'Failed to execute ecosystem simulation' });
      }
    }
  }
  
  // Check if this is the Code Processor project
  if (projectPath.includes('code-processor')) {
    console.log('Handling Code Processor demo request...');
    
    // Check if we're running on Glitch
    if (process.env.PROJECT_DOMAIN) {
      // On Glitch, we can't directly execute binaries, so provide alternative feedback
      console.log('Running on Glitch, providing demo information instead of executing binary');
      return res.json({ 
        success: true, 
        message: 'Code Processor Demo Information', 
        details: 'This Python-based application analyzes and processes source code, providing insights and transformations. When running locally, this button would launch the actual application.'
      });
    } else {
      // Running locally, try to execute the binary
      const executablePath = path.join(__dirname, 'CodeProcessor');
      
      try {
        const executable = spawn(executablePath);
        
        executable.stdout.on('data', (data) => {
          console.log(`Code Processor stdout: ${data}`);
        });
        
        executable.stderr.on('data', (data) => {
          console.error(`Code Processor stderr: ${data}`);
        });
        
        executable.on('error', (err) => {
          console.error('Error executing Code Processor:', err);
          res.status(500).json({ error: 'Failed to execute Code Processor' });
        });
        
        executable.on('close', (code) => {
          if (code !== 0) {
            console.error(`Code Processor exited with code ${code}`);
            return res.status(500).json({ error: 'Code Processor execution failed' });
          }
          console.log('Code Processor execution completed successfully');
        });
        
        // Respond immediately as the executable will run in the background
        return res.json({ success: true, message: 'Code Processor launched' });
      } catch (error) {
        console.error('Failed to execute Code Processor:', error);
        return res.status(500).json({ error: 'Failed to execute Code Processor' });
      }
    }
  }

  // Check if this is the Caesar Cipher project
  if (projectPath.includes('caesar-cipher')) {
    console.log('Handling Caesar Cipher demo request...');
    
    // Check if we're running on Glitch
    if (process.env.PROJECT_DOMAIN) {
      // On Glitch, we can't directly execute JAR files, so provide alternative feedback
      console.log('Running on Glitch, providing demo information instead of executing JAR');
      return res.json({ 
        success: true, 
        message: 'Caesar Cipher Demo Information', 
        details: 'This Java application provides encryption and decryption using the Caesar cipher method with a Swing GUI interface. When running locally, this button would launch the actual application.'
      });
    } else {
      // Running locally, try to execute the JAR file
      const jarPath = path.join(__dirname, 'CaesarCipher.jar');
      
      try {
        // Start Java application with Swing interface
        const java = spawn('java', ['-Dui.mode=gui', '-jar', jarPath]);
        
        java.stdout.on('data', (data) => {
          console.log(`Caesar Cipher stdout: ${data}`);
        });
        
        java.stderr.on('data', (data) => {
          console.error(`Caesar Cipher stderr: ${data}`);
        });
        
        java.on('error', (err) => {
          console.error('Error executing Caesar Cipher:', err);
          res.status(500).json({ error: 'Failed to execute Caesar Cipher' });
        });
        
        java.on('close', (code) => {
          if (code !== 0) {
            console.error(`Java process exited with code ${code}`);
            return res.status(500).json({ error: 'JAR execution failed' });
          }
          console.log('Caesar Cipher execution completed successfully');
        });
        
        // Respond immediately as the JAR will run in the background
        return res.json({ success: true, message: 'Caesar Cipher Swing interface launched' });
      } catch (error) {
        console.error('Failed to execute Caesar Cipher:', error);
        return res.status(500).json({ error: 'Failed to execute Caesar Cipher' });
      }
    }
  }

  // For other projects
  console.log('Handling request for other project:', projectPath);
  
  // Check if we're running on Glitch
  if (process.env.PROJECT_DOMAIN) {
    // On Glitch, we can't use xdg-open, so provide generic feedback
    console.log('Running on Glitch, providing generic project information');
    return res.json({ 
      success: true, 
      message: 'Project Information', 
      details: 'This would open the project directory on your local machine when running locally.'
    });
  } else {
    // Running locally, try to open the directory
    try {
      const opener = spawn('xdg-open', [projectPath]);
      opener.on('error', (err) => {
        console.error('Error opening path:', err);
        res.status(500).json({ error: 'Failed to open path' });
      });
      opener.on('close', (code) => {
        if (code !== 0) {
          console.error(`xdg-open exited with code ${code}`);
          return res.status(500).json({ error: 'Failed to open path' });
        }
        res.json({ success: true });
      });
    } catch (error) {
      console.error('Failed to open directory:', error);
      return res.status(500).json({ error: 'Failed to open directory' });
    }
  }
});

// Add a catch-all route to serve the SPA for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});

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
