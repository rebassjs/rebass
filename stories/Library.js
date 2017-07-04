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

storiesOf('Typography', module)
  .add('Default', () => (
    <div>
      <Heading>Hello Heading</Heading>
      <Subhead>Hello Subhead</Subhead>
      <Lead>Hello Lead</Lead>
      <Text>Hello Text</Text>
      <Small>Hello Small</Small>
      <Blockquote>Hello Blockquote</Blockquote>
      <Pre>Hello Pre</Pre>
      <Code>Hello Code</Code>
      <Heading>
        Hello
        <Badge children='Badge' />
      </Heading>
    </div>
  ))

storiesOf('Links', module)
  .add('Default', () => (
    <div>
      <Link href='#!' children='Link' />
      <NavLink href='#!' children='NavLink' />
      <BlockLink href='#!' children='BlockLink' />
    </div>
  ))


storiesOf('Heading', module)
  .add('Default', () => (
    <Heading
      children='Hello'
    />
  ))
  .add('Center', () => (
    <Heading
      center
      children='Hello'
    />
  ))
  .add('Not bold', () => (
    <Heading
      bold={false}
      children='Hello'
    />
  ))
  .add('H1', () => (
    <Heading
      is='h1'
      children='Hello'
    />
  ))

storiesOf('Subhead', module)
  .add('Default', () => (
    <Subhead
      children='Hello'
    />
  ))

storiesOf('Text', module)
  .add('Default', () => (
    <Text
      children='Hello Rebass'
    />
  ))
  .add('Center', () => (
    <Text
      is='div'
      center
      children='Hello'
    />
  ))
  .add('Bold', () => (
    <Text
      is='div'
      bold
      children='Hello'
    />
  ))

storiesOf('Small', module)
  .add('Default', () => (
    <Small
      children='Hello Small'
    />
  ))
  .add('Bold', () => (
    <Small
      bold
      children='Hello Small'
    />
  ))

storiesOf('Lead', module)
  .add('Default', () => (
    <Lead
      children='Hello Lead'
    />
  ))

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

storiesOf('ButtonOutline', module)
  .add('Default', () => (
    <ButtonOutline
      children='Hello'
    />
  ))
  .add('Colors', () => (
    <ButtonOutline
      color='green.5'
      children='Hello'
    />
  ))

storiesOf('ButtonCircle', module)
  .add('Default', () => (
    <ButtonCircle
      children='Hello'
    />
  ))

storiesOf('Link', module)
  .add('Default', () => (
    <Link
      href='#!'
      children='Hello Link'
    />
  ))

storiesOf('Divider', module)
  .add('Default', () => (
    <Divider />
  ))
  .add('Color', () => (
    <Divider color='blue.4' />
  ))

storiesOf('Form Elements', module)
  .add('Default', () => (
    <form>
      <Label>Input</Label>
      <Input defaultValue='Hello' />
      <Label>Select</Label>
      <Select defaultValue='Hello'>
        <option>Hello</option>
      </Select>
      <Label>Input</Label>
      <Textarea defaultValue='Hello' />
      <Label>
        <Checkbox checked />
        Check it
      </Label>
      <Label>
        <Radio checked />
        Pick me
      </Label>
      <Label>
        <Radio />
        Pick me
      </Label>
      <Label>Slider</Label>
      <Slider />
      <Progress my={3} value={1/3} />
    </form>
  ))

storiesOf('Input', module)
  .add('Default', () => (
    <div>
      <Label children='Label' />
      <Input />
    </div>
  ))
  .add('Disabled', () => (
    <Input disabled defaultValue='Hello' />
  ))

storiesOf('Select', module)
  .add('Default', () => (
    <Select>
      <option>Hello</option>
      <option>Hi</option>
    </Select>
  ))

storiesOf('Textarea', module)
  .add('Default', () => (
    <Textarea />
  ))

storiesOf('Checkbox', module)
  .add('Default', () => (
    <Checkbox />
  ))

storiesOf('Radio', module)
  .add('Default', () => (
    <Radio />
  ))

storiesOf('Slider', module)
  .add('Default', () => (
    <Slider />
  ))

storiesOf('Image', module)
  .add('Default', () => (
    <Image src={photo} />
  ))

storiesOf('Avatar', module)
  .add('Default', () => (
    <Avatar src={photo} />
  ))
  .add('Size 96', () => (
    <Avatar
      src={photo}
      size={96}
    />
  ))

storiesOf('BackgroundImage', module)
  .add('Default', () => (
    <BackgroundImage
      ratio={1/2}
      src={photo}
    />
  ))

storiesOf('Card', module)
  .add('Default', () => (
    <Card
      children='Hello Card'
    />
  ))
  .add('Padded', () => (
    <Card
      p={3}
      children='Hello Card'
    />
  ))
  .add('Image', () => (
    <Card w={256}>
      <BackgroundImage
        src={photo}
      />
      <Subhead p={2}>Hello</Subhead>
    </Card>

  ))

storiesOf('Panel', module)
  .add('Default', () => (
    <Panel>
      <PanelHeader>Hello Panel</PanelHeader>
      <Box p={2}>
        Hello there, Panel
      </Box>
      <PanelFooter>Footer</PanelFooter>
    </Panel>
  ))
  .add('Blue', () => (
    <Panel color='blue.5'>
      <PanelHeader
        color='white'
        bg='blue.5'>
        Hello Panel
      </PanelHeader>
      <Box p={2}>
        Hello there, Panel
      </Box>
      <PanelFooter color='blue.5'>
        Footer
      </PanelFooter>
    </Panel>
  ))

storiesOf('Message', module)
  .add('Default', () => (
    <div>
      <Message mb={2} children='Hello Message' />
      <Message mb={2} bg='red.5' children='Hello Message' />
      <Message mb={2} bg='orange.5' children='Hello Message' />
      <Message mb={2} bg='yellow.5' children='Hello Message' />
      <Message mb={2} bg='green.5' children='Hello Message' />
    </div>
  ))

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
