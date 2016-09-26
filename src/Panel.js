
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import PanelHeader from './PanelHeader'
import PanelFooter from './PanelFooter'

/**
 * Panel for containing small pieces of information
 */

const Panel = ({
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, colors, borderRadius } = theme

  const cx = classnames('Panel', className)

  const {
    color,
    backgroundColor,
    borderColor,
    ...rootStyle
  } = style

  const sx = {
    padding: scale[2],
    marginBottom: scale[2],
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius,
    borderColor: borderColor || colors.primary,
    ...rootStyle
  }

  const styledChildren = React.Children.map(children, (child) => {
    if (child.type === PanelHeader) {
      return React.cloneElement(child, {
        style: {
          color,
          backgroundColor,
          borderColor
        }
      })
    } else if (child.type === PanelFooter) {
      return React.cloneElement(child, {
        style: {
          color: backgroundColor,
          borderColor
        }
      })
    } else {
      return child
    }
  })

  return (
    <div
      {...props}
      className={cx}
      style={sx}
      children={styledChildren} />
  )
}

export default withRebass(Panel)

