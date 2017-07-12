import styled from 'styled-components'
import {
  compose,
  defaultProps
} from 'recompose'
import tag from './tag'
import hoc from './hoc'

const withStyle = (style, props) => C => styled(C).attrs(props)([], style)

const createComponent = (config, components = {}) => {
  const {
    type,
    props,
    style,
    propTypes = {},
  } = config
  if (!config || !tag || !style) return null

  const _tag = components[type] || type

  const enhance = compose(
    withStyle(style, props),
    hoc,
    tag
  )

  const Component = enhance(_tag)

  Component.propTypes = propTypes
  Component.defaultProps = config.defaultProps || {}

  return Component
}

export default createComponent
