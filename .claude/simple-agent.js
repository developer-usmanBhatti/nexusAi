#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("🤖 NexusAI Frontend Agent - Starting App...");

// Kill existing processes
console.log("🔄 Clearing existing processes...");
try {
  spawn('taskkill', ['/F', '/IM', 'node.exe'], { stdio: 'pipe' }).on('close', () => {
    console.log("✅ Cleared existing processes");
    startServer();
  });
} catch (e) {
  console.log("ℹ️ No processes to clear");
  startServer();
}

function startServer() {
  // Change to correct directory and start
  console.log("📁 Using project directory:", process.cwd());

  // Start with Vite
  console.log("🚀 Starting development server...");
  console.log("📡 Please wait for the server to start...");

  const child = spawn('cmd.exe', ['/c', 'npx', 'vite', '--host', '--port', '5176'], {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  child.on('close', (code) => {
    if (code === 0) {
      console.log("\n✅ App started successfully!");
      console.log("🌐 Open your browser to: http://localhost:5176/");
      console.log("💡 If it doesn't work, try: http://192.168.18.107:5176/");
    } else {
      console.log("\n❌ Failed to start app");
    }
  });
}