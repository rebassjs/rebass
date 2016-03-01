
/**
 * Utility for extracting padding props from components
 */

const n = (x) => typeof x === 'number'

function padding(props, scale) {
  const s = scale || []
  const {
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl
  } = props || {}
  const result = {}

  if(n(p)) {
    result.padding = s[p]
  }

  if (n(py)) {
    result.paddingTop = s[py]
    result.paddingBottom = s[py]
  } else {
    if (n(pt)) {
      result.paddingTop = s[pt]
    }
    if (n(pb)) {
      result.paddingBottom = s[pb]
    }
  }

  if (n(px)) {
    result.paddingLeft = s[px]
    result.paddingRight = s[px]
  } else {
    if (n(pl)) {
      result.paddingLeft = s[pl]
    }
    if (n(pr)) {
      result.paddingRight = s[pr]
    }
  }

  return result
}

export default padding

