
import React from 'react'
import theme from './theme'

/**
 * Full-height banner with styling for background images
 */

const Banner = ({ align, minHeight, color, backgroundColor, backgroundImage, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const bannerConfig = { ...theme.Banner, ...(rebass ? rebass.Banner : {}) }
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
        minHeight: minHeight || bannerConfig.minHeight,
        padding: scale[4],
        color: color || bannerConfig.color,
        backgroundColor: backgroundColor || bannerConfig.backgroundColor,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
        ...style
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
  /** Text color */
  color: React.PropTypes.string,
  /** Background color */
  backgroundColor: React.PropTypes.string,
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
