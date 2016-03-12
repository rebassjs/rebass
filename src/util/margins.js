
import assign from 'object-assign'

/**
 * Utility for extracting margin props from components
 */

const n = (key, x, s) => typeof x === 'number' ? { [key]: s[x] } : null

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

  const result = assign({},
    n('margin', m, s),
    n('marginTop', mt, s),
    n('marginBottom', mb, s),
    n('marginTop', my, s),
    n('marginBottom', my, s),
    n('marginLeft', ml, s),
    n('marginRight', mr, s),
    n('marginLeft', mx, s),
    n('marginRight', mx, s)
  )

  return result
}

export default margins

