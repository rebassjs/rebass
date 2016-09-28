
import React from 'react'
import withRebass from './withRebass'
import classnames from 'classnames'
import {
  Button,
  ButtonOutline,
  Input,
  Select
} from './index'

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
    const childProps = {}

    if (child.type === Button ||
        child.type === ButtonOutline ||
        child.type === Input ||
        child.type === Select) {
      childProps.rounded = i === 0
        ? 'left'
        : i === props.children.length - 1
        ? 'right'
        : false
    }

    if (child.type === Input || child.type === Select) {
      childProps.hideLabel = true
      childProps.mb = 0
    }

    if (child.type === ButtonOutline ||
        child.type === Input ||
        child.type === Select) {
      childProps.style = {
        ...child.props.style,
        marginLeft: -1
      }
    }

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

Group._name = 'Group'

export default withRebass(Group)

