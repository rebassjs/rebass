
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Block,
  Container,
  Divider,
  Heading,
  NavItem,
  PageHeader,
  Panel,
  PanelHeader,
  Section,
  SectionHeader,
  Text
} from '../../src'

import ComponentDoc from './ComponentDoc'
import PropsTable from './PropsTable'
import Example from './Example'
import Permutations from './Permutations'

const css = `
.caps {
  text-transform: uppercase;
  letter-spacing: .2em;
}
.Button:hover {
  color: black;
}
.tomato { color: tomato }
`

class Root extends React.Component {

  constructor () {
    super()
  }

  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: {
      }
    }
  }

  render () {
    const { components, examples, description, version } = this.props

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>Rebass</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link href='https://npmcdn.com/basscss-basic@1.0.0/index.css' rel='stylesheet' />
          <link href='https://npmcdn.com/basscss@8.0.1/css/basscss.min.css' rel='stylesheet' />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <Container>
            <PageHeader
              heading='Rebass'
              description={`${components.length} ${description} [v${version}]`} />
            <nav>
              {components.map(c => (
                <NavItem key={c.name} href={`#${c.name}`} children={c.name} />
              ))}
            </nav>
            <main>
              {components.map((c, i) => <ComponentDoc key={i} {...c} />)}
            </main>
            <hr />
            <pre className='tomato'>{JSON.stringify(this.props, null, 2)}</pre>
          </Container>
        </body>
      </html>
    )
  }
}

export default Root

