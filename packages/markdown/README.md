
# Rebass Markdown

Rebass to HTML component mappings with smart defaults for use in markdown

```sh
npm i @rebass/markdown
```

## Usage with MDX

```js
// example app provider component
import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import { Provider as RebassProvider } from 'rebass'
import createScope from '@rebass/markdown'

const scope = createScope()

export default props =>
  <MDXProvider components={scope}>
    <RebassProvider>
      {props.children}
    </RebassProvider>
  </MDXProvider>
```

## Options

Rebass markdown can be customized by passing a props object.
The props object should map to the tags used in markdown.

```js
const scope = createScope({
  // adds custom props to the h1 Heading component
  h1: {
    fontSize: [ 5, 6, 7 ],
    color: 'tomato'
  }
})
```

The following tags are used in Rebass Markdown:

- `h1`
- `h2`
- `h3`
- `h4`
- `h5`
- `h6`
- `p`
- `a`
- `img`
- `hr`
- `blockquote`
- `pre`
- `code`
- `inlineCode`
- `ul`
- `li`
- `table`

MIT License
