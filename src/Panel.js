
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

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

  const borderColor = colors.primary // colors[theme]

  const sx = {
    padding: scale[2],
    marginBottom: scale[2],
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor,
    borderRadius,
    backgroundColor: colors.white,
    ...style
  }

  const styledChildren = React.Children.map(children, (child) => {
    // To do: handle theme props
    if (child && child.props && child.props.theme === 'default') {
      return React.cloneElement(child, {
        // color,
        // backgroundColor
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

