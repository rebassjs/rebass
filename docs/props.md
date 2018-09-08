
# Props

## Styled System

Rebass components use [styled-system][system] for responsive, theme-based style props.

## Margin and Padding

All Rebass component use the [space][space] utility from [styled-system][system] to handle responsive margin and padding props based on a global spacing scale (`theme.space`).
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

## Colors

All Rebass components use [styled-system's][system] [color][color] function to add the `color` and `bg` props.
The `color` and `bg` props make using colors from the color palette simple to help promote design consistency.

The color values can be defined in the `theme.colors` object.

```.jsx
<Box color='white' bg='fuchsia' p={3}>
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

## Responsive Styles

Many Rebass props accept arrays as values to set mobile-first responsive styles.
The first value is not scoped to a media query and applies to all breakpoints.
Each value after the first corresponds to a media query derived from `theme.breakpoints`.

See the [styled-system][responsive] docs for more info.

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

## `css` prop

All Rebass components include [@rebass/components][]’ `css` prop,
which gives you low-level access to apply any CSS to a component.
This works well as an escape hatch for one-off styles or as another way to extend Rebass components.

```jsx
// example of using the `css` prop
const GrowingButton = props =>
  <Button
    {...props}
    css={{
      transition: 'transform .1s ease-out',
      '&:hover': {
        transform: 'scale(1.1)'
      }
    }}
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

## Component-Specific Props

Refer to the [component documentation](components.md) for information on component-specific props.

[system]: https://github.com/jxnblk/styled-system
[space]: https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space-responsive
[color]: https://github.com/jxnblk/styled-system/blob/master/docs/api.md#color-responsive
[responsive]: https://github.com/jxnblk/styled-system/blob/master/docs/responsive-styles.md
[@rebass/components]: https://github.com/rebassjs/components
