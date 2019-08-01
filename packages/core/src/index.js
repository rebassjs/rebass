import { jsx } from 'theme-ui'
import { forwardRef } from 'react'

const getVariant = (key, name) => [key, name].filter(Boolean).join('.')

export const Base = forwardRef(({
  __rebass = {},
  as,
  sx,
  variant,
  ...props
}, ref) => jsx(as || __rebass.tag || 'div', {
  ref,
  ...props,
  sx: {
    ...__rebass.sx,
    variant: getVariant(__rebass.key, variant),
    ...sx
  }
}))

Base.extend = (opts) => {
  const Component = forwardRef((props, ref) =>
    jsx(Base, {
      ref,
      ...props,
      __rebass: opts
    })
  )
  // Component.displayName = opts.name
  Component.defaultProps = {
    variant: opts.variant,
  }

  return Component
}

export default Base
