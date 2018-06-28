import React from 'react'
import * as Rebass from 'rebass'
import RebassMDX from '../src'

export default props =>
  <RebassMDX components={Rebass}>
    {props.children}
  </RebassMDX>
