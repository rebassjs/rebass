import React from 'react'
import { storiesOf } from '@storybook/react'
import { Avatar } from '../src'
import { photo } from './constants'

storiesOf('Avatar', module)
  .add('Default', () => (
    <Avatar src={photo} />
  ))
  .add('Size 96', () => (
    <Avatar
      src={photo}
      size={96}
    />
  ))
