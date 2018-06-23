
<img src='docs/logo.svg' width='128' height='128' />

# Rebass

React UI component library & design system,
built with [styled-system][system],
with support for
[styled-components][sc] & [emotion][emotion].

[![Build Status][badge]][travis]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]

[badge]: https://img.shields.io/travis/jxnblk/rebass.svg?style=flat-square
[travis]: https://travis-ci.org/jxnblk/rebass
[coverage-badge]: https://img.shields.io/codecov/c/github/jxnblk/rebass.svg?style=flat-square
[coverage]: https://codecov.io/github/jxnblk/rebass

[downloads-badge]: https://img.shields.io/npm/dw/rebass.svg?style=flat-square
[version-badge]: https://img.shields.io/npm/v/rebass.svg?style=flat-square
[npm]: https://npmjs.com/package/rebass

http://jxnblk.com/rebass

```sh
npm i rebass@next
```

Rebass is a library of highly-composable, primitive UI components for React,
built with styled-components to keep styles isolated and reduce the need to write custom CSS in your application.
Based upon a configurable design system,
Rebass‘s props API makes building consistent, responsive web apps simpler and faster.


## Getting Started

```jsx
import React from 'react'
import { Provider, Heading, Button } from 'rebass'

const App = props => (
  <Provider>
    <Heading>Hello</Heading>
    <Button>Rebass</Button>
  </Provider>
)
```

To use Rebass with [emotion][emotion], import from `rebass/emotion`:

```js
import * as Rebass from 'rebass/emotion'
```

## Features

- Kickstart your own React component library
- Responsive style props from [styled-system][system]
- Flexbox grid with [grid-styled][gs]
- Support for [styled-components][sc] & [emotion][emotion]
- Functional stateless UI components
- Configurable theming
- Extensible base components
- Design-system based consistency
- Built for responsive web design


> "One of the best React component libs out there"
> – [Max Stoiber](https://twitter.com/mxstbr/status/882657561111080960)

> "Rebass is the Bootstrap of React."
> – [Jori Lallo](https://twitter.com/jorilallo/status/882990343225868289)

> "A whopper component library built on styled-components. Responsive, systematic, scalable...the business!"
> – [Colm Tuite](https://twitter.com/colmtuite/status/882715087936606210)


## Documentation

- [Docs](https://jxnblk.com/rebass)
- [Getting Started](https://jxnblk.com/rebass/getting-started)
- [Props](https://jxnblk.com/rebass/props)
- [Grid System](https://jxnblk.com/rebass/grid-system)
- [Theming](https://jxnblk.com/rebass/theming)
- [Extending](https://jxnblk.com/rebass/extending)
- [Components](https://jxnblk.com/rebass/components)
- [Server-Side Rendering](https://jxnblk.com/rebass/server-side-rendering)

## CodeSandbox

Try it out:

https://codesandbox.io/s/github/jxnblk/rebass/tree/master/examples/sandbox

### Architectural Approach

Rebass is built around a component architectural approach inspired by Dan Abramov’s
[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ah4312963),
where presentational components are the only ones that encapsulate styles and contain no application logic,
and container components do not contain any styles or DOM markup and handle all the application logic.

Rebass only contains presentational components,
which means controlling things like progressive disclosure mechanisms
or dropdown menus should be handled at a higher level in container components.
Therefore, Rebass itself does not require any client-side JavaScript,
is well suited to server-side rendering,
and can fit into virtually any higher level application architecture.

See [Patterns for Style Composition in React](http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react/)
for more on some of the thought behind Rebass.


### Related

- [styled-system][system]
- [grid-styled][gs]
- [styled-components][sc]
- [emotion][emotion]

[system]: https://github.com/jxnblk/styled-system
[gs]: https://github.com/jxnblk/grid-styled
[sc]: https://github.com/styled-components/styled-components
[emotion]: https://github.com/emotion-js/emotion

#### v1.0.7

For the previous version of Rebass see the [v1.0.7](https://github.com/jxnblk/rebass/tree/v1.0.7) branch.

---

[Contributing](.github/CONTRIBUTING.md)
|
[MIT License](.github/LICENSE.md)

