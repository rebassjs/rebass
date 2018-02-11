import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import sys from 'system-components'
import system, {
  letterSpacing
} from 'styled-system'
import { Flex, Box } from 'grid-styled'

import theme from './theme'

// Move these into module
import DonutBase from './DonutBase'
import SelectBase from './SelectBase'

import {
  darken,
  fontFamily,
  ratio,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  maxWidth,
  maxHeight,
  minHeight,
  sizeWidth,
  sizeHeight,
  zIndex,
  top,
  right,
  bottom,
  left,
  drawerOpen,
  carouselIndex,
} from './utils'

export { Flex, Box } from 'grid-styled'

export const CSS = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />
CSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}'
}
CSS.displayName = 'CSS'

export const Root = sys({
  font: 'sans',
}, fontFamily, {
  '& *': {
    boxSizing: 'border-box'
  }
})

Root.displayName = 'Root'

export class Provider extends React.Component {
  render () {
    const {
      theme,
      ...props
    } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Root {...props} />
      </ThemeProvider>
    )
  }
}

Provider.defaultProps = {
  theme
}

Provider.displayName = 'Rebass.Provider'

export const Button = sys({
  is: 'button',
  fontSize: 1,
  fontWeight: 'bold',
  lineHeight: 16/14,
  m: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'blue',
  borderRadius: 2,
  borderWidth: 0,
},
  props => ({
    fontFamily: 'inherit',
    WebkitFontSmoothing: 'antialiased',
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'center',
    textDecoration: 'none',
    appearance: 'none',
    '&:hover': {
      boxShadow: `inset 0 0 0 999px ${darken(1/8)}`
    },
    '&:focus': {
      outline: 0,
      boxShadow: `0 0 0 2px ${system.theme('colors.blue')(props)}`
    },
    '&:active': {
      backgroundColor: system.theme('colors.blue.6')(props),
      boxShadow: `inset 0 0 8px ${darken(1/4)}`
    },
    '&:disabled': {
      opacity: 1/4
    },
  })
)

Button.displayName = 'Button'

export const ButtonOutline = styled(Button)([], props => ({
  boxShadow: `inset 0 0 0 2px`,
  '&:hover': {
    color: 'white',
    backgroundColor: system.theme('colors.blue')(props),
  },
  '&:focus': {
    boxShadow: `inset 0 0 0 2px, 0 0 0 2px`
  },
  '&:active': {
    color: 'white',
    backgroundColor: system.theme('colors.blue')(props),
    boxShadow: `inset 0 0 0 2px ${system.theme('colors.' + props.color)(props)}, inset 0 0 8px ${darken(1/4)}`
  }
}))

ButtonOutline.displayName = 'ButtonOutline'
console.log(Button, ButtonOutline.defaultProps)

ButtonOutline.defaultProps = {
  color: 'blue',
  bg: 'transparent'
}

export const ButtonCircle = styled(Button)([])
ButtonCircle.displayName = 'ButtonCircle'
ButtonCircle.defaultProps = {
  px: 3,
  borderRadius: 99999
}

export const ButtonTransparent = styled(Button)([], props => ({
  '&:hover': {
    color: system.theme('colors.' + props.color)(props),
    backgroundColor: 'transparent'
  },
  '&:focus': {
    boxShadow: `inset 0 0 0 2px, 0 0 0 2px`
  },
  '&:active': {
    backgroundColor: 'transparent',
    boxShadow: `inset 0 0 0 2px, inset 0 0 8px ${darken(1/4)}`
  }
}))

ButtonTransparent.displayName = 'ButtonTransparent'

ButtonTransparent.defaultProps = {
  color: 'inherit',
  bg: 'transparent'
}

export const Link = sys({
  is: 'a',
  color: 'blue'
}, 'space')

Link.displayName = 'Link'

export const NavLink = sys({
  is: 'a',
  color: 'inherit',
  fontSize: 1,
  fontWeight: 'bold',
  p: 2,
}, props => ({
  display: 'inline-flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  backgroundColor: props.active ? darken(1/4) : 'transparent',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: darken(1/16)
  },
  '&:disabled': {
    opacity: 1/4
  },
}))

NavLink.displayName = 'NavLink'

export const BlockLink = sys({
  is: 'a',
  color: 'inherit'
}, {
  display: 'block',
  textDecoration: 'none'
}, 'space')

BlockLink.displayName = 'BlockLink'

export const Text = sys({
  m: 0
},
  'color',
  'fontSize',
  'fontWeight',
  'textAlign',
  'lineHeight'
)

Text.displayName = 'Text'

export const Caps = styled(Text)([], letterSpacing, {
  textTransform: 'uppercase'
})

Caps.displayName = 'Caps'
Caps.defaultProps = {
  fontSize: 0,
  letterSpacing: '0.2em'
}

export const Heading = sys({
  is: 'h2',
  fontSize: 5,
  fontWeight: 'bold',
  lineHeight: 1.25,
  m: 0
},
  'color',
  'textAlign'
)

Heading.displayName = 'Heading'

Heading.h1 = props => <Heading {...props} is='h1' />
Heading.h2 = props => <Heading {...props} is='h2' />
Heading.h3 = props => <Heading {...props} is='h3' />
Heading.h4 = props => <Heading {...props} is='h4' />
Heading.h5 = props => <Heading {...props} is='h5' />
Heading.h6 = props => <Heading {...props} is='h6' />

export const Subhead = props =>
  <Heading
    is='h3'
    fontSize={4}
    {...props}
  />

Subhead.displayName = 'Subhead'

export const Small = props =>
  <Text
    is='small'
    fontSize={0}
    {...props}
  />

Small.displayName = 'Small'

export const Lead = props =>
  <Text
    is='p'
    fontSize={3}
    lineHeight={1.25}
    {...props}
  />

Lead.displayName = 'Lead'

export const Pre = sys({
  is: 'pre',
  fontSize: 1,
  m: 0
}, props => ({
  fontFamily: system.theme('fonts.mono')(props),
  overflow: 'auto'
}),
  'color'
)

Pre.displayName = 'Pre'

export const Code = sys({
  is: 'code',
  fontSize: 1,
}, props => ({
  fontFamily: system.theme('fonts.mono')(props)
}))

Code.displayName = 'Code'

export const Samp = props =>
  <Code
    is='samp'
    {...props}
  />

Samp.displayName = 'Samp'

export const Blockquote = props =>
  <Text
    is='blockquote'
    fontSize={3}
    m={0}
    {...props}
  />

Blockquote.displayName = 'Blockquote'

// replace with system function
//const maxWidth = system.responsiveStyle({
//  prop: 'maxWidth',
//  key: 'maxWidths',
//  cssProperty: 'maxWidth',
//  numberToPx: true
//})

export const Measure = sys({
  maxWidth: '32em'
}, maxWidth)

Measure.displayName = 'Measure'

export const Truncate = styled(Text)([], {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
})

Truncate.displayName = 'Truncate'

export const Label = sys({
  is: 'label',
  fontSize: 1,
  mb: 1,
  align: 'center'
}, {
  display: 'flex'
}, 'alignItems')

Label.displayName = 'Label'

export const Input = sys({
  is: 'input',
  type: 'text',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  px: 1,
  py: 1,
  m: 0,
  width: 1,
  borderWidth: 0,
  borderColor: 'gray',
  boxShadow: 1,
  borderRadius: 2,
  color: 'inherit',
  bg: 'transparent'
}, props => ({
  fontFamily: 'inherit',
  display: 'inline-block',
  verticalAlign: 'middle',
  border: 0,
  appearance: 'none',
  '&:focus': {
    outline: 'none',
    boxShadow: `inset 0 0 0 1px ${system.theme('colors.blue')(props)}`,
  },
  '&:disabled': {
    opacity: 1/4
  },
}))

Input.displayName = 'Input'

export const Select = sys({
  is: SelectBase,
  m: 0,
  px: 1,
  py: 1,
  width: 1,
  borderWidth: 0,
  borderColor: 'gray',
  boxShadow: 1,
  borderRadius: 2,
  color: 'inherit',
  bg: 'transparent'
})

Select.displayName = 'Select'

  // Forms
  /* TODO
  {
    name: 'Select',
    style: props => ({
      display: 'inline-block',
      verticalAlign: 'middle',
      select: {
        padding: px(idx('space.1', props.theme)),
        boxShadow: `inset 0 0 0 1px ${color(props)('gray2')}`,
        borderRadius: px(props.theme.radius),

        '&:focus': {
          boxShadow: `inset 0 0 0 1px ${color(props)('blue')}`,
        },
        '&:disabled': {
          opacity: 1/4
        }
      }
    })
  },
  */

export const Textarea = sys({
  is: 'textarea',
  px: 1,
  py: 1,
  m: 0,
  width: 1,
  fontSize: 'inherit',
  color: 'inherit',
  bg: 'transparent',
  borderWidth: 0,
  borderColor: 'gray',
  boxShadow: 1,
  borderRadius: 2,
}, props => ({
  fontFamily: 'inherit',
  appearance: 'none',
  '&:focus': {
    outline: 'none',
    boxShadow: system.theme('shadows.2')(props)
  },
  '&:disabled': {
    opacity: 1/4
  },
}))

Textarea.displayName = 'Textarea'

export const Checkbox = sys({
  is: 'input',
  type: 'checkbox',
  m: 0,
  mr: 2,
})

Checkbox.displayName = 'Checkbox'

export const Radio = sys({
  is: 'input',
  type: 'radio',
  m: 0,
  mr: 2
})

Radio.displayName = 'Radio'

export const Slider = sys({
  is: 'input',
  type: 'range',
  width: 1,
  mx: 0,
  my: 2,
  color: 'inherit',
  bg: 'grays.1',
  borderRadius: 99999,
}, props => ({
  display: 'block',
  height: '4px', // px(idx('space.1', props.theme)),
  cursor: 'pointer',
  appearance: 'none',
  '&::-webkit-slider-thumb': {
    width: '16px',
    height: '16px',
    backgroundColor: 'currentcolor',
    border: 0,
    borderRadius: '99999px',
    appearance: 'none'
  },
  // '&:focus': {
  //   '&::-webkit-slider-thumb': {}
  // }
}))

Slider.displayName = 'Slider'

export const Image = sys({
  is: 'img',
}, {
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
},
  'space',
  'width',
  'color'
)

Image.displayName = 'Image'

export const Avatar = sys({
  is: 'img',
  size: 48,
  borderRadius: '99999px',
}, {
  display: 'inline-block'
},
  sizeWidth,
  sizeHeight
)

Avatar.displayName = 'Avatar'

export const BackgroundImage = sys({
  width: 1,
  ratio: 3/4,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
},
  ratio,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  'space',
  'color',
)

BackgroundImage.displayName = 'BackgroundImage'

export const Container = sys({
  px: 2,
  mx: 'auto',
  maxWidth: 1024
},
  maxWidth,
  'color'
)

Container.displayName = 'Container'

export const Divider = sys({
  is: 'hr',
  mx: 0,
  my: 3,
  // needs fix in styled-system
  borderWidth: 1,
  borderBottom: true,
  borderColor: 'gray'
})

Divider.displayName = 'Divider'

export const Border = sys({
  borderWidth: 1,
  borderColor: 'gray'
}, 'space', 'color')

Border.displayName = 'Border'

export const Media = sys({
  is: Flex,
  align: 'center'
})

Media.displayName = 'Media'

export const Card = sys({
  p: 2,
  bg: 'white',
  borderRadius: 2,
  boxShadow: 2
}, {
  overflow: 'hidden'
})

Card.displayName = 'Card'

export const Banner = sys({
  is: Flex,
  p: [ 3, 4 ],
  flexDirection: 'column',
  align: 'center',
  justify: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '80vh',
  color: 'white',
  bg: 'gray'
},
  minHeight,
  backgroundSize,
  backgroundPosition,
  backgroundImage
)

Banner.displayName = 'Banner'

export const Panel = sys({
  bg: 'white',
  borderRadius: 2,
  borderWidth: 1,
  borderColor: 'gray'
}, {
  overflow: 'hidden'
}, 'space')

Panel.displayName = 'Panel'

Panel.Header = sys({
  is: 'header',
  fontSize: 2,
  p: 2,
  bg: 'white',
  borderWidth: 1,
  borderBottom: true,
  borderColor: 'gray'
})

Panel.Header.displayName = 'Panel.Header'

Panel.Footer = sys({
  is: 'footer',
  fontSize: 1,
  p: 2,
  bg: 'white',
  borderWidth: 1,
  borderTop: true,
  borderColor: 'gray'
})

Panel.Footer.displayName = 'Panel.Footer'

export const Progress = sys({
  width: 1,
  m: 0,
  px: 0,
  color: 'blue',
  bg: 'gray',
  borderRadius: 2
}, props => ({
  boxSizing: 'border-box',
  diplay: 'block',
  height: '4px',
  overflow: 'hidden',
  appearance: 'none',
  '&::-webkit-progress-bar': {
    backgroundColor: system.theme('colors.gray')(props)
  },
  '&::-webkit-progress-value': {
    backgroundColor: 'currentcolor'
  },
  '&::-moz-progress-bar': {
    backgroundColor: 'currentcolor'
  }
}))

Progress.displayName = 'Progress'

export const Message = sys({
  is: Flex,
  px: 3,
  py: 2,
  fontWeight: 'bold',
  color: 'white',
  bg: 'blue',
  align: 'center',
  minHeight: '48px',
}, minHeight, {
  WebkitFontSmoothing: 'antialiased',
})

Message.displayName = 'Message'

export const Group = sys({
  is: Flex
}, props => {
  const radius = system.theme('radii.2', 4)(props) + 'px'
  return {
    '& > *': {
      borderRadius: 0
    },
    '& > *:first-child': {
      borderRadius: `${radius} 0 0 ${radius}`

    },
    '& > *:last-child': {
      borderRadius: `0 ${radius} ${radius} 0`
    },
  }
})

Group.displayName = 'Group'

export const Toolbar = sys({
  is: Flex,
  px: 2,
  color: 'white',
  bg: 'grays.9',
  align: 'center',
  minHeight: '48px'
}, minHeight, {
  WebkitFontSmoothing: 'antialiased',
})

Toolbar.displayName = 'Toolbar'

export const Badge = sys({
  fontSize: 0,
  px: 2,
  py: 1,
  mx: 1,
  color: 'white',
  bg: 'blue',
  fontWeight: 'bold',
  borderRadius: 2
}, {
  WebkitFontSmoothing: 'antialiased',
  display: 'inline-block',
  verticalAlign: 'middle'
})

Badge.displayName = 'Badge'

export const Circle = sys({
  is: Badge,
  size: 24,
  align: 'center',
  borderRadius: '99999px'
},
  'textAlign',
  sizeWidth,
  sizeHeight
)

Circle.displayName = 'Circle'

export const Position = sys(
  'space',
  'color',
  // responsive position util
  zIndex,
  top,
  right,
  bottom,
  left
)

Position.displayName = 'Position'

// test the extensions since .extend doesn't work reliably
export const Relative = styled(Position)([], {
  position: 'relative'
})
Relative.displayName = 'Relative'

export const Fixed = styled(Position)([], {
  position: 'fixed'
})
Fixed.displayName = 'Fixed'

export const Absolute = styled(Position)([], {
  position: 'absolute'
})
Absolute.displayName = 'Absolute'

export const Sticky = styled(Position)([], {
  position: 'sticky'
})

export const Overlay = sys({
  is: Fixed,
  top: '50%',
  left: '50%',
  p: 3,
  bg: 'white',
  borderRadius: 2,
  maxWidth: '100vw',
  maxHeight: '100vh',
  boxShadow: `0 0 0 60vmax ${darken(1/2)}, 0 0 32px ${darken(1/4)}`,
}, {
  overflow: 'auto',
  transform: 'translate(-50%, -50%)'
},
  'width',
  maxWidth,
  maxHeight,
)
Overlay.displayName = 'Overlay'

export const Tabs = sys({
  is: Flex,
  borderWidth: 1,
  borderBottom: true,
  borderColor: 'gray'
})
Tabs.displayName = 'Tabs'

export const Tab = sys({
  is: 'a',
  fontSize: 1,
  fontWeight: 'bold',
  mr: 3,
  py: 2,
  color: 'inherit',
  borderWidth: 2,
  borderBottom: true,
  borderColor: 'transparent',
  hover: {
    color: 'blue'
  }
}, {
  textDecoration: 'none'
})
Tab.displayName = 'Tab'

export const Dot = sys({
  is: 'button',
  m: 0,
  p: 0,
  size: 16,
  bg: darken(1/4),
  borderRadius: 99999,
  borderWidth: 4,
  borderColor: 'transparent',
  focus: {
    backgroundColor: 'blue'
  },
  hover: {
    backgroundColor: 'blue'
  },
  disabledStyle: {
    opacity: 1/4
  }
}, {
  appearance: 'none',
  backgroundClip: 'padding-box'
},
  sizeWidth,
  sizeHeight
)
Dot.displayName = 'Dot'

export const Drawer = styled(Fixed)([],
  system.space,
  system.color,
  zIndex,
  drawerOpen, {
    position: 'fixed',
    overflowX: 'hidden',
    overflowY: 'auto',
    transitionProperty: 'transform',
    transitionDuration: '.2s',
    transitionTimingFunction: 'ease-out'
})
Drawer.defaultProps = {
  color: 'white',
  bg: 'grays.9',
  open: false,
  size: 320,
  position: 'left',
}

Drawer.displayName = 'Drawer'

export const Carousel = sys({
  is: Flex,
  width: 1,
}, {
  overflow: 'hidden',
  whiteSpace: 'nowrap'
}, carouselIndex)
Carousel.displayName = 'Carousel'

export const Tooltip = sys({
  color: 'white',
  bg: 'grays.9'
}, props => ({
  display: 'inline-block',
  position: 'relative',
  color: 'inherit',
  backgroundColor: 'transparent',
  '&::before': {
    display: 'none',
    content: `"${props.text}"`,
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translate(-50%, -4px)',
    whiteSpace: 'nowrap',
    fontSize: system.theme('fontSizes.0')(props),
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: '8px',
    paddingRight: '8px',
    color: system.theme('colors.' + props.color)(props),
    backgroundColor: system.theme('colors.' + props.bg)(props),
    borderRadius: system.theme('radii.1')(props)
  },
  '&::after': {
    display: 'none',
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translate(-50%, 8px)',
    content: '" "',
    borderWidth: '6px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderTopColor: system.theme('colors.' + props.bg)(props)
  },
  '&:hover': {
    '&::before, &::after': {
      display: 'block'
    },
  }
}))
Tooltip.displayName = 'Tooltip'

export const Close = sys({
  is: ButtonTransparent,
  p: 0,
  fontSize: 3,
  lineHeight: 1,
  children: '×'
}, {
  width: '24px',
  height: '24px'
})

Close.displayName = 'Close'

export const Star = sys({
  fontSize: 3,
  color: 'yellow',
  children: '★'
}, props => ({
  position: 'relative',
  width: '1em',
  height: '1em',
  '&::after': {
    display: props.half ? 'inline-block' : 'none',
    content: '"★"',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '1em',
    height: '1em',
    // marginLeft: '-1em',
    color: 'blue',
    // color: color(props)(props.color),
    clip: 'rect(0, .45em, 1em, 0)'
  }
}))
Star.displayName = 'Star'

export const Embed = sys({
  ratio: 9 / 16
}, ratio, props => ({
  position: 'relative',
  overflow: 'hidden',
  '& > iframe': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    border: 0
  }
}))
Embed.displayName = 'Embed'

/*
const components = [

  {
    name: 'Switch',
    type: 'div',
    props: {
      role: 'checkbox',
      color: 'blue'
    },
    style: props => ({
      display: 'inline-flex',
      width: px(40),
      height: px(24),
      borderRadius: px(9999),
      backgroundColor: props.checked ? color(props)(props.color) : 'transparent',
      boxShadow: 'inset 0 0 0 2px',
      transitionProperty: 'background-color',
      transitionDuration: '.2s',
      transitionTimingFunction: 'ease-out',
      userSelect: 'none',
      '&::after': {
        content: '" "',
        width: px(16),
        height: px(16),
        margin: px(4),
        borderRadius: px(9999),
        transitionProperty: 'transform, color',
        transitionDuration: '.1s',
        transitionTimingFunction: 'ease-out',
        transform: props.checked ? `translateX(16px)` : `translateX(0)`,
        backgroundColor: props.checked ? color(props)('white') : color(props)(props.color),
      }
    })
  },

  {
    name: 'Arrow',
    type: 'div',
    props: {
      direction: 'down'
    },
    style: props => {
      const borderTop = props.direction === 'down' ? { borderTop: '.4375em solid' } : null
      const borderBottom = props.direction === 'up' ? { borderBottom: '.4375em solid' } : null
      return Object.assign({
        display: 'inline-block',
        width: 0,
        height: 0,
        verticalAlign: 'middle',
        borderRight: '.3125em solid transparent',
        borderLeft: '.3125em solid transparent',
      }, borderTop, borderBottom)
    },
    propTypes: {
      direction: oneOf([ 'up', 'down' ])
    }
  },

  {
    name: 'Donut',
    type: DonutBase,
    props: {
      color: 'blue',
      strokeWidth: 2,
      value: 1
    },
    style:  {}
  },

  {
    name: 'Row',
    type: Flex,
    props: {
      mx: -3,
    },
    style: {}
  },
  {
    name: 'Column',
    type: Box,
    props: {
      px: 3,
      mb: 4,
      flex: '1 1 auto'
    },
    style: {}
  },
]

export default components
*/
