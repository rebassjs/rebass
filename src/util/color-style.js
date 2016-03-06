
/**
 * Utility for extracting color and backgroundColor props from components
 */

function colorStyle (props, colors, context) {
  colors = colors || {}
  const {
    color,
    backgroundColor,
    theme,
    inverted
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

  if (theme && colors[theme]) {
    const invertedColor = context && context.inverted
    if (inverted) {
      result.color = invertedColor || colors.white
      result.backgroundColor = colors[theme]
    } else {
      result.color = colors[theme]
    }
  }

  return result
}

export default colorStyle

