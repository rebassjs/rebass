
import React from 'react'
import withRebass from './withRebass'
import classnames from 'classnames'

/**
 * Wrapper component to control border radii and alignment of child button components
 */

const Group = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const cx = classnames('Group', className)

  const sx = {
    root: {
      display: 'flex',
      alignItems: 'center',
      ...style
    },
    child: {
    }
  }

  const children = React.Children.map(props.children, (child, i) => {
    const name = child.type.displayName
    const childProps = {}

    if (/^Button$|^ButtonOutline$|^Input$/.test(name)) {
      childProps.rounded = i === 0
        ? 'left'
        : i === props.children.length - 1
        ? 'right'
        : false
    }

    if (/^Input$/.test(name)) {
      childProps.hideLabel = true
      childProps.mb = 0
    }
    // Handle child elements with border.. ml -1

    return React.cloneElement(child, childProps)
  })

  return (
    <div
      {...props}
      className={cx}
      style={sx.root}
      children={children}
    />
  )
}

export default withRebass(Group)

