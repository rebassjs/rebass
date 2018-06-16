
## v2

Refactored code base, using the latest styled-system

- [styled-system](https://github.com/jxnblk/styled-system) v2
- [grid-styled](https://github.com/jxnblk/grid-styled) v2
- Removes custom HOC
- Removes createLibrary function
- Moves components to separate modules
- Uses [system-components](https://github.com/jxnblk/styled-system/tree/master/system-components)
- Removes Palx dependency
- Updates docs site
- Adds support for [emotion][emotion]

### Breaking Changes

- Some components have been renamed:
  - TabItem -> Tab
  - DotButton -> Dot
  - PanelHeader -> Panel.Header
  - PanelFooter -> Panel.Footer
- Some components have been removed:
  - ScrollCarousel
  - CarouselSlide
  - Star
- Some utilities have been removed:
  - `util`
  - `hoc`
  - `createComponent`
  - `createLibrary`
- The default theme has changed to match styled-system
  - The `colors` object no longer uses Palx
  - Array color values have been removed
  - `radius` has been replaced with `radii`
  - `font` has been replaced with `fonts`
  - `monospace` has been removed
  - Theme fields are no longer exposed as exports
- Some props have changed
  - `width` is only available on Flex and Box
  - `fontSize` is only available on typographic components
  - `direction` is now `flexDirection`
  - Flex `align` is now `alignItems`
  - Flex `justify` is now `justifyContent`
  - Flex `wrap` is now `flexWrap`
  - Arrow `up` is now `direction='up'`
  - `active` props have been removed in favor of custom styles
  - Border now uses [styled-system border props](https://github.com/jxnblk/styled-system#borders)
  - Banner `image` is now `backgroundImage`
  - Absolute, Fixed, Relative, and Sticky now require values for `top`, `right`, `bottom`, and `left` props


[emotion]: https://github.com/emotion-js/emotion
