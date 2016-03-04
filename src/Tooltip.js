
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Styled tooltip that shows on hover
 */

const Tooltip = ({ title, children, ...props }, { rebass }) => {
  const { scale } = { ...config, ...rebass }

  const customStyle = {
    fontSize: config.fontSizes[6],
    color: config.colors.white,
    backgroundColor: config.colors.black,
    borderRadius: config.borderRadius
  }

  const {
    fontSize,
    color,
    backgroundColor,
    borderRadius
  } = customStyle

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
    <Base
      {...props}
      tagName='span'
      className='Tooltip'
      title={title}
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
      }}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {children}
    </Base>
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
