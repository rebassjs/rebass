
import React from 'react'
import cxs from 'cxs'
import { Heading } from '../src'
import breakpoints from './breakpoints'

const BigHeading = ({
  ...props
}) => {
  const cx = cxs({
    fontSize: 64,
    [breakpoints.small]: {
      fontSize: 96
    },
    [breakpoints.medium]: {
      fontSize: 96
    },
    [breakpoints.large]: {
      fontSize: 128
    }
  })

  const sx = {
    fontSize: null
  }

  return (
    <Heading
      {...props}
      style={sx}
      className={cx}
    />
  )
}

export default BigHeading

