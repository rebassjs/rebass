
# Props

Rebass components use [styled-system](https://github.com/jxnblk/styled-system) for responsive, theme-based style props.

### Width

The Flex and Box components accept a `width` prop.

```.jsx
<Box width={1/2} bg='blue'>
  Hello
</Box>
```

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
```

### Font Size

The Text component and other typographic components accept a `fontSize` prop
that makes referencing steps on the typographic scale simple and helps promote consistent design.

```.jsx
<Text fontSize={5}>
  Hello
</Text>
```

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
```

### Margin and Padding

All Rebass component use the [space](https://github.com/jxnblk/styled-system#space-responsive) utility from [styled-system](https://github.com/jxnblk/styled-system) to handle responsive margin and padding props based on a global spacing scale (`theme.space`).
The margin and padding props help promote consistency in layout
without the need to add custom margin and padding declarations throughout an application.
The margin and padding props use a shorthand syntax, similar to other OOCSS approaches and many CSS libraries.

```.jsx
<Box
  p={3}
  mx={2}
  my={4}
  color='white'
  bg='blue'>
  Hello
</Box>
```

- `m`: margin
- `mt`: margin-top
- `mr`: margin-right
- `mb`: margin-bottom
- `ml`: margin-left
- `mx`: margin-left and margin-right
- `my`: margin-top and margin-bottom
- `p` : padding
- `pt`: padding-top
- `pr`: padding-right
- `pb`: padding-bottom
- `pl`: padding-left
- `px`: padding-left and padding-right
- `py`: padding-top and padding-bottom

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

```.jsx
<Box color='white' bg='fuschia' p={3}>
  Hello
</Box>
```

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

See the [styled-system](https://github.com/jxnblk/styled-system#responsive-styles) docs for more info.

```.jsx
<Flex flexWrap='wrap'>
  <Box
    width={[ 1, 1/2 ]}
    p={2}
    color='white'
    bg='blue'>
    Hello
  </Box>
  <Box
    width={[ 1, 1/2 ]}
    p={2}
    color='white'
    bg='dark'>
    Hello
  </Box>
</Flex>
```

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

## HTML Element Prop

Each component accepts an `is` prop to change the underlying HTML element on a per-instance basis.
This is useful for ensuring semantic markup, while keeping styles decoupled.

```.jsx
<Heading
  is='h1'
  children='Top-level heading'
/>
```

```.jsx
<Button
  is='a'
  href='#!'
  children='Link Button'
/>
```

