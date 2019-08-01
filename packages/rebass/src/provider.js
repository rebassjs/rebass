// Generates components based on theme.styles object
import { jsx } from 'theme-ui'
import {
  useMemo,
} from 'react'
import htmlTags from 'html-tags'
import { MDXProvider } from '@mdx-js/react'
import { ThemeContext } from '@emotion/core'

const tags = {}
htmlTags.forEach(tag => {
  tags[tag] = tag
})

const getTag = key => tags[key] || 'div'

export const Provider = ({ theme = {}, children }) => {
  const components = useMemo(() => {
    const comps = {}
    for (let key in theme.styles) {
      const tag = getTag(key)
      const style = theme.styles[key]
      comps[key] = props => jsx(tag, {
        ...props,
        sx: {
          ...style,
          ...props.sx,
        }
      })
    }
    return comps
  }, [theme.styles])

  return (
    jsx(ThemeContext.Provider, {
      value: theme,
    },
      jsx(MDXProvider, { components },
        jsx('pre', null, Object.keys(components).join()),
        children
      )
    )
  )
}
