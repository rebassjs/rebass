
import assign from 'object-assign'

/**
 * Utility for extracting padding props from components
 */

const n = (key, x, s) => typeof x === 'number' ? { [key]: s[x] } : null

function padding (props, scale) {
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

  const result = assign({},
    n('padding', p, s),
    n('paddingTop', pt, s),
    n('paddingBottom', pb, s),
    n('paddingTop', py, s),
    n('paddingBottom', py, s),
    n('paddingLeft', pl, s),
    n('paddingRight', pr, s),
    n('paddingLeft', px, s),
    n('paddingRight', px, s)
  )

  return result
}

export default padding

