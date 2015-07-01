
import React from 'react'
import css from '../docs.css'
import Logo from 'basscss-logo'
import {
  Container,
  PageHeader,
  Flex,
  FlexItem,
  Footer
} from '../..'
import Hero from './Hero.jsx'
import Intro from './Intro.jsx'
import ValueProps from './ValueProps.jsx'
import GettingStarted from './GettingStarted.jsx'
import Components from './Components.jsx'

class Root extends React.Component {

  render() {
    let initialProps = {
      __html: safeStringify(this.props)
    }
    console.log('Components')
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <Hero {...this.props} />
          <Container>
            <Intro />
            <ValueProps />
            <GettingStarted {...this.props} />
            <Components />
            <Footer>
              <Flex>
                <FlexItem auto>
                  {this.props.title} v{this.props.version}
                </FlexItem>
                <a href='//jxnblk.com'
                  className='btn'>
                  Made by Jxnblk
                </a>
              </Flex>
            </Footer>
          </Container>
          <script id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={initialProps} />
          <script src='bundle.js' />
        </body>
      </html>
    )
  }

}

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

export default Root

