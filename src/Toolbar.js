
import React from 'react'
import theme from './theme'

/**
 * Toolbar component that vertically centers children with display flex
 */

const Toolbar = ({ color, backgroundColor, style, ...props }, context) => {
  const config = Object.assign({}, theme.Toolbar, context.rebass.Toolbar)

  return (
    <div
      {...props}
      className='Toolbar'
      style={{
        ...style,
        display: 'flex',
        alignItems: 'center',
        minHeight: 48,
        paddingTop: 4,
        paddingBottom: 4,
        color: color || config.color,
        backgroundColor: backgroundColor || config.backgroundColor
      }} />
  )
}

Toolbar.propTypes = {
  /** Foreground color */
  color: React.PropTypes.string,
  /** Background color */
  backgroundColor: React.PropTypes.string,
}

Toolbar.contextTypes = {
  rebass: React.PropTypes.object
}

export default Toolbar
