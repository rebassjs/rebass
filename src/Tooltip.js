
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Styled tooltip that shows on hover
 */

const Tooltip = ({
  title,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const {
    fontSizes,
    scale,
    colors,
    borderRadius
  } = theme

  const cx = classnames('Tooltip', className)

  const css = `
    .Tooltip_box { display: none }
    .Tooltip:hover .Tooltip_box { display: block }
  `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

  const sx = {
    root: {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
      ...style
    },
    box: {
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      fontSize: fontSizes[6],
      whiteSpace: 'nowrap',
      paddingTop: scale[1] / 2,
      paddingBottom: scale[1] / 2,
      paddingLeft: scale[1],
      paddingRight: scale[1],
      borderRadius,
      transform: 'translate(-50%, -8px)',
      color: colors.white,
      backgroundColor: colors.black,
      ...style.fill,
      ...subComponentStyles.box
    },
    arrow: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      border: '6px solid transparent',
      borderTopColor: style.fill.backgroundColor || style.backgroundColor || colors.black,
      transform: 'translate(-50%, 0)',
      ...subComponentStyles.box
    }
  }

  return (
    <span
      className={cx}
      aria-label={title}
      style={sx.root}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div
        {...props}
        style={sx.box}
        className='Tooltip_box'>
        {title}
        <div className='Tooltip_arrow' style={sx.arrow} />
      </div>
      {children}
    </span>
  )
}

Tooltip.propTypes = {
  /** Text to display in tooltip */
  title: React.PropTypes.string
}

Tooltip._name = 'Tooltip'

export default withRebass(Tooltip)

