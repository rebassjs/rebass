
import React from 'react'

/**
 * Toolbar component that vertically centers children with display flex
 */

const Toolbar = ({ color, backgroundColor, style, ...props }) => (
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
      color,
      backgroundColor
    }} />
)

Toolbar.propTypes = {
  /** Foreground color */
  color: React.PropTypes.string,
  /** Background color */
  backgroundColor: React.PropTypes.string,
}

Toolbar.defaultProps = {
  color: 'inherit',
  backgroundColor: '#ddd'
}

export default Toolbar
