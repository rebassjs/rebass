import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from '../src'

storiesOf('Button', module)
  .add('Default', () => (
    <Button
      children='Hello'
    />
  ))
  .add('Colors', () => (
    <div>
      <Button
        m={1}
        color='black'
        bg='red'
        children='Red'
      />
      <Button
        m={1}
        bg='orange'
        children='Orange'
      />
      <Button
        m={1}
        bg='yellow'
        children='Yellow'
      />
      <Button
        m={1}
        bg='green'
        children='Green'
      />
    </div>
  ))
  .add('Padding', () => (
    <Button
      px={4}
      py={3}
      children='Hello'
    />
  ))
  .add('Big font', () => (
    <Button
      f={3}
      children='Hello'
    />
  ))
  .add('Width', () => (
    <Button
      w={[ 1, 1/2 ]}
      children='Hello'
    />
  ))
  .add('Link', () => (
    <Button
      is='a'
      href='#!'
      children='Hello'
    />
  ))

