
import React from 'react'

const addContext = (Component) => {
  Component.contextTypes = {
    rebass: React.PropTypes.object
  }
  return Component
}

export default addContext

