
# Contributing

Issues and pull requests are welcome.

Please **be nice** and read the following before contributing.

- Test before submitting pull requests - `npm test`

## Codebase Overview

Folders:
- `/src` source code
- `/tests` tests, including snapshots
- `/docs` source for the documentation/demo site

### Source Code

All exports are handled in `src/index.js`.
Each component is its own module in the `src/` folder.
Be sure to familiarize yourself with
[styled-system](https://github.com/jxnblk/styled-system)
before making changes.


### Tests

Tests are written using Ava. Please ensure to test any new code added, and update snapshots when relevant.
