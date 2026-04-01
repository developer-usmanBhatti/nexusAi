# Component Generator Skill

**Description:** Generate UI components with best practices, TypeScript support, and responsive design

**Version:** 1.0.0

## Commands

### generate-component
- **Description:** Generate a new UI component with TypeScript and proper structure
- **Usage:** `component-generator generate --type 'button' --framework 'react' --styled-components`
- **Action:** Node script `skills/component-generator.js`

### create-storybook
- **Description:** Create Storybook stories and documentation for components
- **Usage:** `component-generator create-storybook --component-path 'src/components/Button'`
- **Action:** Node script `skills/component-generator.js`

### add-variants
- **Description:** Add responsive and state variants to existing components
- **Usage:** `component-generator add-variants --component 'Card' --variants 'mobile,tablet,desktop'`
- **Action:** Node script `skills/component-generator.js`