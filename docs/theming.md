
# Theming

Rebass's core theme includes breakpoints, a spacing scale,
a typographic scale, fonts, font weights, border radii, and colors, all of which can be configured with the `<Provider />` component.

To customize the underlying theme, pass a `theme` object to the `<Provider />` component.

```.jsx
<Provider
  theme={{
    fonts: {
      sans: '"Avenir Next", Helvetica, sans-serif',
    },
    fontSizes: [
      12, 16, 24, 36, 48, 72
    ]
  }}>
  <Heading fontSize={[ 2, 3, 4, 5 ]}>
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
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
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
  weights: {
    normal: 400,
    bold: 700
  },
  colors: {
    black: '#000',
    white: '#fff',
    ...etc
  },
  radii: [ 0, 2, 4 ]
}
```

## DarkMode

Rebass includes a `<DarkMode />` component for inverting the luminance of colors in a theme.

```.jsx
<Box>
  <Heading mb={3}>Normal Theme</Heading>
  <DarkMode p={3}>
    <Heading>Dark Mode</Heading>
    <Box mb={3}>
      <Label htmlFor='hi'>Hi</Label>
      <Input id='hi' defaultValue='Hello' />
    </Box>
    <Button mr={3}>Beep</Button>
    <ButtonOutline>Boop</ButtonOutline>
  </DarkMode>
</Box>
```

See the [styled-system][system] docs for more about how Rebass style props integrate with the theme.

[system]: https://github.com/jxnblk/styled-system
