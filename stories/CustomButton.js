import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { Button } from '../src'

const CustomButton = styled(Button)`
  border: 1px solid rgba(0, 0, 0, .25);
  background-image: linear-gradient(transparent, rgba(0, 0, 0, .125));
  box-shadow: 0 0 4px rgba(0, 0, 0, .25)
`

storiesOf('Custom Button', module)
  .add('Button', () => (
    <CustomButton
      children='hello'
    />
  ))
