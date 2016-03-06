
# Contributing

Issues and pull requests are welcome.

Please **be nice** and read the following before contributing.

- Use [feross/standard](https://github.com/feross/standard) code style
- Test before submitting pull requests - `npm test`

## Component style

- Follow code style based on src components
- All components should use the Base component as the root, unless it is an extension of another component
- Component props should be extracted using destructuring, and other props should be passed to the root Base component
- Components should pass `baseStyle` to the Base component and `style` should be reserved for the end user
- All functionality in a component should be tested
- All components should have propTypes set for all custom props
- All components and propTypes should be documented to allow for react-docgen parsing
- All components must be stateless functional components
- Delegate client-size JS to higher-order container components
- Prefer not to use external dependencies

## Component className

- The root className should match the component name
- Stateful classNames should be camelCased - e.g. `isInvalid`
- Child element and modifier classNames should be separated with an underscore - e.g. `Heading_alt`
- End-user should not be able to set className on a component

