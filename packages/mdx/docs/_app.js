import React from 'react'
import * as Rebass from 'rebass'
import { Link } from 'ok-cli'
import RebassMDX from '../src'

const link = ({
  href,
  ...props
}) => /^https?\:\/\//.test(href)
  ? <Rebass.Link {...props} href={href} />
  : (
    <Rebass.Link
      {...props}
      is={Link}
      to={href}
    />
  )

const components = {
  ...Rebass,
  a: link
}

export default props =>
  <RebassMDX components={components}>
    {props.children}
  </RebassMDX>
