
import React from 'react'
import theme from './theme'

/**
 * Menu component for navigation links and actions
 */

const Menu = ({ backgroundColor, borderColor, style, ...props }, context) => {
  const config = Object.assign({}, theme, context.rebass)

  return (
    <div
      {...props}
      className='Menu'
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: borderColor || config.borderColor,
        backgroundColor,
        ...style
      }} />
  )
}

Menu.propTypes = {
  /** Background color */
  backgroundColor: React.PropTypes.string,
  /** Border color */
  borderColor: React.PropTypes.string,
}

Menu.defaultProps = {
  backgroundColor: 'white'
}

export default Menu

