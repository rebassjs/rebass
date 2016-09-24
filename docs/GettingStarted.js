
import React from 'react'
import { Container, Grid } from 'gridsys'
import {
  Pre,
  Heading,
  HeadingLink,
  Text
} from '../src'

const example = `import React from 'react'
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
const GettingStarted = () => {
  return (
    <section id='getting-started'>
      <Container>
        <Grid span={12}>
          <HeadingLink
            href='#getting-started'
            children='Getting Started' />
        </Grid>
        <Grid span={3}>
          <Heading level={4} children='Install' />
          <Pre>npm install --save rebass</Pre>
          <Heading
            level={4}
            children='Import & Use' />
          <Pre children={example} />
        </Grid>
      </Container>
    </section>
  )
}

export default GettingStarted

