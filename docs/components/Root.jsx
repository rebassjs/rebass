
import React from 'react'
import bass from 'basscss/src/basscss.css'
import { Arrow, Badge } from '../..'

class Root extends React.Component {

  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{ __html: bass }} />
        </head>
        <body className="p3">
          <h1>{this.props.title} v{this.props.version}</h1>
          <h3>Arrow</h3>
          <Arrow />
          <Arrow up />
          <h3>Badge</h3>
          <Badge>Badge</Badge>
        </body>
      </html>
    )
  }

}

export default Root
