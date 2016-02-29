
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Block,
  Button,
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
  Text,
  Toolbar
} from '../../src'

import Header from './Header'
import Features from './Features'
import ComponentDoc from './ComponentDoc'
import PropsTable from './PropsTable'
import Example from './Example'
import Permutations from './Permutations'

const css = `
.NavItem:hover,
.Button:hover {
  box-shadow: inset 0 0 0 9999px rgba(0, 128, 255, .125);
}
.Button:disabled { opacity: .5 }
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
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <Header {...this.props} />
          <Container>
            <nav>
              <Flex wrap gutter={1}>
                {components.map(c => (
                  <NavItem key={c.name} href={`#${c.name}`} children={c.name} />
                ))}
              </Flex>
            </nav>
            <main>
              <Features />
              {components.map((c, i) => <ComponentDoc key={i} {...c} />)}
            </main>
            <Block borderLeft mb={4}>
              <Flex align='center'>
                <Heading size={1} children='Get Started' />
                <Space auto />
                <Button href='https://github.com/jxnblk/rebass'
                  children='GitHub' />
                <Space auto />
              </Flex>
            </Block>
            <Text small>
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

