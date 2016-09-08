
import assign from 'object-assign'

/**
 * Utility for extracting border style props from components
 */

const sides = ['Top', 'Right', 'Bottom', 'Left']

function borderStyle (props) {
  props = props || {}

  const borderStyle = props.border ? 'solid' : 'none'

  return sides.reduce((acc, side) => {
    const hasBorder = props[`border${side}`]

    return assign({}, acc, hasBorder !== undefined && {
      [`border${side}Style`]: hasBorder ? 'solid' : 'none'
    })
  }, { borderStyle })
}

export default borderStyle
