
import React from 'react'
import css from '../docs.css'
//import rebass from '../../rebass.css'
import {
  Container,
  PageHeader,
  Flex,
  FlexItem,
  Footer
} from '../..'
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
          <Container>
            <PageHeader {...this.props}>
              <div>v{this.props.version}</div>
            </PageHeader>
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

