import styled from 'styled-components'
import Tag from './Tag'
import hoc from './hoc'

const createComponent = (config, components = {}) => {
  const {
    tag,
    props,
    style
  } = config
  if (!config || !tag || !style) return null

  const _tag = components[tag] || tag

  const Base = hoc(Tag(_tag))
  const Component = styled(Base).attrs(props)([], style)

  return Component
}

export default createComponent
