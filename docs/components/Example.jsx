
import React from 'react'
import highlight from 'highlight.js'
import cx from 'classnames'
import react2jsx from 'react-to-jsx'

const JS_COMMENT_REGEX = /(\/\*[\w\'\s\r\n\*]*\*\/)|(\/\/[\w\s\']*)|(\<![\-\-\s\w\>\/]*\>)/

class Example extends React.Component {

  highlight (str) {
    let code = highlight.highlight('xml', str).value
    let html = { __html: code }
    // maxHeight
    return <pre dangerouslySetInnerHTML={html}
      className='p2 mb0 rounded-bottom border-none' />
  }

  render () {
    let str = react2jsx(this.props.children, { indent: '  ' })
    return (
      <div className='mb2 border rounded'>
        <div className='p2 border-bottom'>
          {this.props.children}
        </div>
        {this.highlight(str)}
      </div>
    )
  }

}

export default Example

