
# Contributing

Issues and pull requests are welcome.

Please **be nice** and read the following before contributing.

- Test before submitting pull requests - `npm test`

## Codebase Overview

Folders:
- `/src` source code
- `/tests` tests, including snapshots
- `/stories` stories for React Storybook
- `/docs` source for the documentation/demo site

### Source Code

All exports are handled in `src/index.js`.
The component styles and configuration is in `src/components.js`, which is passed to `src/create-library.js` to export the components.
The `src/create-component.js` function tags a component configuration object and returns a React styled component, adding two higher order components in the process.

### Tests

Tests are written using Ava. Please ensure to test any new code added, and update snapshots when relevant.
