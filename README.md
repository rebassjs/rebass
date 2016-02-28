# Rebass

React Stateless Functional UI Components

[![Build Status](https://travis-ci.org/jxnblk/rebass.svg)](https://travis-ci.org/jxnblk/rebass)

http://jxnblk.com/rebass

## Features

- Uses inline styles
- No CSS dependencies
- No leaky global styles
- [Dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ah4312963) work with any application architecture
- [Configurable](#configuration) with React Context
- Great for prototyping
- Production ready
- [Tested](https://travis-ci.org/jxnblk/rebass)

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

## Component Documentation

Each component exposes a simple API of props. View the source code or see <http://jxnblk.com/rebass> for more information.

## Architectural Approach

Rebass is built around a component architectural approach inspired by Dan Abramov’s
[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ah4312963),
where presentational components are the only ones that encapsulate styles and contain no application logic,
and container components do not contain any styles or DOM markup and handle all the application logic.

Rebass only contains presentaional components,
which means controlling things like progressive disclosure mechanisms
or dropdown menus should be handled at a higher level in container components.
Therefore, Rebass itself does not require any client-side JavaScript,
is well suited to server-side rendering,
and can fit into virtually any higher level application architecture.

## Configuration

Global theme styles are set using
[React Context](https://facebook.github.io/react/docs/context.html).
This means that the default global styles can be configured,
and component-specific styles can be added to customize on a per-component basis.

View the [demo](http://jxnblk.com/rebass/demo) to see some configuration options in action.

To configure the theme, add `childContextTypes` and `getChildContext` to your root component.

```jsx
class App extends React.Component {
  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: {
        colors: myCustomColors,
        fontSizes: [ 64, 48, 24, 18, 16, 14, 12],
        Button: {
          backgroundColor: 'tomato'
        }
      }
    }
  }

  render () {
    // ...
  }
}
```

After setting context in the root component, all instances of Rebass components will use these values throughout the app.

For reference to the default values, see [`/src/theme.js`](src/theme.js).

## Per-Instance Overrides

Components accept overrides using the `style` prop to handle any one-off situations.
For example, if the default Button color is blue,
but you'd like to use an orange button in a particular situation,
pass styles into the component instance.

```jsx
<Button style={{ color: 'black', backgroundColor: 'orange' }}>Orange!</Button>
```

## Base Styles

Rebass components inherit styles where appropriate.
Set your own base styles for color and fonts to customize the overall look and feel of an application.
It's recommended that you use `* { box-sizing: border-box }` and set `line-height: 1.5` on the body.

**Example**

```css
* { box-sizing: border-box}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.5;
  color: #111;
  background-color: #fff;
}
```

## Styling with CSS

Although it's not recommended to use extensively, components can be styled with CSS.
Each component has a className that matches the component name.
To control things like button hover styles, this can be a convenient way to style pseudo-classes.
Note, that due to the use of inline styles, some properties may need to be overridden with an `!important` flag.

```css
.Button:hover {
  box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 0.125);
}
```

[MIT License](.github/LICENSE.md)

