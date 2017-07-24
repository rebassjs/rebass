# Rebass

Functional React UI component library, built with [styled-components](https://www.styled-components.com)

[![Build Status](https://travis-ci.org/jxnblk/rebass.svg?branch=master)](https://travis-ci.org/jxnblk/rebass)

http://jxnblk.com/rebass

```sh
npm i rebass
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

- Functional stateless UI components
- Style encapsulation with styled-components
- No external CSS dependencies
- Configurable theming
- Extensible base components
- Design-system based consistency
- Built for responsive web design
- Reduces the need to write custom CSS


## Architectural Approach

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


## Base Props

All Rebass components are wrapped in a higher order component that handles
design-system-based responsive style props using [styled-system](https://github.com/jxnblk/styled-system).

### Width

```jsx
// Numbers from 0–1 are converted to percentage widths
// e.g. width 50%
<Text width={1/2} />

// Numbers greater than 1 are converted to pixels
<Text width={256} />

// Strings can be used for other values
<Text width='32em' />

// Arrays can be used for mobile-first responsive styles
<Text
  width={[
    1,    // 100% width at the smallest breakpoint
    1/2,  // 50% width at the next breakpoint
    1/4   // 25% width at the next
  ]}
/>

// The shorthand `w` prop can be used instead of `width`
<Text w={1/2} />
```

### Font Size

The `fontSize` prop makes referencing steps on the typographic scale
simple and helps promote consistent design.

```jsx
// Numbers are used to reference steps on the typographic scale
// i.e. the `theme.fontSizes` array
<Text fontSize={3} />

// Numbers greater than the length of the typographic scale
// are converted to pixels
<Text fontSize={18} />

// Strings can be used for other values
<Text fontSize='3em' />

// Arrays can be used for mobile-first responsive styles
<Text fontSize={[ 3, 4, 5 ]} />

// The shorthand `f` prop can be used instead of `fontSize`
<Text f={3} />
```

### Margin and Padding

The margin and padding props make referencing steps on the spacing scale
(i.e. the `theme.space` array) simple and help promote consistency in
layout design without the need to add custom margin and padding declarations throughout an application.
The margin and padding props use a shorthand syntax.

Prop | Meaning
---|---
`m`  | margin
`mt` | margin-top
`mr` | margin-right
`mb` | margin-bottom
`ml` | margin-left
`mx` | margin-left and margin-right
`my` | margin-top and margin-bottom
`p`  | padding
`pt` | padding-top
`pr` | padding-right
`pb` | padding-bottom
`pl` | padding-left
`px` | padding-left and padding-right
`py` | padding-top and padding-bottom

```jsx
// Numbers reference steps on the spacing scale
// e.g. 8px
<Text m={2} />

// Numbers greater than the length of `theme.space.length` are converted to pixels
<Text my={256} />

// Negative values can be used to add negative margins
<Text mx={-2} />

// Strings can be used for other values
<Text mx='auto' />

// Arrays can be used for mobile-first responsive styles
<Text m={[ 0, 1, 2 ]} />
```

### Colors

The `color` and `bg` props make using colors from the color palette simple to help promote design consistency.

```jsx
// Keys reference values in the color palette object
<Text color='blue' />

// Background color can be set with the `bg` prop
<Button bg='red' />

// Values that do not map to a key in `theme.colors` can be used
<Button bg='tomato' />

// Arrays can be used to change colors responsively
<Text color={[ 'blue', 'green' ]} />
```

### Responsive Styles

All of the core props above accept arrays as values to set mobile-first responsive styles.
The first value is not scoped to a media query and applies to all breakpoints.
Each value after the first corresponds to a media query derived from `theme.breakpoints`.

```jsx
<Text
  width={[
    1,    // 100% width at the smallest breakpoint
    1/2,  // 50% width at the next breakpoint
    null, // null skips a breakpoint
    1/4   // 25% width at the next
  ]}
/>
```

## `is` Prop

Each component accepts an `is` prop to change the underlying HTML element on a per-instance basis.
This is useful for ensuring semantic markup, while keeping styles decoupled.

```jsx
<Heading
  is='h1'
  children='Top-level heading'
/>

<Button
  is='a'
  href='#!'
  children='Link Button'
/>
```

## Components

### `<Provider />`

The `<Provider />` component is a wrapper around styled-components' [ThemeProvider](https://www.styled-components.com/docs/advanced#theming).
It also sets a default font-family value based on `theme.font`.

The Provider should be wrapped around a top-level component to ensure Rebass works as expected.

```jsx
import React from 'react'
import { Provider } from 'rebass'
import Page from './Page'

const App = props => (
  <Provider>
    <Page />
  </Provider>
)
```

You'll likely want to add additional global styles that set `box-sizing: border-box` in your application.
This can be done with styled-components [`injectGlobal`](https://www.styled-components.com/docs/api#injectglobal):

```jsx
import { injectGlobal } from 'styled-components'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`
```

### UI Components

For an interactive demo of all Rebass components, see http://jxnblk.com/rebass


## Component-Specific Props

Some components accept other props for styling.

### `<Text />`

The `<Text />` component, which is also the base for `<Heading />`, `<Subhead />`, `<Lead />`, and `<Small />`,
accepts several typographic style props.

- `left` (boolean) text-align: left
- `center` (boolean) text-align: center
- `right` (boolean) text-align: right
- `justify` (boolean) text-align: justify
- `bold` (boolean) font-weight: theme.weights[1]
- `caps` (boolean) text-transform: uppercase; letter-spacing: .2em

### `<Border />`

- `borderWidth` (number) pixel value for border width
- `top` (boolean) border-top
- `right` (boolean) border-right
- `bottom` (boolean) border-bottom
- `left` (boolean) border-left
- `color` (string) sets *only* the border color

### `<Container />`

- `maxWidth` (number) the maximum width of the container element

### `<NavLink />`, `<TabItem />`, `<DotButton />`

- `active` (boolean) adjusts style for an active state

### `<Banner />`

- `backgroundImage` (string) URL for a background image

### `<BackgroundImage />`

- `ratio` (number) converted into a percentage to maintain aspect ratio

### `<Avatar />`

- `size` (number) pixel width and height

### `<Fixed />` and `<Absolute />`

Both components accept props to control positioning. The margin and padding props can be used to control distance from the edge of a container.

- `top` (boolean) top: 0
- `right` (boolean) right: 0
- `bottom` (boolean) bottom: 0
- `left` (boolean) left: 0
- `z` (number) z-index


## Grid Styled

For convenience, the [Grid Styled](http://jxnblk.com/grid-styled) `<Flex />` and `<Box />` components are included in Rebass
to handle most page layout needs.

```jsx
import { Flex, Box } from 'rebass'
```

## Configuration

Rebass’s core design system includes breakpoints, a spacing scale,
a typographic scale, fonts, font weights, border radius, and a color palette –
all of which can be configured with the `<Provider />` component.

```jsx
import React from 'react'
import { Provider } from 'rebass'

const theme = {
  breakpoints: [
    // min-width breakpoints in ems
    40, 52, 64
  ],
  space: [
    0, 6, 12, 18, 24, 30, 36
  ],
  fontSizes: [
    12, 16, 18, 24, 36, 48, 72
  ],
  weights: [
    400, 600
  ],
  colors: {
    black: '#111',
    white: '#fff',
    blue: '#07c'
  },
  font: 'Georgia, serif',
  monospace: '"Roboto Mono", Menlo, monospace',
  radius: 2
}

const App = props => (
  <Provider theme={theme}>
    <Heading>Hello</Heading>
  </Provider>
)
```

## Customizing Components

Rebass components can be completely customized using styled-components.

```jsx
import styled from 'styled-components'
import { Button } from 'rebass'

const CustomButton = styled(Button)`
  border: 1px solid rgba(0, 0, 0, .25);
  background-image: linear-gradient(transparent, rgba(0, 0, 0, .125));
  box-shadow: 0 0 4px rgba(0, 0, 0, .25)
`
```

## Server-Side Rendering

Rebass uses styled-components for styling.
The styled-components documentation explains how to handle
[Server-Side Rendering](https://www.styled-components.com/docs/advanced#server-side-rendering).

### Related

- [styled-system](https://github.com/jxnblk/styled-system)
- [grid-styled](https://github.com/jxnblk/grid-styled)
- [palx](https://github.com/jxnblk/palx)
- [styled-components](https://github.com/styled-components/styled-components)

[MIT License](.github/LICENSE.md)

