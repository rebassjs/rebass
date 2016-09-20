
import React from 'react'
import { setScale as createMargin } from 'understyle/dist/margin'
import { setScale as createPadding } from 'understyle/dist/padding'
import radii from './util/radii'
import colorStyle from './util/color-style'
import defaultTheme from './theme'

const isObj = o => typeof o === 'object' && o !== null

const getSubComponentStyles = (...args) => {
  const keys = args.reduce((a, obj) => [ ...a, ...Object.keys(obj)], [])
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

      const theme = { ...defaultTheme, ...rebass }
      const { scale, colors, borderRadius } = theme
      const themeStyle = theme[Comp.name] || {}

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
        style = {},
        ...props
      } = this.props

      const subComponentStyles = getSubComponentStyles(themeStyle, style)

      const sx = {
        boxSizing: 'border-box',
        ...themeStyle,
        // handle gutter prop with negative numbers instead
        ...margin({ m, mt, mr, mb, ml, mx, my, gutter }),
        ...padding({ p, pt, pr, pb, pl, px, py }),
        ...colorStyle({
          theme,
          color,
          backgroundColor
        }, colors, theme),
        ...radii({
          rounded,
          pill,
          circle
        }, borderRadius),
        // Write tests for this
        ...style
      }

      return (
        <Comp
          {...props}
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

