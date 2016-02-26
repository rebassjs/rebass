
import React from 'react'
import theme from './theme'

/**
 * Styled tooltip that shows on hover
 */

const Tooltip = ({ title, children, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const tooltipStyle = {
    ...theme.Tooltip,
    ...(rebass ? rebass.Tooltip : {}),
    ...style
  }
  const { scale } = config

  const {
    fontSize,
    color,
    backgroundColor,
    borderRadius
  } = tooltipStyle

  const css = `
    .Tooltip:hover::after {
      content: attr(title);
      white-space: nowrap;
      font-size: ${fontSize}px;
      box-sizing: border-box;
      display: block;
      padding: ${scale[1] / 2}px ${scale[1]}px;
      position: absolute;
      z-index: 4;
      bottom: 100%;
      left: 50%;
      color: ${color};
      background-color: ${backgroundColor};
      border-radius: ${borderRadius}px;
      transform: translateX(-50%) translateY(-${scale[1]}px);
    }
    .Tooltip:hover::before {
      content: '';
      position: absolute;
      z-index: 4;
      bottom: calc(100% - 4px);
      left: 50%;
      border: 6px solid transparent;
      border-top-color: ${backgroundColor};
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
        display: 'inline-block',
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
