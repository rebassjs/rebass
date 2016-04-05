
import React from 'react'
import Base from './Base'
import mergeClassName from './util/mergeClassName'

/**
 * A button with an × for close and dismiss actions
 */

const Close = ({ ...props }, { rebass }) => {
  return (
    <Base {...props}
      tagName='button'
      className={mergeClassName(props, 'Close')}
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

