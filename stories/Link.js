import React from 'react'
import { storiesOf } from '@storybook/react'
import { Link } from '../src'

storiesOf('Link', module)
  .add('Default', () => (
    <Link
      href='#!'
      children='Hello Link'
    />
  ))
