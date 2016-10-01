
import React from 'react'
import { Container, Grid } from 'gridsys'
import { Flex, Box } from 'reflexbox'
import {
  Card,
  CardImage,
  Heading,
  Text,
  Space,
  Rating
} from '../src'


const Cards = (props, { rebass }) => {
  const { colors } = rebass
  const primary = /^\#/.test(colors.primary) ? colors.primary.replace('#', '') : '#666'
  const card = {
    image: `http://placehold.it/256x192/${primary}/fff`,
    heading: 'Card',
    text: 'An index card consists of card stock cut to a standard size, used for recording and storing small amounts of discrete data. It was invented by Carl Linnaeus, around 1760.'
  }

  const cards = Array.from({ length: 4 }, (c) => card)

  return (
    <Container>
      {cards.map(({ image, heading, text }, i) => (
        <Grid
          key={i}
          span={2}>
          <Card>
            <CardImage src={image} />
            <Flex align='center'>
              <Heading children={heading} />
              <Space auto />
              <Rating ml={1} value={4} />
            </Flex>
            <Text small children={text} />
          </Card>
        </Grid>
      ))}
    </Container>
  )
}

Cards.contextTypes = {
  rebass: React.PropTypes.object
}

export default Cards

