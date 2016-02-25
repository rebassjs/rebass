
import React from 'react'
import { Flex, Box } from 'reflexbox'
import PropsTable from './PropsTable'
import Example from './Example'
import SectionHeader from '../../src/SectionHeader'

const css = `
.caps {
  text-transform: uppercase;
  letter-spacing: .2em;
}
/*
  .Button {
    color: white;
    background-color: tomato;
  }
*/
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
        // borderColor: 'tomato',
        Button: {
          color: 'white',
          backgroundColor: 'tomato'
        },
        Toolbar: {
          backgroundColor: 'tomato'
        }
      }
    }
  }

  render () {
    const { components, description, version } = this.props

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
        <body className='max-width-4'>
          <Box p={3}>
            <header>
              <h1 className='caps'>Rebass <span className='h5'>{version}</span></h1>
              <p>{components.length} {description}</p>
            </header>
            <nav>
              {components.map(c => (
                <a key={c.name} href={`#${c.name}`}>{c.name}</a>
              ))}
            </nav>
            <main>
              {components.map(component => {
                const { Component } = component
                return (
                  <section key={component.name}
                    id={component.name}
                    className='py3'>
                    <SectionHeader
                      title={component.name}
                      href={`#${component.name}`}
                      description={component.description || '☞ NEEDS DESCRIPTION'} />
                    <div className='mb2'>
                      <Example {...component} />
                    </div>
                    <PropsTable props={component.props} />
                  </section>
                )
              })}
            </main>
            <hr />
            <pre className='tomato'>{JSON.stringify(this.props, null, 2)}</pre>
          </Box>
        </body>
      </html>
    )
  }
}

export default Root

