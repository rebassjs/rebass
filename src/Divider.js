
import React from 'react'
import theme from './theme'
import margins from './util/margins'

/**
 * Styled hr element
 */

const Divider = ({
  width,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Divider : {}
  const { scale, borderColor } = config

  return (
    <hr
      className='Divider'
      style={{
        width,
        marginTop: scale[2],
        marginBottom: scale[2],
        border: 0,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: borderColor,
        ...customStyle,
        ...margins(props, scale),
        ...style
      }} />
  )
}

Divider.propTypes = {
  /** Sets a fixed width for stylistic options */
  width: React.PropTypes.number
}

Divider.contextTypes = {
  rebass: React.PropTypes.object
}

export default Divider

