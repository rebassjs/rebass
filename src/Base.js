
import React from 'react'
import assign from 'object-assign'
import margins from './util/margins'
import padding from './util/padding'
import radii from './util/radii'
import colorStyle from './util/color-style'
import config from './config'

/**
 * The Base component is internally used by all other Rebass components
 * and provides an API to apply padding, margin, color, background-color,
 * border-radius and other styles to any component.
 * All props for the Base component are available to other Rebass components to help with contextual styling.
 * It is not intended for use directly, but it can be used to create other custom components.
 */

const Base = ({
  tagName,
  is,
  baseStyle,
  style,
  ...props
}, { rebass }) => {
  const { scale, colors, borderRadius } = { ...config, ...rebass }
  const name = props.className
  const keys = name ? name.split(' ') : []
  const contextStyle = keys.reduce((a, key) => (assign(a, (rebass ? rebass[key] : {}))), {})

  // Backwards compatibility for Component prop
  // This will be deprecated in the next version
  const Component = is || props.Component || tagName || 'div'

  const sx = assign(
    { boxSizing: 'border-box' },
    baseStyle,
    contextStyle,
    margins(props, scale),
    padding(props, scale),
    colorStyle(props, colors, rebass),
    radii(props, borderRadius),
    style
  )

  return <Component {...props} style={sx} />
}

Base.propTypes = {
  /** HTML element string or React component to render */
  is: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.func,
    React.PropTypes.element
  ]),
  tagName: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.func,
    React.PropTypes.element
  ]),
  /** Used to pull styles from the rebass context object */
  className: React.PropTypes.string,
  /** Base component styles */
  baseStyle: React.PropTypes.object,
  /** Styles from component instance - overrides base and context styles */
  style: React.PropTypes.object,

  /** Applies margin with the margin utility based on the spacing scale */
  m: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin top based on the spacing scale */
  mt: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin right based on the spacing scale */
  mr: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin bottom based on the spacing scale */
  mb: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin left based on the spacing scale */
  ml: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin left and right based on the spacing scale */
  mx: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies margin top and bottom based on the spacing scale */
  my: React.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Applies padding with the padding utility based on the spacing scale */
  p: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding top based on the spacing scale */
  pt: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding right based on the spacing scale */
  pr: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding bottom based on the spacing scale */
  pb: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding left based on the spacing scale */
  pl: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding left and right based on the spacing scale */
  px: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  /** Applies padding top and bottom based on the spacing scale */
  py: React.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Text color - can either be a key from the config colors object or any color value */
  color: React.PropTypes.string,
  /** Background color - can either be a key from the config colors object or any color value */
  backgroundColor: React.PropTypes.string,
  /** Sets color from config */
  theme: React.PropTypes.oneOf([
    'primary',
    'secondary',
    'default',
    'info',
    'success',
    'warning',
    'error'
  ]),
  /** Inverts colors from theme */
  inverted: React.PropTypes.bool,
  /** Controls border radius */
  rounded: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left'
    ])
  ]),
  /** Sets border radius 99999 */
  circle: React.PropTypes.bool,
  /** Sets border radius 99999 */
  pill: React.PropTypes.bool
}

Base.contextTypes = {
  rebass: React.PropTypes.object
}

export default Base

