
import React from 'react'
import config from './config'

/**
 * Label element for form controls
 */

const Label = ({ style, ...props }) => {
  const { typeScale } = config

  return <label
    {...props}
    style={{
      ...style,
      fontSize: typeScale[5],
      fontWeight: 'bold'
    }} />
}

export default Label

