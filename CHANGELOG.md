
# 2016-10-xx

## v0.4

- Rewritten Base component as the `withRebass` higher-order component
- Supports nested objects in the theme config to style elements within a component
- Supports nested style objects to style elements within a component
- Renames `config.js` to `theme.js` to more accurately describe its purpose
- Uses [understyle](https://github.com/jxnblk/understyle) behind the scenes for margin and padding props
- Accepts `className` prop on components
- Tests have been rewritten with Jest & Enzyme
- PureRenderMixin's `shouldComponentUpdate` has been removed
- *Should* fix some style override issues

- Deprecated ButtonCircle in favor of `<Button circle />`

## New Components

- BoxShadow
- Carousel
- Group
- List
- Bar
- Tabs
- TabItem


## Potentially breaking changes

- `is` prop has been removed. The `withRebass` higher-order component can be used instead.
- `baseRef` is now only a prop on a subset of components
- ~~`theme` prop has been renamed to `fill`, but might stay the same~~
- `inverted` prop is no longer supported


## To do:

- [x] Handle/rename color `theme` prop
- [x] Remove or fix `inverted` prop
- [x] Add tests for context theme
- [x] Update README.md
- [x] Update docs
- [x] Support string arrays in Select
- [x] Typography props `bold`, `center`, `caps`
- [x] `horizontal` prop for Input, Select, etc.
- [x] Fix color props on form components
- [x] Consider `circle` prop for Button components

