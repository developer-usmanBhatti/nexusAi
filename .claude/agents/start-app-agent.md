# App Start Agent

**Description:** Specialized agent for starting and troubleshooting the NexusAI frontend app

## Functionality

This agent handles:
- Killing existing Node.js processes
- Creating a safe startup script with error boundary
- Starting the development server
- Providing troubleshooting guidance

## Features

- **Process Management**: Automatically kills existing node processes before startup
- **Error Boundary**: Creates a React error boundary component to catch runtime errors
- **Safe Startup**: Generates a safe startup script in `src/main-safe.jsx`
- **Auto-Refresh**: Includes a refresh button when errors occur
- **Network Access**: Provides multiple URLs for local access

## Execution Flow

1. Kill any existing node processes
2. Create startup script with error boundary
3. Start the app using Vite
4. Monitor for errors and provide status updates

## Output

- App should be available at `http://localhost:5176/`
- Alternative URL: `http://192.168.18.107:5176/`
- Provides troubleshooting tips if connection fails