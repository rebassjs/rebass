
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

## Using theme as a separate file

If you want to separate the theme into its own file, create new file (`theme.js` for example) and put the object inside, but replace `const theme = ` with `export default` such as

```js
// exporting the theme to be able to import it to your app's main file (where the <Provider> component lives)
export default {
  breakpoints: [
    // ...
  ],
  space: [
    // ...
  ],
  fontSizes: [
    // ...
  ],
  weights: [
    // ...
  ],
  colors: {
    // ...
  },
  radius: 4,
  font: '-apple-system, BlinkMacSystemFont, sans-serif',
  monospace: '"SF Mono", "Roboto Mono", Menlo, monospace'
}
```

then import it to App.js (or wherever your `<Provider>` lives):

```js
import myTheme from './theme.js';
```

and finally, feed it into `<Provider>`:

```js
class App extends Component {
	render() {
	 	return (
			<Provider theme={myTheme}>
				...
			</Provider>
		);
	}
}
```
