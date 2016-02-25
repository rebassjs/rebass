
import React from 'react'
import theme from './theme'

/**
 * Label element for form controls
 */

const Label = ({ style, ...props }, context) => {
  const config = Object.assign({}, theme, context.rebass)
  const { fontSizes } = config

  return <label
    {...props}
    style={{
      ...style,
      fontSize: fontSizes[5],
      fontWeight: 'bold'
    }} />
}

Label.contextTypes = {
  rebass: React.PropTypes.object
}

export default Label

