
# Rebass

React UI component library & design system,
built with [styled-system][system],
with support for
[styled-components][sc] & [emotion][emotion].

[![Build Status][badge]][travis]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]
[![MIT License][license-badge]](LICENSE.md)

[badge]: https://flat.badgen.net/travis/rebassjs/rebass
[travis]: https://travis-ci.org/rebassjs/rebass
[coverage-badge]: https://badgen.net/codecov/c/github/rebassjs/rebass
[coverage]: https://codecov.io/github/rebassjs/rebass

[downloads-badge]: https://flat.badgen.net/npm/dw/rebass
[version-badge]: https://flat.badgen.net/npm/v/rebass/next
[license-badge]: https://flat.badgen.net/badge/license/MIT/blue
[npm]: https://npmjs.com/package/rebass

https://rebassjs.org

```sh
npm i rebass@next
```

## Getting Started

```jsx
import React from 'react'
import { Heading, Button } from 'rebass'

export default props =>
  <div>
    <Heading>Hello</Heading>
    <Button>Rebass</Button>
  </div>
```

To use Rebass with [emotion][emotion], import from `rebass/emotion`:

```js
import { Box } from 'rebass/emotion'
```

## Features

- 8 core UI components to serve as the basis for design systems
- Super small (~1KB)
- Responsive, themeable style props from [styled-system][system]
- Flexbox grid with the Box and Flex components
- Support for [styled-components][sc] & [emotion][emotion]
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

## CodeSandbox

Try it out:
https://codesandbox.io/s/github/rebassjs/rebass/tree/master/examples/sandbox


### Related

- [styled-system][system]
- [Rebass Grid][]
- [styled-components][sc]
- [emotion][emotion]

[system]: https://github.com/jxnblk/styled-system
[Rebass Grid]: https://github.com/rebassjs/grid
[sc]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion

#### Previous Versions

- [v2.3.2](https://github.com/rebassjs/rebass/tree/v2) – [Docs for Rebass v2](https://rebass-v2.now.sh)
- [v1.0.7](https://github.com/rebassjs/rebass/tree/v1.0.7)

---

[Contributing](.github/CONTRIBUTING.md)
|
[MIT License](.github/LICENSE.md)

