
<img src='https://rebassjs.org/logo.svg' width='128' height='128' />

# Rebass

React primitive UI components built with [styled-system][].
https://rebassjs.org

[![Build Status][badge]][travis]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]
[![MIT License][license-badge]](LICENSE.md)

[badge]: https://flat.badgen.net/travis/rebassjs/rebass/master
[travis]: https://travis-ci.org/rebassjs/rebass
[coverage-badge]: https://flat.badgen.net/codecov/c/github/rebassjs/rebass
[coverage]: https://codecov.io/github/rebassjs/rebass

[downloads-badge]: https://flat.badgen.net/npm/dw/rebass
[version-badge]: https://flat.badgen.net/npm/v/rebass
[license-badge]: https://flat.badgen.net/badge/license/MIT/blue
[npm]: https://npmjs.com/package/rebass

```sh
npm i rebass
```

**Note:** Rebass v3 is intended for use with styled-components v4. Some features may not work with previous versions.

## Getting Started

```jsx
import React from 'react'
import { Box, Heading, Button } from 'rebass'

export default props =>
  <Box>
    <Heading>Hello</Heading>
    <Button>Rebass</Button>
  </Box>
```

### Emotion

To use Rebass with [emotion][], install and use the `@rebass/emotion`

```sh
npm i @rebass/emotion @emotion/core @emotion/styled
```

## Features

- 8 core UI components to serve as the basis for design systems
- Super small (~1KB)
- Responsive, themeable style props from [styled-system][]
- Flexbox grid with the Box and Flex components
- Extensible base components
- Design-system based consistency
- Built for responsive web design


> "One of the best React component libs out there"
> – [Max Stoiber](https://twitter.com/mxstbr/status/882657561111080960)

> "Rebass is the Bootstrap of React."
> – [Jori Lallo](https://twitter.com/jorilallo/status/882990343225868289)

> "A whopper component library built on styled-components. Responsive, systematic, scalable...the business!"
> – [Colm Tuite](https://twitter.com/colmtuite/status/882715087936606210)

## Principles

Rebass is built with the following principles in mind.

- **Minimal**
- **Useful**
- **Unopinionated**
- **Flexible**
- **Consistent**
- **Extensible**
- **Themeable**
- **Do one thing well**

See [Patterns for Style Composition in React](http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react/)
for more on some of the thought behind Rebass.

## Documentation

- [Docs](https://rebassjs.org)
- [Getting Started](https://rebassjs.org/getting-started)
- [Props](https://rebassjs.org/props)
- [Extending](https://rebassjs.org/extending)
- [Theming](https://rebassjs.org/theming)
- [Box](https://rebassjs.org/Box)
- [Flex](https://rebassjs.org/Flex)
- [Text](https://rebassjs.org/Text)
- [Heading](https://rebassjs.org/Heading)
- [Button](https://rebassjs.org/Button)
- [Link](https://rebassjs.org/Link)
- [Image](https://rebassjs.org/Image)
- [Card](https://rebassjs.org/Card)

## CodeSandbox

Try it out:
https://codesandbox.io/s/github/rebassjs/rebass/tree/master/examples/sandbox-v3


### Related

- [styled-system][]
- [Rebass Grid][]
- [styled-components][]
- [emotion][]

[styled-system]: https://github.com/jxnblk/styled-system
[Rebass Grid]: https://github.com/rebassjs/grid
[styled-components]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion

#### Previous Versions

- [v2.3.2](https://github.com/rebassjs/rebass/tree/v2) – [Docs for Rebass v2](https://rebass-v2.now.sh)
- [v1.0.7](https://github.com/rebassjs/rebass/tree/v1.0.7)

---

[Contributing](CONTRIBUTING.md)
|
[MIT License](LICENSE.md)

