import React from 'react'
import { storiesOf } from '@storybook/react'
import { Fixed } from '../src'

storiesOf('Fixed', module)
  .add('Default', () => (
    <Fixed
      children='Fixed'
    />
  ))
  .add('Bottom Right', () => (
    <Fixed
      bottom
      right
      children='Fixed'
    />
  ))
  .add('Center', () => (
    <Fixed 
      center
      children='Fixed' 
    />
  ))
  .add('CenterX', () => (
    <Fixed 
      centerX 
      children='Fixed' 
    />
  ))
  .add('CenterY', () => (
    <Fixed 
      centerY 
      children='Fixed' 
    />
  ))
  .add('CenterX Top', () => (
    <Fixed 
      centerX 
      top 
      children='Fixed' 
    />
  ))
  .add('CenterX Bottom', () => (
    <Fixed 
      centerX 
      bottom 
      children='Fixed' 
    />
  ))
  .add('CenterY Left', () => (
    <Fixed 
      centerY 
      left 
      children='Fixed' 
    />
  ))
  .add('CenterY Right', () => (
    <Fixed 
      centerY 
      right 
      children='Fixed' 
    />
  ))
