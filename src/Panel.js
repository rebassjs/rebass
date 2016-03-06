
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Panel for containing small pieces of information
 */

const Panel = ({ theme, children, ...props }, { rebass }) => {
  const { scale, colors, borderRadius } = { ...config, ...rebass }

  const borderColor = colors[theme]
  const styledChildren = React.Children.map(children, (child) => {
    if (child && child.props && child.props.theme === 'default') {
      return React.cloneElement(child, { theme })
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
        borderRadius,
        backgroundColor: colors.white
      }}
      children={styledChildren} />
  )
}

Panel.propTypes = {
  /** Sets color from config */
  theme: React.PropTypes.oneOf([
    'primary',
    'secondary',
    'default',
    'info',
    'success',
    'warning',
    'error'
  ])
}

Panel.defaultProps = {
  theme: 'default'
}

Panel.contextTypes = {
  rebass: React.PropTypes.object
}

export default Panel

