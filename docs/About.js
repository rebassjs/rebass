
import React from 'react'
import { Container, GridGroup, Grid } from 'gridsys'
import {
  Heading,
  HeadingLink,
  Text,
  Pre,
  Table
} from '../src'
import Rule from './Rule'

const gettingStartedExample = `import React from 'react'
import { Input, Button } from 'rebass'

const App = ({
  username,
  onChange,
  onSubmit
}) => (
  <form onSubmit={onSubmit}>
    <Input
      name='username'
      label='Username'
      value={username}
      onChange={onChange} />
    <Button
      children='Go' />
  </form>
)
`

const contextExample =
`class App extends React.Component {
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

App.childContextTypes = {
  rebass: React.PropTypes.object
}`

const About = () => {
  return (
    <Container>
      <Grid min={6} split={2}>
        <HeadingLink
          href='#getting-started'
          children='Getting Started' />
        <Rule />
        <Heading level={4} children='Install' />
        <Pre>npm install --save rebass</Pre>
        <Heading
          level={4}
          children='Import & Use' />
        <Pre children={gettingStartedExample} />
      </Grid>
      <Grid min={6} split={2}>
        <HeadingLink
          href='#architecture'
          children='Architectural approach' />
        <Rule />
        <Text mb={2}>
          Rebass is built around a component architectural approach inspired by Dan Abramov’s
          {' '}
          <a href='https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ah4312963'>Presentational and Container Components</a>,
          where presentational components are the only ones that encapsulate styles and contain no application logic, and container components do not contain any styles or DOM markup and handle all the application logic.
        </Text>
        <Text>
          Rebass only contains presentational components, which means controlling things like progressive disclosure mechanisms or dropdown menus should be handled at a higher level in container components. Therefore, Rebass itself does not require any client-side JavaScript, is well suited to server-side rendering, and can fit into virtually any higher level application architecture.
        </Text>
      </Grid>
      <Grid min={6} split={2}>
        <HeadingLink
          href='#hoc'
          children='Higher Order Component' />
        <Rule />
        <Text mb={2}>
          Each Rebass component is wrapped with the <code>withRebass</code> higher order component, which provides the theme object through context and handles several style shorthand props.
        </Text>
        <Text mb={2}>
          Every component in Rebass has the following props available to quickly style and lay out views:
        </Text>
        <Table
          headings={[
            'Prop',
            'Type',
            'Description'
          ]}
          data={[
            [ 'm', 'number', 'Margin based on the global spacing scale' ],
            [ 'mt', 'number', 'Margin top' ],
            [ 'mr', 'number', 'Margin right' ],
            [ 'mb', 'number', 'Margin bottom' ],
            [ 'ml', 'number', 'Margin left' ],
            [ 'mx', 'number', 'X-axis margin (left and right)' ],
            [ 'my', 'number', 'Y-axis margin (top and bottom)' ],

            [ 'p', 'number', 'Padding based on the global spacing scale' ],
            [ 'pt', 'number', 'Padding top' ],
            [ 'pr', 'number', 'Padding right' ],
            [ 'pb', 'number', 'Padding bottom' ],
            [ 'pl', 'number', 'Padding left' ],
            [ 'px', 'number', 'X-axis padding (left and right)' ],
            [ 'py', 'number', 'Y-axis padding (top and bottom)' ],

            [ 'rounded', 'boolean or string', 'Border radius' ],
            [ 'pill', 'boolean', 'Sets border radius 99999 for pill and circle shapes' ],
            [ 'color', 'string', 'Foreground color - a key from the color object or any other color value' ],
            [ 'backgroundColor', 'string', 'Background color' ],
            [ 'theme', 'string', 'Semantic forground and background color' ],
          ]} />
      </Grid>
      <Grid min={6} split={2}>
        <section id='themes'>
          <HeadingLink
            href='#themes'
            children='Themes' />
          <Rule />
          <Text>
            The look and feel of Rebass components can be completely customized by passing a React context object to child components.
          </Text>
          <Pre children={contextExample} />
        </section>
      </Grid>
    </Container>
  )
}

export default About

