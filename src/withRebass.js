
import React from 'react'
import { setScale as createMargin } from 'understyle/dist/margin'
import { setScale as createPadding } from 'understyle/dist/padding'
import getTypographicStyle from './util/get-typographic-style'
import radii from './util/radii'
import colorStyle from './util/color-style'
import getColorFill from './util/get-color-fill'
import basicTheme from './themes/basic'

const isObj = o => typeof o === 'object' && o !== null

export const getSubComponentStyles = (...args) => {
  const keys = args.reduce((a, obj) => [ ...a, ...Object.keys(obj) ], [])
    .reduce((a, key) => {
      const hasObj = args.reduce((acc, b) => {
        return acc || isObj(b[key])
      }, false)
      if (!hasObj) {
        return a
      }
      if (a.indexOf(key) < 0) {
        a.push(key)
      }
      return a
    }, [])

  return keys
    .reduce((a, key) => {
      args.forEach(obj => {
        if (isObj(obj[key])) {
          a[key] = {
            ...a[key],
            ...obj[key]
          }
        }
      })
      return a
    }, {})
}

const withRebass = Comp => {
  class RebassBase extends React.Component {
    render () {
      const { rebass } = this.context

      const {
        bold,
        center,
        caps,
        p, pt, pr, pb, pl, px, py,
        m, mt, mr, mb, ml, mx, my,
        rounded,
        pill,
        circle,
        color,
        backgroundColor,
        theme,
        style = {},
        ...props
      } = this.props

      const baseTheme = { ...basicTheme, ...rebass, circle }
      const { scale, colors, borderRadius } = baseTheme

      const themeStyle = baseTheme[Comp._name] || {}

      const margin = createMargin(scale)
      const padding = createPadding(scale)
      const radiusStyles = radii(borderRadius)
      const colorStyles = colorStyle(colors)

      const subComponentStyles = getSubComponentStyles(themeStyle, style)

      const sx = {
        boxSizing: 'border-box',
        ...themeStyle,
        ...getTypographicStyle(baseTheme)({ bold, center, caps }),
        ...margin({ m, mt, mr, mb, ml, mx, my }),
        ...padding({ p, pt, pr, pb, pl, px, py }),
        ...colorStyles({
          color,
          backgroundColor
        }),
        ...radiusStyles({
          rounded,
          pill,
          circle
        }),
        ...style,
        fill: theme ? getColorFill(colors)(theme) : {}
      }

      return (
        <Comp
          {...props}
          theme={baseTheme}
          subComponentStyles={subComponentStyles}
          style={sx}
        />
      )
    }
  }

  RebassBase.contextTypes = {
    rebass: React.PropTypes.object
  }

  RebassBase.propTypes = {
    /** Sets foreground color */
    color: React.PropTypes.string,
    /** Sets background color */
    backgroundColor: React.PropTypes.string,
    /** Sets semantic color themes */
    theme: React.PropTypes.oneOf([
      'primary',
      'secondary',
      'default',
      'info',
      'success',
      'warning',
      'error',
      'muted'
    ])
  }

  RebassBase.displayName = Comp._name

  return RebassBase
}

export default withRebass

