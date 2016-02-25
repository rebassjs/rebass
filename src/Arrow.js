
import React from 'react'

/** Arrow for use in dropdowns and other UI elements */

const Arrow = ({ direction, style, ...props }) => (
  <div
    className='Arrow'
    style={{
      ...style,
      width: 0,
      height: 0,
      marginLeft: '.1875em',
      verticalAlign: 'middle',
      borderRight: '.3125em solid transparent',
      borderLeft: '.3125em solid transparent',
      borderTop: direction === 'up' ? '.4375em solid' : null,
      borderBottom: direction === 'down' ? '.4375em solid' : null,
    }} />
)

Arrow.propTypes = {
  /** Direction of arrow */
  direction: React.PropTypes.oneOf(['up', 'down'])
}

Arrow.defaultProps = {
  direction: 'up'
}

export default Arrow

