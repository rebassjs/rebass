import React from 'react'
import { storiesOf } from '@storybook/react'
import { Absolute } from '../src'

storiesOf('Absolute', module)
  .add('Default', () => (
    <Absolute children='Absolute' />
  ))
  .add('Center', () => (
    <Absolute 
      center
      children='Absolute' 
    />
  ))
  .add('CenterX', () => (
    <Absolute 
      centerX 
      children='Absolute' 
    />
  ))
  .add('CenterY', () => (
    <Absolute 
      centerY 
      children='Absolute' 
    />
  ))
  .add('CenterX Top', () => (
    <Absolute 
      centerX 
      top 
      children='Absolute' 
    />
  ))
  .add('CenterX Bottom', () => (
    <Absolute 
      centerX 
      bottom 
      children='Absolute' 
    />
  ))
  .add('CenterY Left', () => (
    <Absolute 
      centerY 
      left 
      children='Absolute' 
    />
  ))
  .add('CenterY Right', () => (
    <Absolute 
      centerY 
      right 
      children='Absolute' 
    />
  ))
