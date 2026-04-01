#!/usr/bin/env node

import FrontendAgent from './agents/frontend-agent.js';
import StartAppAgent from './agents/start-app-agent.js';

console.log("🤖 NexusAI Frontend Agent Initialized!");

// Agent commands
const commands = {
  start: () => StartAppAgent.execute({}),
  help: () => {
    console.log(`
🚀 NexusAI Frontend Agent Commands:

1. Start the app:
   node agent.js start

2. Get help:
   node agent.js help

3. Check status:
   node agent.js status

Features:
- Auto-detect and fix issues
- Start development server with Vite
- Provide multiple URLs to try
- Error handling and recovery
- Safe startup with error boundary
`);
  },
  status: () => {
    console.log("✅ NexusAI Frontend Agent is ready!");
    console.log("📁 Project location:", process.cwd());
    console.log("🎯 Ready to start the application");
  }
};

// Handle command line arguments
const command = process.argv[2] || 'help';

if (commands[command]) {
  commands[command]();
} else {
  console.log(`❌ Unknown command: ${command}`);
  console.log("Use 'node agent.js help' for available commands");
}