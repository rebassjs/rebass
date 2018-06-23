
# Extending

Rebass components can be completely customized using styled-components or emotion.

```jsx
import { Button } from 'rebass'
import styled from 'styled-components'

const CustomButton = styled(Button)`
  border: 1px solid rgba(0, 0, 0, .25);
  background-image: linear-gradient(transparent, rgba(0, 0, 0, .125));
  box-shadow: 0 0 4px rgba(0, 0, 0, .25)
`
```
