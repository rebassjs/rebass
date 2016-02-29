
import React from 'react'
import theme from './theme'

/**
 * Media object with vertical alignment using flexbox
 */

const Media = ({ img, right, align, style, children, ...props }, { rebass }) => {

  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Media : {}
  const { scale } = config

  const alignment = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end'
  }

  const alignItems = alignment[align]

  return (
    <div
      {...props}
      className='Media'
      style={{
        display: 'flex',
        marginBottom: scale[2],
        alignItems,
        ...customStyle,
        ...style
      }}>
      <img src={img}
        style={{
          flex: 'none',
          maxWidth: 'none',
          marginRight: right ? 0 : scale[2],
          marginLeft: right ? scale[2] : 0,
          order: right ? 9999 : null
        }} />
      <div children={children} />
    </div>
  )
}

Media.propTypes = {
  /** Image source */
  img: React.PropTypes.string,
  /** Displays image to the right */
  right: React.PropTypes.bool,
  /** Vertical alignment */
  align: React.PropTypes.oneOf(['top', 'center', 'bottom']),
}

Media.contextTypes = {
  rebass: React.PropTypes.object
}

export default Media

