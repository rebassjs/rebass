
import React from 'react'

const addContext = (Component) => {
  Component.contextTypes = {
    rebass: React.PropTypes.object
  }
}

export default addContext

