
import React from 'react'
import Base from './Base'

/** Arrow for use in dropdowns and other UI elements */

const Arrow = ({ direction, children, ...props }, { rebass }) => {
  return (
    <Base
      {...props}
      className='Arrow'
      baseStyle={{
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: '.5em',
        verticalAlign: 'middle',
        borderRight: '.3125em solid transparent',
        borderLeft: '.3125em solid transparent',
        borderTop: direction === 'down' ? '.4375em solid' : null,
        borderBottom: direction === 'up' ? '.4375em solid' : null
      }} />
  )
}

Arrow.propTypes = {
  /** Direction of arrow */
  direction: React.PropTypes.oneOf(['up', 'down'])
}

Arrow.defaultProps = {
  direction: 'down'
}

Arrow.contextTypes = {
  rebass: React.PropTypes.object
}

export default Arrow

