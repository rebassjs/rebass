
import React from 'react'
import { Container, Grid } from 'gridsys'
import {
  HeadingLink,
  Heading,
  Text
} from '../src'

const Architecture = () => {
  return (
    <section id='architecture'>
      <Container>
        <Grid span={12}>
          <HeadingLink
            href='#architecture'
            children='Architectural approach' />
        </Grid>
        <Grid span={2}>
          <Text>
            Rebass is built around a component architectural approach inspired by Dan Abramov’s
            <a href='https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.ah4312963'>Presentational and Container Components</a>,
            where presentational components are the only ones that encapsulate styles and contain no application logic, and container components do not contain any styles or DOM markup and handle all the application logic.
          </Text>
        </Grid>
        <Grid span={2}>
          <Text>
            Rebass only contains presentational components, which means controlling things like progressive disclosure mechanisms or dropdown menus should be handled at a higher level in container components. Therefore, Rebass itself does not require any client-side JavaScript, is well suited to server-side rendering, and can fit into virtually any higher level application architecture.
          </Text>
        </Grid>
      </Container>
    </section>
  )
}

export default Architecture

