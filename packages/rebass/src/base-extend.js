
import { Box, Flex } from '@rebass/grid'
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

export const Text = Base.extend({
  key: 'text',
})

export const Heading = Base.extend({
  key: 'text',
  tag: 'h2',
  sx: {
    m: 0,
    fontSize: 4,
    fontWeight: 'heading',
  }
})

export const Link = Base.extend({
  key: 'text',
  sx: {
    color: 'primary',
  }
})

export const Button = Base.extend({
  key: 'buttons',
  tag: 'button',
  variant: 'primary',
  sx: {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    fontSize: 'inherit',
    m: 0,
    px: 3,
    py: 2,
    bg: 'primary',
    border: 0,
  }
})

export const Image = Base.extend({
  key: 'images',
  tag: 'img',
  sx: {
    maxWidth: '100%',
    height: 'auto',
    m: 0,
  }
})

export const Card = Base.extend({ key: 'cards' })

