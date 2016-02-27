# Rebass

React Stateless Functional UI Components

http://jxnblk.com/rebass

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

---

# Notes

- Base styles component or recommendations (1.5 line-height, etc)
- Remove all duplicate/flattened style props?
- theme config for all components?
- borderRadius, borderColor in component configs...
- abstracted color keys (primary, secondary, etc)

- [ ] propsString for permutations
- [ ] toJsx code blocks
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

- [ ] Close
- [ ] PillButton
- [x] Block (color, backgroundColor, borderColor, border, borderLeft, ...)
- [x] Input, etc, hideLabel prop
- [x] Button rounded prop
- [x] Button outline prop
- [ ] ToolbarSpace or <Space auto />

- [ ] theme component styles (e.g. Button, Heading)

- [ ] Form
- [ ] SearchForm
- [ ] Blockquote
- [ ] Table
- [x] Pre
- [ ] Embed
- [ ] InputNumber ? + Stepper?

- [ ] Test CSS :hover, :focus, :active, :disabled
- [ ] Test without box-sizing: border-box

- Fieldset
- Form ?
- AuthForm
  - SignUpForm
  - SignInForm
- AddressForm

---

MIT License

