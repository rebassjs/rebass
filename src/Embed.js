
import React from 'react'
import Base from './Base'

/**
 * Responsive media embed wrapper
 */

const Embed = ({ ratio, children, ...props }, { rebass }) => {
  const childProps = {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      bottom: 0,
      left: 0,
      border: 0
    }
  }

  const styledChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, childProps)
  })

  return (
    <Base
      {...props}
      className='Embed'
      children={styledChildren}
      baseStyle={{
        position: 'relative',
        height: 0,
        padding: 0,
        paddingBottom: `${ratio * 100}%`,
        overflow: 'hidden'
      }} />
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

Embed.contextTypes = {
  rebass: React.PropTypes.object
}

export default Embed

