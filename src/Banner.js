
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Full-height banner with styling for background images
 */

const Banner = ({
  align,
  backgroundImage,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}, { rebass }) => {
  const { scale, colors, fontSizes } = theme

  const alignment = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  }

  const alignItems = alignment[align]

  const cx = classnames('Banner', className)

  const sx = {
    fontSize: fontSizes[1],
    display: 'flex',
    flexDirection: 'column',
    alignItems,
    justifyContent: 'center',
    textAlign: align === 'center' ? 'center' : null,
    padding: scale[4],
    marginBottom: scale[3],
    color: colors.white,
    backgroundColor: colors.primary,
    minHeight: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

Banner.propTypes = {
  /** Horizontal alignment */
  align: React.PropTypes.oneOf(['left', 'center', 'right']),
  /** Background image source */
  backgroundImage: React.PropTypes.string
}

Banner.defaultProps = {
  align: 'center'
}

Banner._name = 'Banner'

export default withRebass(Banner)

