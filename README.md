# Rebass

React Stateless Functional UI Components

[![Build Status](https://travis-ci.org/jxnblk/rebass.svg)](https://travis-ci.org/jxnblk/rebass)

http://jxnblk.com/rebass

## Features

- Uses inline styles – no CSS dependencies
- [Dumb components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ah4312963) work with any application architecture
- [Configurable](#configuration) with React Context

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

## Configuration

Global theme styles are set using
[React Context](https://facebook.github.io/react/docs/context.html).
This means that the default

[MIT License](.github/LICENSE.md)

