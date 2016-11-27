
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Heading from './Heading'

/**
 * Heading element with unstyled link. Useful for in-page navigation
 */

const HeadingLink = ({
  level,
  size,
  href,
  alt,
  style,
  className,
  theme,
  subComponentStyles,
  ...props
}) => {
  const cx = classnames('HeadingLink', className)

  const sx = {
    root: {
      ...style
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
      ...subComponentStyles.link
    }
  }

  return (
    <Heading
      alt={alt}
      level={level}
      size={size}
      className={cx}
      style={sx.root}>
      <a
        {...props}
        href={href}
        style={sx.link} />
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

HeadingLink._name = 'HeadingLink'

export default withRebass(HeadingLink)

