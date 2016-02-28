
import React from 'react'
import theme from './theme'

/**
 * Full-height banner with styling for background images
 */

const Banner = ({ align, backgroundImage, m0, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const bannerStyle = rebass ? rebass.Banner : {}
  const { scale, colors, fontSizes } = config

  const alignment = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  }

  const alignItems = alignment[align]

  const sx = {
    boxSizing: 'border-box',
    fontSize: fontSizes[1],
    display: 'flex',
    flexDirection: 'column',
    alignItems,
    justifyContent: 'center',
    padding: scale[4],
    marginBottom: m0 ? 0 : scale[3],
    color: colors.white,
    backgroundColor: colors.primary,
    minHeight: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
    ...bannerStyle,
    ...style
  }

  return (
    <div
      {...props}
      className='Banner'
      style={sx} />
  )
}

Banner.propTypes = {
  /** Horizontal alignment */
  align: React.PropTypes.oneOf(['left', 'center', 'right']),
  /** Background image source */
  backgroundImage: React.PropTypes.string,
  /** Remove default margin */
  m0: React.PropTypes.bool
}

Banner.defaultProps = {
  align: 'center'
}

Banner.contextTypes = {
  rebass: React.PropTypes.object
}

export default Banner
