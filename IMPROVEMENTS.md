# IMPROVEMENTS

**Date:** 2025-05-17  
**Time:** 01:43:44 -03:00

This document outlines the recent enhancements made to the portfolio project:

- **Updated demoPath values** in `src/data/projects.ts` to point to local directories under `/root/EMPREND/projects`.
- **Created backend** (`server.js`) using Express and CORS:
  - Exposed POST `/api/open` endpoint that invokes `xdg-open` to launch the specified project folder.
- **Installed dependencies**: `express`, `cors`.
- **Enhanced frontend logic** in `src/components/Projects/ProjectsSection.tsx`:
  - Replaced placeholder `launchDemo` with an async function that POSTs to `http://localhost:3001/api/open`.
- **Added npm script** in `package.json`:
  - `server` to run the Express backend

## Latest Improvements (2025-05-17)

### Enhanced Project Demo Functionality

The portfolio application has been upgraded to provide a more interactive experience by directly launching project demos instead of just opening project directories. The following improvements have been implemented:

#### 1. Ecosystem Simulation Project

- **Feature**: When clicking the "Launch Demo" button for the Ecosystem Simulation project, the application now executes a Java JAR file directly.
- **Implementation Details**:
  - Modified the `/api/open` endpoint in `server.js` to detect requests for the ecosystem simulation project
  - Added logic to execute `/root/EMPREND/Bolt-Portfolio/portfo/ecosystem-simulation.jar` using Java
  - Configured the server to run the JAR file in the background and immediately respond to the frontend
  - Added logging for stdout and stderr to facilitate debugging

#### 2. Code Processor Project

- **Feature**: When clicking the "Launch Demo" button for the Code Processor project, the application now executes a native executable.
- **Implementation Details**:
  - Enhanced the `/api/open` endpoint to detect requests for the code processor project
  - Added logic to execute `/root/EMPREND/Bolt-Portfolio/portfo/CodeProcessor` executable
  - Implemented automatic permission setting using `chmod +x` to ensure the file is executable
  - Configured the server to run the executable in the background and immediately respond to the frontend
  - Added comprehensive logging for process output and errors

#### 3. Architecture Improvements

- **Conditional Execution Logic**: The server now intelligently determines how to handle each project based on its type:
  - Ecosystem Simulation → Executes JAR file
  - Code Processor → Executes native executable
  - Other projects → Opens their directories using xdg-open (original behavior)

- **Error Handling**: Enhanced error handling for all execution paths with appropriate error messages and status codes

### How to Run the Application

1. Start the backend server: `node server.js` (runs on port 3001)
2. Start the frontend development server: `npm run dev` (runs on port 5173)
3. Access the portfolio at http://localhost:5173
4. Click on project cards to view details and launch demos
