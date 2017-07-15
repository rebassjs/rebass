import React from 'react'
import { Box } from 'grid-styled'
import Section from './Section'
import Live from './Live'

const Demo = props => (
  <Section name='Demo'>
    <Box my={3}>
      <Live code={code} />
    </Box>
  </Section>
)

const code = `<div>
  <Flex align='center'>
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
</div>`

export default Demo
