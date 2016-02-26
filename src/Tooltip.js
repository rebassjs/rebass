
import React from 'react'
import theme from './theme'

/**
 * Styled tooltip that shows on hover
 */

const Tooltip = ({ title, children, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, fontSizes, borderRadius, colors } = config

  const css = `
    .Tooltip:hover::after {
      content: attr(title);
      white-space: nowrap;
      font-size: ${fontSizes[5]};
      display: block;
      padding: 0 ${scale[1]}px;
      position: absolute;
      bottom: calc(100% + ${scale[1]}px);
      left: 50%;
      color: ${colors.white};
      background-color: ${colors.black};
      border-radius: ${borderRadius}px;
      transform: translateX(-50%);
    }
    .Tooltip:hover::before {
      content: '';
      position: absolute;
      bottom: calc(100% - 4px);
      left: 50%;
      border: 6px solid transparent;
      border-top-color: ${colors.black};
      transform: translateX(-50%);
    }
  `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

  return (
    <span
      {...props}
      className='Tooltip'
      title={title}
      style={{
        position: 'relative',
        cursor: 'pointer',
        ...style
      }}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {children}
    </span>
  )
}

Tooltip.propTypes = {
  /** Text to display in tooltip */
  title: React.PropTypes.string
}

Tooltip.contextTypes = {
  rebass: React.PropTypes.object
}

export default Tooltip
