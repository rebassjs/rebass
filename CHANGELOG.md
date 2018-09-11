
# Changelog

## [2.3.3] 2018-09-10

- Fix bug with Position space props

## [2.3.2] 2018-09-08

- Update repo in package.json
- Update readme

## [2.3.1] 2018-09-08

- Fix bad prepublish build

## [2.3.0] 2018-09-08

- Upgrade to @rebass/components, @rebass/grid, and styled-system v3

## [2.2.0] 2018-09-08

- Use `polished` for color manipulation instead of `chroma-js`

## [2.1.1] 2018-09-08

- Support `width` prop on Card
- Update docs

## [2.1.0] 2018-08-14

- Add Hide component

## [2.0.1] 2018-06-30

- Add `fontFamily` to Heading and Text components
- Update docs

## [2.0.0] 2018-06-24

### Added

- Support for [emotion][emotion]

### Changed

- [styled-system](https://github.com/jxnblk/styled-system) v2
- [grid-styled](https://github.com/jxnblk/grid-styled) v4
- Moves components to separate modules
- Uses [system-components](https://github.com/jxnblk/styled-system/tree/master/system-components)
- Updates docs site

#### Breaking

- Renamed components
  - TabItem -> Tab
  - DotButton -> Dot
  - PanelHeader -> Panel.Header
  - PanelFooter -> Panel.Footer
- Default theme (changed to match styled-system)
  - The `colors` object no longer uses Palx
  - Array color values have been removed
  - `radius` has been replaced with `radii`
  - `font` has been replaced with `fonts`
  - `monospace` has been removed
  - Theme fields are no longer exposed as exports
- Props
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
  - Drawer `position` prop has been renamed to `side`
  - Drawer `size` prop has been replaced with `width` and `height` props

### Removed

- Custom HOC `hoc`
- `createLibrary` function
- `util`
- `createComponent`
- Palx dependency
- ScrollCarousel component
- CarouselSlide component
- Star comonent


[emotion]: https://github.com/emotion-js/emotion
