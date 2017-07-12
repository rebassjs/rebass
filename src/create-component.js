import styled from 'styled-components'
import {
  compose,
  withProps,
  defaultProps
} from 'recompose'
import Tag from './Tag'
import hoc from './hoc'

const withStyle = (style, props) => C => styled(C).attrs(props)([], style)

const createComponent = (config, components = {}) => {
  const {
    tag,
    props,
    style,
    propTypes = {},
  } = config
  if (!config || !tag || !style) return null

  const _tag = components[tag] || tag

  const enhance = compose(
    withStyle(style, props),
    hoc,
    // defaultProps(props),
    Tag
  )

  const Component = enhance(_tag)

  Component.propTypes = propTypes
  Component.defaultProps = config.defaultProps || {}

  return Component
}

export default createComponent
