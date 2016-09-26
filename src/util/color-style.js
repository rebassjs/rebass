
/**
 * Utility for extracting color and backgroundColor props from components
 *
 * @method colorStyle
 * @param {Object} colors Color palette
 * @returns {Function} getColorStyle
 * @param {Object} props Style props from component
 */

const colorStyle = colors => props => {
  colors = colors || {}
  const {
    color,
    backgroundColor
  } = props || {}
  const result = {}

  if (color && colors[color]) {
    result.color = colors[color]
  } else if (typeof color === 'string') {
    result.color = color
  }

  if (backgroundColor && colors[backgroundColor]) {
    result.backgroundColor = colors[backgroundColor]
  } else if (typeof backgroundColor === 'string') {
    result.backgroundColor = backgroundColor
  }

  return result
}

export default colorStyle

