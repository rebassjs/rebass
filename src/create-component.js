import styled from 'styled-components'
import Tag from './Tag'
import hoc from './hoc'

const createComponent = (config, components = {}) => {
  const {
    tag,
    props,
    style,
    propTypes = {},
    defaultProps = {}
  } = config
  if (!config || !tag || !style) return null

  const _tag = components[tag] || tag

  const Base = hoc(Tag(_tag))
  const Component = styled(Base).attrs(props)([], style)

  Component.propTypes = propTypes
  Component.defaultProps = defaultProps

  return Component
}

export default createComponent
