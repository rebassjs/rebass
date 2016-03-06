
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Stylized blockquote element with citation link
 */

const Blockquote = ({
  source,
  href,
  children,
  ...props
}, { rebass }) => {
  const { fontSizes, scale } = { ...config, ...rebass }

  const sx = {
    root: {
      fontSize: fontSizes[3],
      fontStyle: 'italic',
      margin: 0,
      marginBottom: scale[2]
    },
    p: {
      margin: 0,
      marginBottom: scale[1]
    },
    cite: {
      fontSize: fontSizes[5],
      fontStyle: 'normal'
    },
    source: {
      color: 'inherit'
    }
  }

  return (
    <Base
      {...props}
      tagName='blockquote'
      className='Blockquote'
      baseStyle={sx.root}>
      <p style={sx.p}>
        {children}
      </p>
      <cite style={sx.cite}>
        {'— '}
        <a href={href}
          style={sx.source}
          children={source} />
      </cite>
    </Base>
  )
}

Blockquote.propTypes = {
  /** Name of source */
  source: React.PropTypes.string,
  /** URL link to source */
  href: React.PropTypes.string
}

export default Blockquote

