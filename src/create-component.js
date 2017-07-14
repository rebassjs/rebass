import hoc from './hoc'

const createComponent = (config, components = {}) => {
  const {
    type,
    props,
    style,
    propTypes = {},
  } = config
  if (!config || !type || !style) return null

  const _tag = components[type] || type

  const Component = hoc(style, props)(_tag)

  Component.propTypes = propTypes
  Component.defaultProps = config.defaultProps || {}

  return Component
}

export default createComponent
