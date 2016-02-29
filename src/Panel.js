
import React from 'react'
import theme from './theme'

/**
 * Panel for containing small pieces of information
 */

const Panel = ({ type, style, children ,...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Panel : {}
  const { scale, colors, borderRadius } = config

  const borderColor = colors[type]
  const styledChildren = React.Children.map(children, (child) => {
    if (child && child.props && child.props.type === 'default') {
      return React.cloneElement(child, { type })
    } else {
      return child
    }
  })

  return (
    <div
      {...props}
      className='Panel'
      style={{
        padding: scale[2],
        marginBottom: scale[2],
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor,
        borderRadius,
        ...customStyle,
        ...style
      }}
      children={styledChildren} />
  )
}

Panel.propTypes = {
  /** Sets border color based on type of panel */
  type: React.PropTypes.oneOf([
    'default',
    'info',
    'success',
    'warning',
    'error'
  ])
}

Panel.defaultProps = {
  type: 'default'
}

Panel.contextTypes = {
  rebass: React.PropTypes.object
}

export default Panel
