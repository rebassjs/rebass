
import React from 'react'
import { Flex, Box } from 'reflexbox'
import { Container, GridGroup, Grid } from 'gridsys'
import {
  theme,
  Heading,
  Text,
  Button,
  ButtonOutline,
  Group,
  Divider,
  Input,
  Select,
  Textarea,
  Checkbox,
  Radio,
  Slider,
  Block,
  PageHeader,
  SequenceMap,
  Stat,
  Donut,
  Tooltip,
  Progress,
  BoxShadow,
  Avatar,
  Message,
  Space,
  Close,
  Card,
  CardImage,
  Panel,
  PanelHeader,
  PanelFooter,
} from '../src'
import BigHeading from './BigHeading'
import Rule from './Rule'

class StyleGuide extends React.Component {
  render () {
    const sx = {
      root: {
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        lineHeight: 1.5
      }
    }
    const colorKeys = Object.keys(theme.colors)

    return (
      <div style={sx.root}>
        <Container>
          <Grid span={8}>
            <BigHeading children='Style Guide' />
            <Rule />
          </Grid>
          <Grid span={3}>
            <Heading mb={2} size={0}>Heading 0</Heading>
            <Heading mb={2} size={1}>Heading 1</Heading>
            <Heading mb={2} size={2}>Heading 2</Heading>
            <Heading mb={2} size={3}>Heading 3</Heading>
            <Heading mb={2} size={4}>Heading 4</Heading>
            <Heading mb={2} size={5}>Heading 5</Heading>
            <Heading size={6}>Heading 6</Heading>
          </Grid>
          <Grid span={3}>
            <Text>
              “The simplest scale is a single note, and sticking with a single note draws more attention to other parameters, such as rhythm and inflection... In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years... This is the typographic equivalent of the diatonic scale.”
            </Text>
            <Text small>
              — Robert Bringhurst
            </Text>
          </Grid>
          <Grid span={6}>
            <Flex wrap>
              {colorKeys.map((color, i) => (
                <div key={i}>
                  <Block
                    py={3}
                    style={{
                      width: 96
                    }}
                    backgroundColor={color}
                  />
                  <Text small>{color}</Text>
                </div>
              ))}
            </Flex>
          </Grid>
          <GridGroup span={6}>
            <Grid span={6}>
              <Heading>Form Elements</Heading>
              <Divider />
            </Grid>
            <Grid span={3}>
              <Input
                name='input'
                label='Input'
              />
              <Select
                name='select'
                label='Select'
                options={[
                  { children: 'Sixteen' },
                  { children: 'Thirty-Two' },
                  { children: 'Sixty-Four' },
                  { children: 'One Hundred Twenty-Eight' },
                  { children: 'Two Hundred Fifty-Six' }
                ]}
              />
              <Textarea
                name='textarea'
                label='Textarea'
                rows={5}
              />
            </Grid>
            <Grid span={3}>
              <Input
                name='input2'
                label='Input Two'
              />
              <Checkbox
                name='checkbox'
                label='Checkbox'
                mb={2}
              />
              <Radio
                name='radio'
                label='Radio 1'
              />
              <Radio
                name='radio'
                label='Radio 2'
              />
              <Radio
                name='radio'
                label='Radio 3'
                mb={2}
              />
              <Block>
                <Button mr={2} children='Save' />
                <Button
                  backgroundColor='midgray'
                  children='Cancel' />
              </Block>
            </Grid>
          </GridGroup>
          <Grid span={3}>
            <Heading>Buttons</Heading>
            <Divider />
            <div>
              <Button
                mr={2}
                children='Button' />
              <Button
                mr={2}
                backgroundColor='green'
                children='Button' />
              <Button
                mr={2}
                backgroundColor='orange'
                children='Button' />
              <Button
                mr={2}
                backgroundColor='red'
                children='Button' />
              <Button
                mr={2}
                backgroundColor='midgray'
                children='Button' />
            </div>
            <Group mt={2}>
              <ButtonOutline children='ButtonGroup' />
              <ButtonOutline children='ButtonGroup' />
              <ButtonOutline children='ButtonGroup' />
            </Group>
          </Grid>
          <Grid span={3}>
            <Heading>Message</Heading>
            <Divider />
            <Message backgroundColor='blue'>
              Hello Message!
              <Space auto />
              <Close />
            </Message>
            <Message backgroundColor='green'>
              Hello Message!
              <Space auto />
              <Close />
            </Message>
            <Message backgroundColor='orange'>
              Hello Message!
              <Space auto />
              <Close />
            </Message>
            <Message backgroundColor='red'>
              Hello Message!
              <Space auto />
              <Close />
            </Message>
          </Grid>
          <Grid span={3}>
            <Heading>Card</Heading>
            <Divider />
            <Flex mx={-2}>
              <Box p={2} col={4}>
                <Card>
                  <CardImage
                    src='https://images.unsplash.com/photo-1457978064644-ac327d69ad15?q=5&w=1024' />
                  <Text bold>
                    Hello Card
                  </Text>
                </Card>
              </Box>
              <Box p={2} col={4}>
                <Card>
                  <CardImage
                    src='https://images.unsplash.com/photo-1457978064644-ac327d69ad15?q=5&w=1024' />
                  <Text bold>
                    Hello Card
                  </Text>
                </Card>
              </Box>
              <Box p={2} col={4}>
                <Card>
                  <CardImage
                    src='https://images.unsplash.com/photo-1457978064644-ac327d69ad15?q=5&w=1024' />
                  <Text bold>
                    Hello Card
                  </Text>
                </Card>
              </Box>
            </Flex>
          </Grid>
          <Grid span={3}>
            <Heading>Progress</Heading>
            <Divider />
            <Progress
              color='primary'
              value={5/8} />
            <Progress
              color='green'
              value={3/8} />
            <Progress
              color='red'
              value={1/8} />
          </Grid>
          <Grid span={3}>
            <Heading>Slider</Heading>
            <Divider />
            <Slider
              name='slider'
              label='Slider'
              color='blue'
              defaultValue={3/8} />
          </Grid>
        </Container>
      </div>
    )
  }
}

export default StyleGuide

