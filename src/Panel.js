
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Panel for containing small pieces of information
 */

const Panel = ({ type, children, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
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
    <Base
      {...props}
      className='Panel'
      baseStyle={{
        padding: scale[2],
        marginBottom: scale[2],
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor,
        borderRadius
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
  type: 'default',
  backgroundColor: 'white'
}

Panel.contextTypes = {
  rebass: React.PropTypes.object
}

export default Panel
