
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/** List component that accepts any child component item types */

const List = ({
  ordered,
  reset,
  flush,
  className,
  style,
  theme,
  subComponentStyles,
  children,
  ...props
}) => {
  const { scale } = theme
  const Comp = ordered ? 'ol' : 'ul'
  const cx = classnames('List', className)

  flush = flush || reset

  const sx = {
    root: {
      paddingLeft: flush ? 0 : scale[2],
      margin: 0,
      listStyle: reset ? 'none' : null
    },
    item: {
      marginBottom: scale[1]
    }
  }

  const wrappedChildren = React.Children.map(children, child => {
    if (child.type === 'li') {
      return child
    }

    return <li style={sx.item}>{child}</li>
  })

  return (
    <Comp
      {...props}
      className={cx}
      style={sx.root}>
      {wrappedChildren}
    </Comp>
  )
}

List.propTypes = {
  /** Changes the root component to an ordered list */
  ordered: React.PropTypes.bool,
  /** Removes padding left to keep text flush-left */
  flush: React.PropTypes.bool,
  /** Removes list styling */
  reset: React.PropTypes.bool
}

List._name = 'List'

export default withRebass(List)

