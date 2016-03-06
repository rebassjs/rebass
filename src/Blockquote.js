
import React from 'react'
import Base from './Base'
import config from './config'

const Blockquote = ({
  source,
  href,
  prefix,
  children,
  ...props
}, { rebass }) => {
  const { fontSizes, bold, scale } = { ...config, ...rebass }

  const sx = {
    root: {
      fontSize: fontSizes[3],
      fontStyle: 'italic',
      display: 'flex',
      alignItems: 'flex-start',
      margin: 0
    },
    prefix: {
      fontSize: fontSizes[0] * 2,
      width: '.75em',
      marginLeft: '-.75em',
      fontFamily: 'Georgia',
      fontWeight: bold,
      lineHeight: 1,
      flex: 'none',
      minWidth: 1
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

  const pfx = typeof prefix === 'string' ? prefix : '“'

  return (
    <Base
      {...props}
      tagName='blockquote'
      className='Blockquote'
      baseStyle={sx.root}>
      {prefix && (
        <div
          className='Blockquote_prefix'
          style={sx.prefix}
          children={pfx} />
      )}
      <div>
        <p style={sx.p}>
          {children}
        </p>
        <cite style={sx.cite}>
          {'— '}
          <a href={href}
            style={sx.source}
            children={source} />
        </cite>
      </div>
    </Base>
  )
}

Blockquote.propTypes = {
  /** Name of source */
  source: React.PropTypes.string,
  /** URL link to source */
  href: React.PropTypes.string,
  /** Decorative prefix - e.g. `“` */
  prefix: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string
  ])
}

Blockquote.defaultProps = {
  prefix: true
}

export default Blockquote

