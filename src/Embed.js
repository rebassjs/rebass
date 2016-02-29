
import React from 'react'
import theme from './theme'

/**
 * Responsive media embed wrapper
 */

const Embed = ({ ratio, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Embed : {}
  const { scale } = config

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

  const children = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, childProps)
  })

  return (
    <div
      {...props}
      className='Embed'
      children={children}
      style={{
        position: 'relative',
        height: 0,
        padding: 0,
        paddingBottom: `${ratio * 100}%`,
        marginBottom: scale[2],
        overflow: 'hidden',
        ...customStyle,
        ...style
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
  ratio: 9/16
}

Embed.contextTypes = {
  rebass: React.PropTypes.object
}

export default Embed

