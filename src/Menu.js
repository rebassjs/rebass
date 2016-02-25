
import React from 'react'

/**
 * Menu component for navigation links and actions
 */

const Menu = ({ backgroundColor, borderColor, style, ...props }) => (
  <div
    {...props}
    className='Menu'
    style={{
      ...style,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 2,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor,
      backgroundColor
    }} />
)

Menu.propTypes = {
  /** Background color */
  backgroundColor: React.PropTypes.string,
  /** Border color */
  borderColor: React.PropTypes.string,
}

Menu.defaultProps = {
  backgroundColor: 'white',
  borderColor: '#ccc',
}

export default Menu

