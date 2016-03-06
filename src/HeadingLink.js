
import React from 'react'
import Heading from './Heading'

/**
 * Heading element with unstyled link. Useful for in-page navigation
 */

const HeadingLink = ({ level, size, href, style, ...props }, { rebass }) => {
  return (
    <Heading
      _className='HeadingLink'
      level={level}
      size={size}
      style={style}>
      <a
        {...props}
        href={href}
        style={{
          color: 'inherit',
          textDecoration: 'none'
        }} />
    </Heading>
  )
}

HeadingLink.propTypes = {
  /** Heading level, e.g. level={1} for <h1> */
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /** Visual size of heading */
  size: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /** href for link */
  href: React.PropTypes.string
}

HeadingLink.defaultProps = {
  level: 2,
  href: '#!'
}

HeadingLink.contextTypes = {
  rebass: React.PropTypes.object
}

export default HeadingLink

