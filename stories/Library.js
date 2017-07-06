import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import Rebass, {
  Flex,
  Box,
  Button,
  ButtonOutline,
  ButtonCircle,
  Link,
  NavLink,
  BlockLink,
  Heading,
  Subhead,
  Text,
  Small,
  Lead,
  Pre,
  Code,
  Samp,
  Blockquote,
  Label,
  Input,
  Select,
  Textarea,
  Checkbox,
  Radio,
  Slider,
  Image,
  Avatar,
  BackgroundImage,
  Container,
  Divider,
  Media,
  Card,
  Banner,
  Panel,
  PanelHeader,
  PanelFooter,
  Progress,
  Message,
  Group,
  Toolbar,
  Badge,
  Tabs,
  TabItem,
  DotButton,
  Border,
  Relative,
  Absolute,
  Fixed,
} from '../src'

const photo = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'

storiesOf('Group', module)
  .add('Default', () => (
    <Group>
      <Button children='Hello' />
      <ButtonOutline children='Hello' />
      <ButtonOutline children='Hello' />
    </Group>
  ))

storiesOf('Media', module)
  .add('Default', () => (
    <Media>
      <Image
        src={photo}
        mr={3}
        width={128}
        height={128}
      />
      <Box>
        <Text>Hello Media Object</Text>
      </Box>
    </Media>
  ))

storiesOf('Toolbar', module)
  .add('Default', () => (
    <Toolbar>
      <NavLink children='Hello' />
      <NavLink children='Toolbar' />
      <NavLink ml='auto' children='Beep Boop' />
    </Toolbar>
  ))

storiesOf('Tabs', module)
  .add('Default', () => (
    <Tabs>
      <TabItem
        href='#!'
        active
        children='Hello'
      />
      <TabItem
        href='#!'
        children='Tabs'
      />
      <TabItem
        href='#!'
        children='Three'
      />
    </Tabs>
  ))

storiesOf('DotButton', module)
  .add('Default', () => (
    <Flex>
      <DotButton active />
      <DotButton />
      <DotButton />
    </Flex>
  ))

storiesOf('Border', module)
  .add('Default', () => (
    <Border p={2}>
      Hello
    </Border>
  ))
  .add('Color', () => (
    <Border
      p={2}
      color='tomato'>
      Hello
    </Border>
  ))
  .add('Width', () => (
    <Border
      p={2}
      borderWidth={4}
      color='tomato'>
      Hello
    </Border>
  ))
  .add('Directions', () => (
    <Border
      py={2}
      top
      bottom>
      Hello
    </Border>
  ))

storiesOf('Fixed', module)
  .add('Default', () => (
    <Fixed
      children='Fixed'
    />
  ))
  .add('Bottom right', () => (
    <Fixed
      bottom
      right
      children='Fixed'
    />
  ))

const CustomButton = styled(Button)`
  border: 1px solid rgba(0, 0, 0, .25);
  background-image: linear-gradient(transparent, rgba(0, 0, 0, .125));
  box-shadow: 0 0 4px rgba(0, 0, 0, .25)
`

storiesOf('Customizing', module)
  .add('Button', () => (
    <CustomButton
      children='hello'
    />
  ))
