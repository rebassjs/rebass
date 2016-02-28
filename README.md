# Rebass

React Stateless Functional UI Components

[![Build Status](https://travis-ci.org/jxnblk/rebass.svg)](https://travis-ci.org/jxnblk/rebass)

http://jxnblk.com/rebass

## Features

- Uses inline styles – no CSS dependencies
- [Dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ah4312963) work with any application architecture
- [Configurable](#configuration) with React Context
- Great for prototyping
- Production ready
- Tested

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

See <http://jxnblk.com/rebass>.

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

## Base Styles

Rebass components inherit styles where appropriate.
Set your own base styles for color and fonts to customize the overall look and feel of an application.
It's recommended that you set `line-height: 1.5` on the body, but other values will also work.

## Styling with CSS

Although it's not recommended to use extensively, components can be styled with CSS.
Each component has a className that matches the component name.
To control things like button hover styles, this can be a convenient way to style components.
Note, that due to the use of inline styles, some properties may need to be overridden with an `!important` flag.

```css
.Button:hover {
  box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 0.125);
}
```

[MIT License](.github/LICENSE.md)

