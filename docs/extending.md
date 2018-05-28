
# Extending

Rebass components can be completely customized using styled-components' `.extend` method.

```..jsx
const CustomButton = Button.extend`
  border: 1px solid rgba(0, 0, 0, .25);
  background-image: linear-gradient(transparent, rgba(0, 0, 0, .125));
  box-shadow: 0 0 4px rgba(0, 0, 0, .25)
`

render(
  <CustomButton>
    Hello
  </CustomButton>
)
```
