
import React from 'react'

/**
 * A button with an × for close and dismiss actions
 */

const Close = ({ style, ...props }, { rebass }) => {
  const customStyle = rebass ? rebass.Close : {}

  return (
    <button {...props}
      className='Close'
      title='Close'
      style={{
        fontSize: '1.5em',
        lineHeight: 1,
        fontWeight: 'bold',
        margin: 0,
        padding: 0,
        cursor: 'pointer',
        color: 'inherit',
        backgroundColor: 'transparent',
        border: 0,
        WebkitAppearance: 'none',
        ...customStyle,
        ...style
      }}
      children='×' />
  )
}

Close.contextTypes = {
  rebass: React.PropTypes.object
}

export default Close

