
import React from 'react'
import addContext from './util/add-context'
import margins from './util/margins'
import padding from './util/padding'
import radii from './util/radii'
import theme from './theme'

const Base = ({
  tagName,
  componentName,
  style,
  customStyle,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const contextStyle = rebass ? rebass[componentName] : {}
  const Component = tagName || 'div'

  const { scale, borderRadius } = config

  const sx = {
    ...style,
    ...contextStyle,
    ...margins(props, scale),
    ...padding(props, scale),
    ...radii(props, borderRadius),
    ...customStyle
  }

  return <Component {...props} style={sx} />
}

Base.propTypes = {
  tagName: React.PropTypes.string,
  componentName: React.PropTypes.string,
  style: React.PropTypes.object,
  customStyle: React.PropTypes.object,

  /** Applies margin with the margin utility based on the theme spacing scale */
  m: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin top based on the theme spacing scale */
  mt: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin right based on the theme spacing scale */
  mr: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin bottom based on the theme spacing scale */
  mb: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin left based on the theme spacing scale */
  ml: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin left and right based on the theme spacing scale */
  mx: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin top and bottom based on the theme spacing scale */
  my: React.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Applies padding with the padding utility based on the theme spacing scale */
  p: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding top based on the theme spacing scale */
  pt: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding right based on the theme spacing scale */
  pr: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding bottom based on the theme spacing scale */
  pb: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding left based on the theme spacing scale */
  pl: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding left and right based on the theme spacing scale */
  px: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding top and bottom based on the theme spacing scale */
  py: React.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Controls border radius */
  rounded: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left'
    ])
  ])
}

Base.contextTypes = {
  rebass: React.PropTypes.object
}

export default Base

