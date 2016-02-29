
/**
 * Utility for extracting margin props from components
 */

const n = (x) => typeof x === 'number'

function margins (props, scale) {
  const s = scale || []
  const {
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml
  } = props || {}
  const result = {}

  if(n(m)) {
    result.margin = s[m]
  }

  if (n(my)) {
    result.marginTop = s[my]
    result.marginBottom = s[my]
  } else {
    if (n(mt)) {
      result.marginTop = s[mt]
    }
    if (n(mb)) {
      result.marginBottom = s[mb]
    }
  }

  if (n(mx)) {
    result.marginLeft = s[mx]
    result.marginRight = s[mx]
  } else {
    if (n(ml)) {
      result.marginLeft = s[ml]
    }
    if (n(mr)) {
      result.marginRight = s[mr]
    }
  }

  return result
}

export default margins

