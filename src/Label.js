
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Label element for form controls
 */

const Label = ({
  hide,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { fontSizes, bold } = config

  const hideStyle = hide ? {
    position: 'absolute',
    height: 1,
    width: 1,
    overflow: 'hidden',
    clip: 'rect(1px, 1px, 1px, 1px)'
  } : {}

  return (
    <Base
      {...props}
      tagName='label'
      className='Label'
      baseStyle={{
        fontSize: fontSizes[5],
        fontWeight: bold,
        ...hideStyle
      }} />
  )
}

Label.propTypes = {
  /** Accessibly hide label for use in high density UI.
   *  This can still cause accessibility issues. Use this with caution.
   */
  hide: React.PropTypes.bool
}

Label.contextTypes = {
  rebass: React.PropTypes.object
}

export default Label

