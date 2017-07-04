import React from 'react'
import styled from 'styled-components'
import {
  space,
  width,
  fontSize,
  color
} from 'styled-system'

const hoc = Component => {
  const Base = styled(Component)([],
    space,
    width,
    fontSize,
    color
  )

  return Base
}

export default hoc
