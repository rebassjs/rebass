
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Styled hr element
 */

const Divider = ({
  width,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { borderColor } = config

  return (
    <Base
      {...props}
      tagName='hr'
      className='Divider'
      baseStyle={{
        width,
        border: 0,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: borderColor
      }} />
  )
}

Divider.propTypes = {
  /** Sets a fixed width for stylistic options */
  width: React.PropTypes.number,
  /** Applies margin top and bottom based on the theme spacing scale */
  my: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
}

Divider.defaultProps = {
  my: 2
}

Divider.contextTypes = {
  rebass: React.PropTypes.object
}

export default Divider

