
import React from 'react'
import Base from './Base'

/**
 * A button with an × for close and dismiss actions
 */

const Close = ({ ...props }, { rebass }) => {
  return (
    <Base {...props}
      tagName='button'
      className='Close'
      title='Close'
      baseStyle={{
        fontSize: '1.5em',
        lineHeight: 1,
        fontWeight: 'bold',
        margin: 0,
        padding: 0,
        cursor: 'pointer',
        color: 'inherit',
        backgroundColor: 'transparent',
        border: 0,
        WebkitAppearance: 'none'
      }}
      children='×' />
  )
}

Close.contextTypes = {
  rebass: React.PropTypes.object
}

export default Close

