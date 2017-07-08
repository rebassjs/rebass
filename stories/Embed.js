import React from 'react'
import { storiesOf } from '@storybook/react'
import { Embed } from '../src'

storiesOf('Embed', module)
  .add('Default', () => (
    <Embed>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/KQ6zr6kCPj8?ecver=1"
        frameborder="0"
        allowfullscreen
      />
    </Embed>
  ))

