
import React from 'react'

const Close = ({ style, ...props }, { rebass }) => {
  const customStyle = rebass ? rebass.Close : {}

  return (
    <button {...props}
      className='Close'
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

