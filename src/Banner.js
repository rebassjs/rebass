
import React from 'react'
import theme from './theme'

/**
 * Full-height banner with styling for background images
 */

const Banner = ({ align, minHeight, backgroundImage, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const bannerStyle = {
    ...theme.Banner,
    ...(rebass ? rebass.Banner : {}),
    ...style
  }
  const { scale, fontSizes } = config

  const alignment = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  }

  const alignItems = alignment[align]

  return (
    <div
      {...props}
      className='Banner'
      style={{
        fontSize: fontSizes[1],
        display: 'flex',
        flexDirection: 'column',
        alignItems,
        justifyContent: 'center',
        padding: scale[4],
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
        ...bannerStyle,
        minHeight
      }} />
  )
}

Banner.propTypes = {
  /** Horizontal alignment */
  align: React.PropTypes.oneOf(['left', 'center', 'right']),
  /** Min height */
  minHeight: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  /** Background image source */
  backgroundImage: React.PropTypes.string
}

Banner.defaultProps = {
  align: 'center'
}

Banner.contextTypes = {
  rebass: React.PropTypes.object
}

export default Banner
