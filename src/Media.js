
import React from 'react'
import theme from './theme'

/**
 * Media object with vertical alignment using flexbox
 */

const Media = ({ img, right, align, style, children, ...props }, { rebass }) => {

  const config = { ...theme, ...rebass }
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
        alignItems,
        ...style
      }}>
      <img src={img}
        style={{
          maxWidth: 'none',
          marginRight: right ? 0 : scale[1],
          marginLeft: right ? scale[1] : 0,
          order: right ? 9999 : null
        }} />
      {children}
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

