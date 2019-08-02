import { jsx, ThemeProvider } from 'theme-ui'
import preset from './preset'

export const Box = ({
  as = 'div',
  sx,
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  color, bg,
  ...props
}) =>
  jsx(as, {
    ...props,
    sx: {
      ...sx,
      m, mt, mr, mb, ml, mx, my,
      p, pt, pr, pb, pl, px, py,
      color, bg,
    }
  })

export const Root = ({
  sx,
  ...props
}) => jsx(Box, {
  ...props,
  sx: {
    variant: 'styles.root',
    ...sx
  }
})

export const Text = ({
  variant,
  sx,
  ...props
}) => jsx(Box, {
  ...props,
  sx: {
    variant: `text.${variant}`,
    ...sx
  }
})

export const Heading = ({
  as = 'h2',
  sx,
  variant = 'heading',
  ...props
}) => jsx(Box, {
  ...props,
  as,
  sx: {
    variant: `text.${variant}`,
    ...sx
  }
})

export const Link = ({
  as = 'a',
  sx,
  variant = 'link',
  ...props
}) => jsx(Box, {
  ...props,
  as,
  sx: {
    variant: `text.${variant}`,
    ...sx
  }
})

export const Button = ({
  as = 'button',
  sx,
  variant = 'primary',
  ...props
}) => jsx(Box, {
  ...props,
  as,
  sx: {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    fontSize: 'inherit',
    fontWeight: 'bold',
    m: 0,
    px: 3,
    py: 2,
    color: 'background',
    bg: 'primary',
    border: 0,
    borderRadius: 'default',
    variant: `buttons.${variant}`,
    ...sx
  }
})

export const Image = ({
  as = 'img',
  variant,
  sx,
  ...props
}) => jsx(Box, {
  ...props,
  as,
  sx: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    variant: `images.${variant}`,
    ...sx
  }
})

export const Card = ({
  sx,
  variant = 'default',
  ...props,
}) => jsx(Box, {
  ...props,
  sx: {
    variant: `cards.${variant}`,
    ...sx,
  }
})


export {
  ThemeProvider,
  preset,
}
