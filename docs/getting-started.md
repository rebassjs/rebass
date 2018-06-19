---
layout: fullwidth
---

# Getting Started

```sh
npm i rebass@next
```

## Provider

To ensure Rebass's theme is properly configured, use the `<Provider />` component at the root of your application.
The `Provider` component accepts a `theme` props for setting a [custom theme][theming].

```.jsx
<Provider>
  <Heading>Hello</Heading>
</Provider>
```

You might also want to set some global styles in your application.
The [grid-styled][grid-styled] `Box` and `Flex` components depend on setting `box-sizing: border-box` to work as expected.

```jsx
import { injectGlobal } from 'styled-components'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`
```

Import UI components directly from Rebass and use them to build larger components.

```js
import {
  Card,
  Box,
  BackgroundImage,
  Subhead,
  Small
} from 'rebass'
```

```.jsx
<Box width={256}>
  <Card>
    <BackgroundImage src={photo} />
    <Box p={2}>
      <Subhead>Card</Subhead>
      <Small>Small meta text</Small>
    </Box>
  </Card>
</Box>
```

Alternatively, use Rebass components as the starting point for custom UI components.

```jsx
import styled from 'styled-components'
import { Button as Base } from 'rebass'

const Button = styled(Base)`
  &:hover {
    background-color: ${props => props.theme.colors.navy};
  }
`

export default Button
```

[theming]: theming.md
[grid-styled]: https://github.com/jxnblk/grid-styled
