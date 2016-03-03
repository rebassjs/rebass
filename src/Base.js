
import React from 'react'
import addContext from './util/add-context'
import margins from './util/margins'
import padding from './util/padding'
import radii from './util/radii'
import colorStyle from './util/color-style'
import theme from './theme'

// - Add color props
// - Add backgroundColor props

const Base = ({
  tagName,
  baseStyle,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const name = props.className
  const key = name ? name.split(' ', 1)[0] : ''
  const contextStyle = rebass ? rebass[key] : {}
  const Component = tagName || 'div'

  const { scale, colors, borderRadius } = config

  const sx = {
    ...baseStyle,
    ...contextStyle,
    ...margins(props, scale),
    ...padding(props, scale),
    ...colorStyle(props, colors),
    ...radii(props, borderRadius),
    ...style
  }

  return <Component {...props} style={sx} />
}

Base.propTypes = {
  /** HTML element string or React component to render */
  tagName: React.PropTypes.oneOfType(
  ),
  /** Used to pull styles from the rebass context object */
  className: React.PropTypes.string,
  /** Base component styles */
  baseStyle: React.PropTypes.object,
  /** Styles from component instance - overrides base and context styles */
  style: React.PropTypes.object,

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

// This currently hides Base component from react-docgen
export default addContext(Base)

