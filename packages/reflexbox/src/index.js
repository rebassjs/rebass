import React from 'react'
import styled from '@emotion/styled'
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
} from 'styled-system'
import css, { get } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { pick } from '@styled-system/props'

let __id = 0
const uuid = () => (__id++).toString(36)

const Context = React.createContext({})
export const useEditor = () => React.useContext(Context)

const reducer = (state, next) => ({ ...state, ...next })
export const EditorProvider = props => {
  const [selected, select] = React.useState(null)
  const [elements, setElements] = React.useReducer(reducer, {})
  const register = (id, props) => {
    setElements({
      [id]: props
    })
  }
  const context = {
    selected,
    select,
    elements,
    setElements,
    register,
  }
  return React.createElement(Context.Provider, {
    value: context,
  }, props.children)
}

const Wrapper = props => {
  const editor = useEditor()
  const [id, setID] = React.useState(null)
  const state = editor && pick(editor.elements[id] || {})
  React.useEffect(() => {
    if (!id) {
      const key = uuid()
      console.log('wrapper key', key, props)
      setID(key)
    } else {
      if (editor.elements[id]) return
      if (typeof editor.register !== 'function') return
      editor.register(id, props)
    }
  }, [editor.register, id])
  return React.cloneElement(props.children, {
    'data-id': id,
    ...state,
  })
}

const jsx = (type, props, ...children) =>
  React.createElement.apply(undefined, [
    Wrapper, props,
    React.createElement(type, props, ...children)
  ])

const sx = props => css(props.sx)(props.theme)
const base = props => css(props.__css)(props.theme)
const variant = ({
  theme,
  variant,
  tx = 'variants',
}) =>
  css(
    get(theme, tx + '.' + variant,
      get(theme, variant)
    )
  )(theme)

export const Base = styled('div', {
  shouldForwardProp
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
},
  base,
  variant,
  sx,
  props => props.css,
  compose(
    space,
    layout,
    typography,
    color,
    flexbox,
  ),
)

export const Box = React.forwardRef((props, ref) => (
  jsx(Base, { ...props, ref })
))

export const Flex = styled(Box)({
  display: 'flex'
})
