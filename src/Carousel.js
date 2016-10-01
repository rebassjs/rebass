
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Carousel that wraps children and displays one at a time
 */

const Carousel = ({
  index,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const length = props.children ? (props.children.length || 0) : 0

  const cx = classnames('Carousel', className)

  const sx = {
    root: {
      overflow: 'hidden',
      ...style
    },
    inner: {
      whiteSpace: 'nowrap',
      height: '100%',
      transition: 'transform .2s ease-out',
      transform: `translateX(${index % length * -100}%)`,
      ...subComponentStyles.inner
    },
    child: {
      display: 'inline-block',
      verticalAlign: 'middle',
      whiteSpace: 'normal',
      width: '100%',
      height: '100%',
      ...subComponentStyles.child
    }
  }

  const children = React.Children.map(props.children, (child, i) => {
    return (
      <div style={sx.child}>
        {child}
      </div>
    )
  })

  return (
    <div
      {...props}
      className={cx}
      style={sx.root}>
      <div style={sx.inner}>
        {children}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  /** Index for the child to show */
  index: React.PropTypes.number
}

Carousel._name = 'Carousel'

export default withRebass(Carousel)

