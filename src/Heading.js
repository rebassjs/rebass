
import React from 'react'
import classnames from 'classnames'
import Base from './Base'
import config from './config'

/**
 * Heading element with no margin and size based on fontSizes scale
 */

const Heading = ({
  level,
  size,
  big,
  alt,
  _className,
  ...props
}, { rebass }) => {
  const { fontSizes, bold } = { ...config, ...rebass }
  const Component = `h${level}`

  const h = (n) => fontSizes[n]

  let fontSize = typeof size === 'number' ? h(size) : h(level)
  if (alt) {
    fontSize = h(4)
  }
  if (big) {
    fontSize *= 2
  }

  const cx = classnames(_className || 'Heading', {
    'Heading_alt': alt
  })

  return (
    <Base
      {...props}
      tagName={Component}
      className={cx}
      baseStyle={{
        fontSize,
        fontWeight: bold,
        lineHeight: 1.25,
        margin: 0,
        opacity: alt ? 0.5 : null
      }} />
  )
}

Heading.propTypes = {
  /** Doubles the visual size - useful for marketing pages */
  big: React.PropTypes.bool,
  /** Heading level, e.g. level={1} for <h1> */
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /** Visual size of heading */
  size: React.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  /** Applies alternate styling - useful for slugs and subheadings */
  alt: React.PropTypes.bool
}

Heading.defaultProps = {
  level: 2
}

Heading.contextTypes = {
  rebass: React.PropTypes.object
}

export default Heading

