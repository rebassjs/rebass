
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Stylized blockquote element with citation link
 */

const Blockquote = ({
  source,
  href,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { fontSizes, scale } = theme

  const cx = classnames('Blockquote', className)

  const sx = {
    root: {
      fontSize: fontSizes[3],
      fontStyle: 'italic',
      margin: 0,
      marginBottom: scale[2],
      ...style
    },
    p: {
      margin: 0,
      marginBottom: scale[1],
      ...subComponentStyles.p
    },
    cite: {
      fontSize: fontSizes[5],
      fontStyle: 'normal',
      ...subComponentStyles.cite
    },
    source: {
      color: 'inherit',
      ...subComponentStyles.source
    }
  }

  return (
    <blockquote
      {...props}
      className={cx}
      style={sx.root}>
      <p style={sx.p}>
        {children}
      </p>
      <cite style={sx.cite}>
        {'— '}
        <a href={href}
          style={sx.source}
          children={source} />
      </cite>
    </blockquote>
  )
}

Blockquote.propTypes = {
  /** Name of source */
  source: React.PropTypes.string,
  /** URL link to source */
  href: React.PropTypes.string
}

Blockquote._name = 'Blockquote'

export default withRebass(Blockquote)

