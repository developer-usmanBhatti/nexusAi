# Frontend Manager Skill

**Description:** Manage the NexusAI frontend application - build, start, stop, and modify the React app

**Version:** 1.0.0

## Commands

### start
- **Description:** Start the development server
- **Usage:** `frontend-manager start`
- **Action:** Bash command `npm run dev`

### build
- **Description:** Build the production version
- **Usage:** `frontend-manager build`
- **Action:** Bash command `npm run build`

### stop
- **Description:** Stop all running processes
- **Usage:** `frontend-manager stop`
- **Action:** Bash command `taskkill /F /IM node.exe 2>nul || taskkill /F /IM node.exe 2>nul`

### install
- **Description:** Install dependencies
- **Usage:** `frontend-manager install`
- **Action:** Bash command `npm install`

### add-component
- **Description:** Add a new React component
- **Usage:** `frontend-manager add-component <name> [type]`
- **Action:** Node script `skills/add-component.js`