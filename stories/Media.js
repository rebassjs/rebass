import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Media,
  Image,
  Box,
  Text
} from '../src'
import { photo } from './constants'

storiesOf('Media', module)
  .add('Default', () => (
    <Media>
      <Image
        src={photo}
        mr={3}
        width={128}
        height={128}
      />
      <Box>
        <Text>Hello Media Object</Text>
      </Box>
    </Media>
  ))
