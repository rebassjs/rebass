
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Responsive media embed wrapper
 */

const Embed = ({
  ratio,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const cx = classnames('Embed', className)

  const sx = {
    position: 'relative',
    height: 0,
    padding: 0,
    paddingBottom: `${ratio * 100}%`,
    overflow: 'hidden',
    ...style
  }

  const childProps = {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      bottom: 0,
      left: 0,
      border: 0,
      ...subComponentStyles.children
    }
  }

  const styledChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, childProps)
  })

  return (
    <div
      {...props}
      className={cx}
      children={styledChildren}
      style={sx} />
  )
}

Embed.propTypes = {
  /**
   * Aspect ratio for the embed.
   * Divide height over width to calculate.
   * E.g. ratio={9/16}
   */
  ratio: React.PropTypes.number
}

Embed.defaultProps = {
  ratio: 9 / 16
}

Embed._name = 'Embed'

export default withRebass(Embed)

