
import React from 'react'
import css from 'basscss.github.io/css/base.css'
import progress from 'basscss-progress/index.css'
import colorProgress from 'basscss-color-progress/index.css'
import range from 'basscss-input-range/index.css'
import colorRange from 'basscss-color-input-range/index.css'
import {
  Container,
  PageHeader,
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
          <style dangerouslySetInnerHTML={{ __html: progress }} />
          <style dangerouslySetInnerHTML={{ __html: colorProgress }} />
          <style dangerouslySetInnerHTML={{ __html: range }} />
          <style dangerouslySetInnerHTML={{ __html: colorRange }} />
        </head>
        <body>
          <Container>
            <PageHeader {...this.props}>
              <div>v{this.props.version}</div>
            </PageHeader>
            <Components />
            <Footer>
              <div>{this.props.title}</div>
              <div>
                <a href='//jxnblk.com'>
                  Made by Jxnblk
                </a>
              </div>
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

