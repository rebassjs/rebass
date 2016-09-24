
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

const List = ({
  reset,
  flush,
  className,
  style,
  theme,
  subComponentStyles,
  children,
  ...props
}) => {
  const { space } = theme
  const cx = classnames('List', className)

  flush = flush || reset

  // to do: style padding/indent based on space
  const sx = {
    root: {
      paddingLeft: flush ? 0 : null,
      listStyle: reset ? 'none' : null
    },
    item: {
    }
  }

  const wrappedChildren = React.Children.map(children, child => {
    if (child.type === 'li') {
      return child
    }

    return <li style={sx.item}>{child}</li>
  })

  return (
    <ul
      {...props}
      className={cx}
      style={sx.root}>
      {wrappedChildren}
    </ul>
  )
}

export default withRebass(List)

