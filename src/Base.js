
import React from 'react'
import addContext from './util/add-context'
import margins from './util/margins'
import theme from './theme'

const Base = ({ tagName, componentName, style, customStyle, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const contextStyle = rebass ? rebass[componentName] : {}
  const Component = tagName || 'div'

  const { scale } = config

  const sx = {
    ...style,
    ...contextStyle,
    ...margins(props, scale),
    ...customStyle
  }

  return <Component {...props} style={sx} />
}

Base.propTypes = {
  tagName: React.PropTypes.string,
  componentName: React.PropTypes.string,
  style: React.PropTypes.object,
  customStyle: React.PropTypes.object
}

Base.contextTypes = {
  rebass: React.PropTypes.object
}

export default Base

