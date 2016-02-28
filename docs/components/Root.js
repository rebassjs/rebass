
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Block,
  Container,
  Divider,
  Footer,
  Heading,
  NavItem,
  PageHeader,
  Panel,
  PanelHeader,
  Section,
  SectionHeader,
  Space,
  Text
} from '../../src'

import ComponentDoc from './ComponentDoc'
import PropsTable from './PropsTable'
import Example from './Example'
import Permutations from './Permutations'

const css = `
.NavItem:hover,
.Button:hover {
  box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, .125);
}
/*
.NavItem:hover {
  background-size: 100% 8px;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: linear-gradient(transparent, transparent 6px, tomato 6px, tomato);
}
*/
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
              <Flex wrap gutter={1}>
                {components.map(c => (
                  <NavItem key={c.name} href={`#${c.name}`} children={c.name} />
                ))}
              </Flex>
            </nav>
            <main>
              {components.map((c, i) => <ComponentDoc key={i} {...c} />)}
            </main>
            <Text>
              Documentation generated with <a href='https://github.com/reactjs/react-docgen'>react-docgen</a> and <a href='https://github.com/jxnblk/react-component-permutations'>react-component-permutations</a>.
            </Text>
            <Footer>
              <NavItem href='https://github.com/jxnblk/rebass' children='GitHub' />
              <Space auto />
              <NavItem href='http://jxnblk.com' children='Made by Jxnblk' />
            </Footer>
          </Container>
        </body>
      </html>
    )
  }
}

export default Root

