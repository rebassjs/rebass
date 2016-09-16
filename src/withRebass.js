
import React from 'react'
import { setScale as createMargin } from 'understyle/dist/margin'
import { setScale as createPadding } from 'understyle/dist/padding'
import radii from './util/radii'
import colorStyle from './util/color-style'
import defaultTheme from './config'

const withRebass = Comp => {
  class RebassBase extends React.Component {
    render () {
      const { rebass } = this.context

      const theme = { ...defaultTheme, ...rebass }
      const { scale, colors, borderRadius } = theme
      const themeStyle = theme[Comp.name] || {}

      const subComponentStyles = Object.keys(themeStyle)
        .reduce((style, key) => {
          if (themeStyle[key] && typeof themeStyle[key] === 'object') {
            style[key] = themeStyle[key]
          }
          return style
        }, {})

      const margin = createMargin(scale)
      const padding = createPadding(scale)

      // extract common style props
      const {
        p, pt, pr, pb, pl, px, py,
        m, mt, mr, mb, ml, mx, my,
        gutter,
        rounded,
        pill,
        circle,
        // theme, // - rename this
        color,
        backgroundColor,
        inverted,
        style,
        baseRef = x => x,
        ...props
      } = this.props

      const sx = {
        boxSizing: 'border-box',
        ...themeStyle,
        // handle gutter prop with negative numbers instead
        ...margin({ m, mt, mr, mb, ml, mx, my, gutter }, scale),
        ...padding({ p, pt, pr, pb, pl, px, py }, scale),
        ...colorStyle({
          theme,
          color,
          backgroundColor,
          inverted
        }, colors, theme),
        ...radii({
          rounded,
          pill,
          circle
        }, borderRadius),
        // This includes base styles
        // Consider keeping baseStyle prop
        ...style
      }

      return (
        <Comp
          {...props}
          ref={r => baseRef(r)}
          theme={theme}
          subComponentStyles={subComponentStyles}
          style={sx}
        />
      )
    }
  }

  RebassBase.contextTypes = {
    rebass: React.PropTypes.object
  }

  return RebassBase
}

export default withRebass

