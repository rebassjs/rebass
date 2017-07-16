
# Theming

Rebass's core design system includes breakpoints, a spacing scale,
a typographic scale, fonts, font weights, border radius, and a color palette, all of which can be configured with the `<Provider />` component.

To customize the underlying theme, pass a `theme` object to the `<Provider />` component.

```.jsx
<Provider
  theme={{
    font: '"Avenir Next", Helvetica, sans-serif',
    fontSizes: [
      12, 16, 24, 36, 48, 72
    ]
  }}>
  <Heading f={[ 2, 3, 4, 5 ]}>
    Hello
  </Heading>
</Provider>
```

The theme object has the following shape. Any custom values passed to the Provider component will be merged with the defaults.

```js
// Default values
const theme = {
  breakpoints: [
    32,
    48,
    64,
    80
  ],
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
  ],
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    72,
    96
  ],
  weights: [
    400,
    700
  ],
  colors: {
    black: '#000',
    white: '#fff',
    ...palxColors
  },
  radius: 4,
  font: '-apple-system, BlinkMacSystemFont, sans-serif',
  monospace: '"SF Mono", "Roboto Mono", Menlo, monospace'
}
```
