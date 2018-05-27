import React from 'react'
import {
  Flex,
  Box,
  Heading,
  Group,
  Button,
  ButtonOutline,
  Divider,
  Label,
  Input,
  Slider
} from '../src'

export default () => (
  <React.Fragment>
    <Flex alignItems='center'>
      <Heading mr='auto'>Hello</Heading>
      <Group>
        <ButtonOutline>
          Beep
        </ButtonOutline>
        <Button>
          Boop
        </Button>
      </Group>
    </Flex>
    <Divider my={4} color='gray3' />
    <Box mb={2}>
      <Label>Name</Label>
      <Input />
    </Box>
    <Box>
      <Label>Rebass</Label>
      <Slider />
    </Box>
  </React.Fragment>
)
