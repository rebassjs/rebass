import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Banner,
  Heading,
  Lead,
  Text,
} from '../src'
import { photo } from './constants'

storiesOf('Intro', module)
  .add('Hello', () => (
    <Banner
      color='white'
      bg='black'
      backgroundImage={photo}>
      <Heading f={[ 6, 7, 8 ]}>
        Rebass
      </Heading>
      <Lead >
        Functional React UI component library, built with styled-components
      </Lead>
    </Banner>
  ))
