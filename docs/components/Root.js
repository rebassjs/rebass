
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  // for testing...
  BoxShadow,
  Group,
  Input,
  Button,
  ButtonOutline,

  theme,
} from '../../src'

const css = `
html { -webkit-text-size-adjust: 100% }
`

class Root extends React.Component {
  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: {
        /*
        colors: {
          ...config.colors,
          gray2: '#666',
          darken: 'rgba(0, 0, 0, .9375)',
          d1: 'rgba(0, 0, 0, .125)'
        },
        Divider: {
          borderColor: 'inherit'
        },
        PageHeader: {
          borderColor: 'inherit'
        },
        SectionHeader: {
          borderColor: 'inherit'
        }
        */
      }
    }
  }

  render () {
    const {
      components,
      description,
      version,
      ga
    } = this.props

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>Rebass</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link href='https://unpkg.com/basscss-basic@1.0.0/index.css' rel='stylesheet' />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <div>
            <BoxShadow p={4}>
              BoxShadow
            </BoxShadow>
            <Group>
              <Input
                name='test'
                label='test'
              />
              <Button children='Group' />
              <Button children='Group' />
              <ButtonOutline children='Group' />
            </Group>
          </div>
          <pre>{description} v{version}</pre>
          {components.map((c, i) => (
            <pre key={i}>{JSON.stringify(c, null, 2)}</pre>
          ))}
          <script dangerouslySetInnerHTML={{ __html: ga }} />
        </body>
      </html>
    )
  }
}

export default Root

