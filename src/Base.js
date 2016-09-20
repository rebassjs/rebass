
import React from 'react'
import withRebass from './withRebass'

const Base = ({
  theme,
  subComponentStyles,
  ...props
}) => {
  return <div {...props} />
}

export default withRebass(Base)

