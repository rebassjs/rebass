
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import getColorTheme from './util/get-color-theme'

/**
 * Panel for containing small pieces of information
 */

const Panel = ({
  children,
  colorTheme,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, colors, borderRadius } = theme

  const cx = classnames('Panel', className)

  const { color } = getColorTheme(colors)(colorTheme)

  const sx = {
    padding: scale[2],
    marginBottom: scale[2],
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius,
    borderColor: color,
    ...style
  }

  const styledChildren = React.Children.map(children, (child) => {
    if (/^Panel/.test(child.type.displayName)) {
      return React.cloneElement(child, {
        colorTheme
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

