
import React from 'react'
import data from '../data'

import config from '../../src/config'
import Style from '../../src/Style'
import Button from '../../src/Button'

config.set({
  // buttonColor: 'red'
})

class Root extends React.Component {

  render () {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>Rebass</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link href='https://npmcdn.com/basscss-basic@1.0.0/index.css' rel='stylesheet' />
          <Style />
        </head>
        <body className='p3'>
          <h1>Rebass</h1>
          <hr />
          <Button children='Hello' />
          <hr />
          <Button big children='Big Hello' />
          <hr />
          <h1>Examples</h1>
          {data.examples.map(example => {
            const name = example.component.name
            const Component = example.component.Comp
            return (
              <div>
                <h1>name: {name}</h1>
                {example.variations.map((variation, i) => {
                  return (
                    <div key={name + i}>
                      <pre>{JSON.stringify(variation, null, 2)}</pre>
                      <Component {...variation} children='Hello' />
                    </div>
                  )
                })}
              </div>
            )
          })}

          <hr />
          <hr />
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </body>
      </html>
    )
  }
}

export default Root

