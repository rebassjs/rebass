
import React from 'react'
import css from '../docs.css'
import Logo from 'basscss-logo'
import favicon from 'basscss-logo/images/basscss-32.png'
import touchicon from 'basscss-logo/images/basscss-512.png'
import {
  Container,
  PageHeader,
  FlexRow,
  Flex,
  Footer
} from '../..'
import Hero from './Hero.jsx'
import Intro from './Intro.jsx'
import Social from './Social.jsx'
import ValueProps from './ValueProps.jsx'
import GettingStarted from './GettingStarted.jsx'
import Components from './Components.jsx'
import Cta from './Cta.jsx'
import Related from './Related.jsx'

//import ActiveId from './ActiveId.jsx'

class Root extends React.Component {

  constructor () {
    super ()
    this.state = {
      activeSection: false
    }
    this.updateActiveSection = this.updateActiveSection.bind(this)
  }

  updateActiveSection (id) {
    if (id) {
      this.setState({ activeSection: id })
    }
  }

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
          <meta name='description' content={this.props.description} />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href={favicon} />
          <link rel='apple-touch-icon-precomposed' href={touchicon} />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <Hero {...this.props} />
          <Container>
            <Intro />
            <Social />
            <ValueProps />
            <GettingStarted {...this.props} />
            <Components />
            <Cta />
            <Related />
            <Footer>
              <FlexRow>
                <Flex auto>
                  {this.props.title} v{this.props.version}
                </Flex>
                <a href='//jxnblk.com'
                  className='btn'>
                  Made by Jxnblk
                </a>
              </FlexRow>
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

