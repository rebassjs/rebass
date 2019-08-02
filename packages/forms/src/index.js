
export const Label = rx({
  tag: 'label',
  defaultVariant: 'forms.label',
  css: {
    display: 'block',
    width: '100%',
  }
})
export const Input = rx({
  tag: 'input',
  defaultVariant: 'forms.input',
  css: {
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 'default',
  }
})

export const Select = rx({
  tag: 'select',
  defaultVariant: 'forms.select',
  css: {
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 'default',
  }
})

export const Textarea = rx({
  tag: 'textarea',
  defaultVariant: 'forms.textarea',
  css: {
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 'default',
  }
})

export const Radio = rx({
  tag: 'input',
  defaultVariant: 'forms.radio',
  defaultProps: {
    type: 'radio',
  }
})

export const Checkbox = rx({
  tag: 'input',
  defaultVariant: 'forms.checkbox',
  defaultProps: {
    type: 'checkbox',
  }
})

export const Switch = rx({
  tag: 'button',
  defaultVariant: 'forms.switch',
  defaultProps: {
    type: 'button',
    role: 'switch',
    children: (
      jsx('span', { 'aria-hidden': true })
    )
  },
  css: {
    appearance: 'none',
    display: 'inline-flex',
    color: 'primary',
    bg: 'gray',
    borderRadius: 'circle',
    width: 48,
    height: 24,
    p: 0,
    border: 0,
    boxShadow: 'inset 0 0 0 2px',
    userSelect: 'none',
    '& > span': {
      display: 'block',
      width: 24,
      height: 24,
      borderRadius: 'circle',
      bg: 'currentcolor',
      // boxShadow: 'handle'
    }
  }
})

// export const Slider = rx({})
// export const Progress = rx({})
