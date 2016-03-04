
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Card,
  CardImage,
  Heading,
  Text
} from '../../src'


const Cards = ({ colors }) => {
  const primary = /^\#/.test(colors.primary) ? colors.primary.replace('#', '') : '#666'
  const card = {
    image: `http://placehold.it/256/${primary}/fff`,
    heading: 'Card',
    text: 'An index card consists of card stock cut to a standard size, used for recording and storing small amounts of discrete data. It was invented by Carl Linnaeus, around 1760.'
  }

  const cards = Array.from({ length: 3 }, (c) => card)

  return (
    <Flex sm gutter={2}>
      {cards.map(({ image, heading, text }, i) => (
        <Card key={i} m={2}>
          <CardImage src={image} />
          <Heading children={heading} />
          <Text children={text} />
        </Card>
      ))}
    </Flex>
  )
}

export default Cards

