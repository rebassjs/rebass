
<img src='site/logo.svg' width='128' height='128' />

<img src='site/test01.svg' width='128' height='128' />

# Rebass

React UI component library & design system,
built with [styled-components][sc] and [styled-system][system].

[![Build Status][badge]][travis]

[badge]: https://img.shields.io/travis/jxnblk/rebass/master.svg?style=flat-square
[travis]: https://travis-ci.org/jxnblk/rebass

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

## Features

- Kickstart your own React component library
- Responsive style props from [styled-system][system]
- Flexbox grid with [grid-styled][gs]
- Style encapsulation with [styled-components][sc]
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

- [Docs](docs)
- [Getting Started](docs/getting-started.md)
- [Props](docs/props.md)
- [Grid System](docs/grid-system.md)
- [Theming](docs/theming.md)
- [Extending](docs/extending.md)
- [Components](docs/components.md)
- [Server-Side Rendering](server-side-rendering.md)


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

[system]: https://github.com/jxnblk/styled-system
[gs]: https://github.com/jxnblk/grid-styled
[sc]: https://github.com/styled-components/styled-components

#### v1.0.7

For the previous version of Rebass see the [v1.0.7](https://github.com/jxnblk/rebass/tree/v1.0.7) branch.

---

[Contributing](.github/CONTRIBUTING.md)
|
[MIT License](.github/LICENSE.md)

