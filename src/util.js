// replace with get?
export const idx = (props, obj) => {
  const keys = typeof props === 'string' ? props.split('.') : props
  return keys.reduce((a, b) => (a && a[b]) ? a[b] : null, obj)
}

export const px = n => typeof n === 'number' ? n + 'px' : n

export const color = props => (n = 'blue') => idx([ 'colors', n ], props.theme) || n

export const darken = n => `rgba(0, 0, 0, ${n})`

export const caps = props => props.caps ? ({
  textTransform: 'uppercase',
  letterSpacing: '.2em'
}) : {}

export const align = props => {
  if (props.left) return 'left'
  if (props.center) return 'center'
  if (props.right) return 'right'
  if (props.justify) return 'justify'
  return null
}

export const fontWeight = props => {
  const fw = props.fw || props.fontWeight;
  if (props.fw === 0 || props.fontWeight === 0) return idx('weights.0', props.theme)
  if (props.bold) return idx('weights.1', props.theme)
  if (typeof fw === 'string') return fw
  if (typeof fw === 'number') return idx('weights.'+fw, props.theme)
  return null
}

export const bold = props => idx('weights.1', props.theme)

export default {
  idx,
  px,
  color,
  darken,
  caps,
  align
}
