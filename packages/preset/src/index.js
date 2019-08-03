// default theme preset

export const preset = {
  // add to theme-ui preset
  colors: {
    text: '#000',
    background: '#fff',
    background: '#fff',
    gray: '#dddddf',
  },
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },
  // rebass variants
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card',
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary',
      }
    },
  },
  text: {
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [ 5, 6, 7 ],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  buttons: {
    primary: {
      fontSize: 1,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
    },
    secondary: {
      fontSize: 1,
      fontWeight: 'bold',
      color: 'background',
      bg: 'secondary',
      borderRadius: 'default',
    },
  },
  forms: {
    field: {
      borderColor: 'gray',
      color: 'text',
      bg: 'background',
      mb: 3,
      ':focus': {
        borderColor: 'primary',
        outline: 'none',
        boxShadow: t => `0 0 2px ${t.colors.primary}`,
      },
    },
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      variant: 'forms.field',
    },
    select: {
      variant: 'forms.field',
    },
    textarea: {
      variant: 'forms.field',
    },
    radio: {},
    checkbox: {},
  },
}

export default preset
