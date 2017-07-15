
# Props

All Rebass components are wrapped in a higher order component that handles
design-system-based responsive style props using [styled-system](https://github.com/jxnblk/styled-system).

```live
<Box bg='tomato'>Hello</Box>
```

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

