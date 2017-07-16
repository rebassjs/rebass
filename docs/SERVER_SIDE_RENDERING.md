
# Server Side Rendering

Rebass uses styled-components for styling.

```jsx
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import App from './App'

const sheet = new ServerStyleSheet()
const html = renderToString(sheet.collectStyles(<App />))
const css = sheet.getStyleTags()
```

See the styled-components
[documentation](https://www.styled-components.com/docs/advanced#server-side-rendering)
for more.
