import { spawn } from 'child_process';
import path from 'path';
import config from './config.js';

function launchJavaApp(jarFileName, args = []) {
  return (req, res) => {
    console.log(`Handling demo request for ${jarFileName}`);
    if (process.env.PROJECT_DOMAIN) {
      return res.json({
        success: true,
        message: `${jarFileName} Demo Information`,
        details: `When running locally, this would launch the ${jarFileName}`
      });
    }

    const jarPath = path.join(config.appsDir, jarFileName);
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
    if (process.env.PROJECT_DOMAIN) {
      return res.json({
        success: true,
        message: `${executableName} Demo Information`,
        details: `When running locally, this would launch the ${executableName}`
      });
    }

    const execPath = path.join(config.appsDir, executableName);
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
