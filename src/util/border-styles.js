
import assign from 'object-assign'

/**
 * Utility for extracting border style props from components
 */

const sides = ['', 'Top', 'Right', 'Bottom', 'Left']

function borderStyles (props) {
  props = props || {}

  return assign({}, ...sides.map(side => {
    const attr = `border${side}`
    const value = props[attr]

    if (value === undefined) {
      return {}
    } else if (typeof value === 'number') {
      return {
        [`${attr}Style`]: 'solid',
        [`${attr}Width`]: value + 'px'
      }
    } else {
      return {
        [`${attr}Style`]: value ? 'solid' : 'none'
      }
    }
  }))
}

export default borderStyles
