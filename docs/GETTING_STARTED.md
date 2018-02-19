
# Getting Started

```sh
npm i rebass@next
```

## Provider

To ensure Rebass's theme is properly configured, use the `<Provider />` component at the root of your application.

```.jsx
<Provider>
  <Heading>Hello</Heading>
</Provider>
```

You might also want to set some global styles in your application.

```jsx
import { injectGlobal } from 'styled-components'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`
```

Import UI components from Rebass and use them to build larger components.

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
