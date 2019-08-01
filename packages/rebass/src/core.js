/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box } from '@rebass/grid'

export const Text = ({
  variant,
  sx,
  ...props
}) =>
  <Box
    {...props}
    sx={{
      variant: `text.${variant}`,
      ...sx,
    }}
  />

export const Heading = ({
  variant,
  sx,
  ...props
}) =>
  <Box
    as='h2'
    {...props}
    sx={{
      m: 0,
      fontSize: 4,
      fontWeight: 'heading',
      variant: `text.${variant}`,
      ...sx,
    }}
  />

export const Link = ({
  variant,
  sx,
  ...props
}) =>
  <Box
    as='a'
    {...props}
    sx={{
      color: 'primary',
      variant: `text.${variant}`,
      ...sx,
    }}
  />

export const Button = ({
  variant,
  sx,
  ...props
}) =>
  <Box
    as='button'
    {...props}
    sx={{
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      m: 0,
      px: 3,
      py: 2,
      bg: 'gray',
      border: 0,
      variant: `buttons.${variant}`,
      ...sx
    }}
  />

export const Image = ({
  variant,
  sx,
  ...props
}) =>
  <Box
    as='img'
    {...props}
    sx={{
      maxWidth: '100%',
      height: 'auto',
      m: 0,
      variant: `images.${variant}`,
      ...sx
    }}
  />

export const Card = ({
  variant,
  ...props
}) =>
  <Box
    {...props}
    sx={{
      variant: `cards.${variant}`
    }}
  />
