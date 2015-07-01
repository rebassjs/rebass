
import React from 'react'
import css from '../docs.css'
import Logo from 'basscss-logo'
import {
  Container,
  Banner,
  PageHeader,
  Flex,
  FlexItem,
  Link,
  LinkBtn,
  Footer
} from '../..'
import ValueProps from './ValueProps.jsx'
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
          <Banner left>
            <Flex>
              <FlexItem auto>
                <Logo />
                <h1 className='m0'>{this.props.title}</h1>
                <p>{this.props.description}</p>
              </FlexItem>
              <FlexItem>
                <LinkBtn
                  href='//github.com/jxnblk/rebass'
                  color='darken-4'>
                  GitHub
                </LinkBtn>
                {' '}
                <LinkBtn
                  href='//npmjs.com/package/rebass'
                  color='darken-4'>
                  npm
                </LinkBtn>
              </FlexItem>
            </Flex>
          </Banner>
          <Container>
            <ValueProps />
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

