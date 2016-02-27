
import React from 'react'
import theme from './theme'

/**
 * Image for use within the Card component
 */

const CardImage = ({ src, style, children, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale } = config

  return (
    <img
      {...props}
      className='CardImage'
      src={src}
      style={{
        display: 'block',
        width: `calc(100% + ${2 * scale[1]}px)`,
        maxWidth: 'none',
        height: 'auto',
        margin: - scale[1],
        marginBottom: scale[1],
        ...style
      }} />
  )
}

CardImage.propTypes = {
  /** Image source */
  src: React.PropTypes.string.isRequired
}

CardImage.contextTypes = {
  rebass: React.PropTypes.object
}

export default CardImage

