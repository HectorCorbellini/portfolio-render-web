import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import config from './config.js';

function launchJavaApp(jarFileName, args = []) {
  return (req, res) => {
    console.log(`Handling demo request for ${jarFileName}`);
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Is Vercel:', !!process.env.VERCEL);
    console.log('Is Vercel ENV:', !!process.env.VERCEL_ENV);
    console.log('Current directory:', process.cwd());
    if (process.env.PROJECT_DOMAIN || process.env.VERCEL || process.env.VERCEL_ENV || process.env.RENDER_ENV) {
      console.log('Running in cloud environment, returning demo info');
      return res.json({
        success: true,
        message: `${jarFileName} Demo Information`,
        details: `This demo is only available when running locally`
      });
    }

    const jarPath = path.join(config.appsDir, jarFileName);
    console.log('Jar path:', jarPath);
    console.log('Checking if jar exists:', fs.existsSync(jarPath));
    try {
      const java = spawn('java', [...args, '-jar', jarPath]);
      java.stdout.on('data', data => console.log(`${jarFileName} stdout: ${data}`));
      java.stderr.on('data', data => console.error(`${jarFileName} stderr: ${data}`));
      java.on('error', err => {
        console.error(`Error executing ${jarFileName}:`, err);
        res.status(500).json({ error: `Failed to execute ${jarFileName}` });
      });
      java.on('close', code => {
        if (code !== 0) console.error(`${jarFileName} exited with code ${code}`);
      });
      return res.json({ success: true, message: `${jarFileName} launched` });
    } catch (error) {
      console.error(`Failed to execute ${jarFileName}:`, error);
      return res.status(500).json({ error: `Failed to execute ${jarFileName}` });
    }
  };
}

function launchExecutable(executableName) {
  return (req, res) => {
    console.log(`Handling demo request for ${executableName}`);
    console.log('Environment:', process.env.NODE_ENV);
    console.log('Is Vercel:', !!process.env.VERCEL);
    console.log('Is Vercel ENV:', !!process.env.VERCEL_ENV);
    console.log('Current directory:', process.cwd());
    if (process.env.PROJECT_DOMAIN || process.env.VERCEL || process.env.VERCEL_ENV || process.env.RENDER_ENV) {
      console.log('Running in cloud environment, returning demo info');
      return res.json({
        success: true,
        message: `${executableName} Demo Information`,
        details: `This demo is only available when running locally`
      });
    }

    const execPath = path.join(config.appsDir, executableName);
    console.log('Executable path:', execPath);
    console.log('Checking if executable exists:', fs.existsSync(execPath));
    try {
      const proc = spawn(execPath);
      proc.stdout.on('data', data => console.log(`${executableName} stdout: ${data}`));
      proc.stderr.on('data', data => console.error(`${executableName} stderr: ${data}`));
      proc.on('error', err => {
        console.error(`Error executing ${executableName}:`, err);
        res.status(500).json({ error: `Failed to execute ${executableName}` });
      });
      proc.on('close', code => {
        if (code !== 0) console.error(`${executableName} exited with code ${code}`);
      });
      return res.json({ success: true, message: `${executableName} launched` });
    } catch (error) {
      console.error(`Failed to execute ${executableName}:`, error);
      return res.status(500).json({ error: `Failed to execute ${executableName}` });
    }
  };
}

const handlers = {
  'ecosystem-simulation': launchJavaApp('ecosystem-simulation.jar'),
  'code-processor': launchExecutable('CodeProcessor'),
  'caesar-cipher': launchJavaApp('CaesarCipher.jar', ['-Dui.mode=gui']),
};

export default handlers;
