---
title: rebass/mdx
---
import { Button } from 'rebass'

# RebassMDX

Component provider to pass styled Rebass components to MDX.

```sh
npm i @rebass/mdx
```

<Button
  is='a'
  fontSize={2}
  px={4}
  py={3}
  href='https://github.com/jxnblk/rebass/tree/master/mdx'>
  GitHub
</Button>

## Usage

```jsx
import React from 'react'
import RebassMDX from '@rebass/mdx'
import Document from './document.mdx

export default props =>
  <RebassMDX>
    <Document />
  </RebassMDX>
```

### Props

- `theme` add a custom [Rebass theme][]
- `components` override specific components or add custom components to code fence examples
- `props` props for [Rebass Markdown][] components to control styling

[Rebass theme]: http://jxnblk.com/rebass/theming
[Rebass Markdown]: https://github.com/jxnblk/rebass/tree/master/markdown
