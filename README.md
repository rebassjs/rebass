# Rebass

React Stateless Functional UI Components

[![Build Status](https://travis-ci.org/jxnblk/rebass.svg)](https://travis-ci.org/jxnblk/rebass)

http://jxnblk.com/rebass

## Features

- Uses inline styles – no CSS dependencies
- [Dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ah4312963) work with any application architecture
- [Configurable](#configuration) with React Context

## Getting Started

```bash
npm i rebass
```

```jsx
import React from 'react'
import { Button, Badge } from 'rebass'

class App extends React.Component {
  render () {
    return (
      <App>
        <Button>Button</Button>
        <Badge>Badge</Badge>
      </App>
    )
  }
}
```

## Configuration

Global theme styles are set using
[React Context](https://facebook.github.io/react/docs/context.html).
This means that the default

---

# Notes

- Base styles component or recommendations (1.5 line-height, etc)
- Remove all duplicate/flattened style props?
- theme config for all components?
- borderRadius, borderColor in component configs...
- abstracted color keys (primary, secondary, etc)

- [x] propsString for permutations
- [x] toJsx code blocks
- [ ] Tests
- [ ] Site
  - [ ] Configurable context demo
    - [ ] Colors from color lovers api ?
    - [ ] Spacing Scale number or range inputs
    - [ ] Border Radius
    - [ ] Border color
    - [ ] Font Sizes
    - [ ] Base stylesheet controls (font, color, bg)
  - [ ] Ad
  - [ ] Travis Badge
  - [ ] Tweet
  - [ ] Star
  - [ ] Features
  - [ ] CTA
  - [ ] Footer

- [x] Close
- [ ] ButtonPill
- [ ] ButtonCircle
- [x] Block (color, backgroundColor, borderColor, border, borderLeft, ...)
- [x] Input, etc, hideLabel prop
- [x] Button rounded prop
- [x] Button outline prop
- [x] ~~ToolbarSpace~~ or <Space auto />

- [x] theme component styles (e.g. Button, Heading)

- [ ] Form
- [ ] SearchForm
- [ ] Blockquote
- [ ] Table
- [x] Pre
- [x] Embed
- [ ] InputNumber ? + Stepper?

- [ ] Test CSS :hover, :focus, :active, :disabled
- [ ] Test without box-sizing: border-box

- Fieldset
- Form ?
- AuthForm
  - SignUpForm
  - SignInForm
- AddressForm

- [ ] Avatar
- [ ] ProfileCard
- [ ] ButtonGroup ?
- [ ] Input rounded prop

- Look into context style wrapper

---

[MIT License](.github/LICENSE.md)

