import hoc from './hoc'

const createComponent = (config, components = {}) => {
  const {
    name,
    type,
    props,
    style,
    propTypes = {},
  } = config
  if (!config || !type || !style) return null

  const _tag = components[type] || type

  const Component = hoc(style, props)(_tag)

  Component.displayName = name
  Component.propTypes = propTypes
  Component.defaultProps = config.props || {}

  return Component
}

export default createComponent
