
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Image for use within the Card component
 */

const CardImage = ({
  src,
  children,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale } = config

  return (
    <Base
      {...props}
      tagName='img'
      className='CardImage'
      src={src}
      baseStyle={{
        display: 'block',
        width: `calc(100% + ${2 * scale[1]}px)`,
        maxWidth: 'none',
        height: 'auto',
        margin: - scale[1],
        marginBottom: scale[1]
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

