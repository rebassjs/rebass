
import React from 'react'
import toJsx from 'react-element-to-jsx-string'
import { Pre } from '../../src'

const Example = ({ example, ...props }) => (
  <div className='mb2'>
    {example}
    <Pre children={toJsx(example)} />
  </div>
)

export default Example
