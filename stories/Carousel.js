import React from 'react'
import { storiesOf } from '@storybook/react'
import { createProvider } from 'funcup'
import {
  Carousel,
  CarouselSlide,
  Heading,
  Relative,
  Absolute,
  Button,
} from '../src'

const hoc = createProvider({ index: 0 })
const inc = state => ({ index: state.index + 1 })
const dec = state => ({ index: state.index - 1 })

const Live = hoc(props => (
  <Relative>
    <Carousel index={props.index % 3}>
      <CarouselSlide
        py={6}
        bg='gray'>
        <Heading>Hello</Heading>
      </CarouselSlide>
      <CarouselSlide
        py={6}
        color='white'
        bg='blue'>
        <Heading>Hello</Heading>
      </CarouselSlide>
      <CarouselSlide
        py={6}
        color='white'
        bg='green'>
        <Heading>Hello</Heading>
      </CarouselSlide>
    </Carousel>
    <Absolute right bottom>
      <Button
        m={2}
        onClick={e => props.update(dec)}
        children='Back'
      />
      <Button
        m={2}
        onClick={e => props.update(inc)}
        children='Next'
      />
    </Absolute>
  </Relative>
))

storiesOf('Carousel', module)
  .add('Default', () => (
    <Live />
  ))
