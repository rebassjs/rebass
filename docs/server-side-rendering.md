
# Server Side Rendering

Rebass uses styled-components for styling, which works with server-side rendering.
See the styled-components [documentation][ssr] for more on how to use Rebass for server-side rendering.

```jsx
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import App from './App'

const sheet = new ServerStyleSheet()
const html = renderToString(sheet.collectStyles(<App />))
const css = sheet.getStyleTags()
```

[ssr]: https://www.styled-components.com/docs/advanced#server-side-rendering
