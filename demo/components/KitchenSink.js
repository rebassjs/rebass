
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Arrow,
  Badge,
  Banner,
  Block,
  Breadcrumbs,
  Button,
  ButtonOutline,
  Card,
  CardImage,
  Checkbox,
  Close,
  Container,
  Divider,
  Dropdown,
  DropdownMenu,
  Footer,
  Heading,
  HeadingLink,
  Input,
  InputRange,
  Label,
  Media,
  Menu,
  Message,
  NavItem,
  PageHeader,
  Panel,
  PanelFooter,
  PanelHeader,
  Pre,
  Progress,
  Radio,
  Section,
  SectionHeader,
  Select,
  Space,
  Text,
  Textarea,
  Toolbar,
  Tooltip
} from '../../src'

const KitchenSink = () => (
  <Section>
    <SectionHeader heading='Kitchen Sink' />
    <div>
      <Heading level={3}>Forms</Heading>
      <Label children='Label' />
      <Input name='input_demo' label='Input' />
      <Textarea name='textarea_demo' label='Textarea' />
      <Select name='select_demo'
        label='Select'
        options={[
          { value: 2, label: 'Two' },
          { value: 4, label: 'Four' },
          { value: 8, label: 'Eight' },
          { value: 16, label: 'Sixteen' },
          { value: 32, label: 'Thirty-Two' }
        ]} />
      <Radio name='radio_demo' label='Radio' />
      <Checkbox name='checkbox_demo' label='Checkbox' />
      <InputRange name='inputrange_demo' label='InputRange' defaultValue={.25} />
      <Button children='Button' />
      <Space />
      <ButtonOutline children='ButtonOutline' />
    </div>
    <Divider />
    <div>
      <Heading level={3}>UI</Heading>
      <Flex gutter={2}>
        <Box col={4} px={2}>
          <Card>
            <CardImage src='http://lorempixel.com/256/256/cats' />
            <Heading children='Card' />
            <Text children='Card with some text' />
          </Card>
        </Box>
        <Box col={4} px={2}>
          <Card>
            <CardImage src='http://lorempixel.com/256/256/cats' />
            <Heading children='Card' />
            <Text children='Card with some text' />
          </Card>
        </Box>
        <Box col={4} px={2}>
          <Card>
            <CardImage src='http://lorempixel.com/256/256/cats' />
            <Heading children='Card' />
            <Text children='Card with some text' />
          </Card>
        </Box>
      </Flex>
      <Panel type='success'>
        <PanelHeader children='PanelHeader' />
        <Text children='This is the Panel body' />
        <PanelFooter children='PanelFooter is a good place for feet' />
      </Panel>
      <Box py={3}>
        <Toolbar>
          <NavItem children='Toolbar' />
          <Space auto />
          <NavItem children='NavItem' />
          <NavItem children='NavItem' />
        </Toolbar>
      </Box>
      <Menu>
        <NavItem children='This is a Menu' />
        <NavItem children='With a few' />
        <NavItem children='NavItem components' />
      </Menu>
      <Button>
        Arrow
        <Arrow />
      </Button>
      <Divider />
      <Heading>
        Badger <Badge>Badge</Badge>
      </Heading>
      <Text children='Text me later' />
      <Text small children='Let me think about it' />
      <Block borderLeft>
        <Heading>Block</Heading>
      </Block>
      <Breadcrumbs
        links={[
          { href: '#!', children: 'Jxnblk' },
          { href: '#!', children: 'Rebass' },
          { href: '#!', children: 'Demo' },
          { href: '#!', children: 'Breadcrumbs' }
        ]} />
      <Box py={4}>
        <Dropdown>
          <Button>
            Dropdown <Arrow />
          </Button>
          <DropdownMenu open>
            <NavItem children='NavItem' />
            <NavItem children='NavItem' />
            <Divider compact />
            <NavItem children='NavItem' />
            <NavItem children='NavItem' />
          </DropdownMenu>
        </Dropdown>
      </Box>
      <Footer>
        Footer. ©2016 Jxnblk
      </Footer>
      <Media img='http://lorempixel.com/128/128/cats'>
        Media object loves cats
      </Media>
      <Message type='error'>
        This is a very important message
        <Space auto />
        <Close />
      </Message>
      <PageHeader
        heading='This is a PageHeader'
        description='It really should go at the top of the page, not way down here.' />
      <Pre>Pre: `for preformatted code and such.`</Pre>
      <Progress value={.875} />
      <Tooltip title='Pro tip: tooltips are sometimes useful'>
        <Text children='Tooltip' />
      </Tooltip>
    </div>
  </Section>
)

export default KitchenSink

