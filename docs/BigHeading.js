
import React from 'react'
import cxs from 'cxs'
import { Heading } from '../src'
import breakpoints from './breakpoints'

const BigHeading = ({
  mega,
  ...props
}) => {
  const cx = cxs({
    fontSize: mega ? 32 : 24,
    wordBreak: 'break-word',
    [breakpoints.medium]: {
      fontSize: mega ? 64 : 48
    },
    [breakpoints.large]: {
      fontSize: mega ? 96 : 80
    },
    [breakpoints.xlarge]: {
      fontSize: 128
    }
  })

  const sx = {
    fontSize: null,
    fontWeight: 800
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

