import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Carousel,
  CarouselSlide,
  Heading,
} from '../src'

storiesOf('Carousel', module)
  .add('Default', () => (
    <Carousel>
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
  ))
