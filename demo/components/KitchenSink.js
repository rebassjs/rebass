
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
  Overlay,
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

const KitchenSink = ({ toggleOverlay }) => (
  <Section>
    <PageHeader
      heading='This is a PageHeader'
      description='This is where you should head the page' />
    <Flex sm gutter={2}>
      <Box sm={4} px={2}>
        <Card>
          <CardImage src='http://lorempixel.com/256/256/cats' />
          <Heading children='Card' />
          <Text children='Card with some text' />
        </Card>
      </Box>
      <Box sm={4} px={2}>
        <Card>
          <CardImage src='http://lorempixel.com/256/256/cats' />
          <Heading children='Card' />
          <Text children='Card with some text' />
        </Card>
      </Box>
      <Box sm={4} px={2}>
        <Card>
          <CardImage src='http://lorempixel.com/256/256/cats' />
          <Heading children='Card' />
          <Text children='Card with some text' />
        </Card>
      </Box>
    </Flex>

    <Block p={3} my={3} borderLeft>
      <Heading level={3} children='Overlay' />
      <Button big
        children='Open Overlay'
        onClick={toggleOverlay} />
    </Block>

    <Flex sm gutter={2}>
      <Box sm={6} p={2}>
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
        <Box pb={2}>
          <Radio name='radio_demo' label='Radio' />
          <Checkbox name='checkbox_demo' label='Checkbox' />
        </Box>
        <InputRange name='inputrange_demo' label='InputRange' defaultValue={.25} />
        <Button children='Button' />
        <Space />
        <ButtonOutline children='ButtonOutline' />
      </Box>
      <Box sm={6} p={2}>
        <Panel theme='success'>
          <PanelHeader>
            PanelHeader
          </PanelHeader>
          <Text children='This is the Panel body' />
          <PanelFooter children='PanelFooter is a good place for feet' />
        </Panel>
      </Box>
    </Flex>
    <Divider />
    <div>
      <Box py={3}>
        <Toolbar>
          <NavItem children='Toolbar' />
          <Space auto />
          <NavItem children='NavItem' />
          <NavItem children='NavItem' />
        </Toolbar>
      </Box>
      <Message theme='error'>
        This is a very important message
        <Space auto />
        <Close />
      </Message>
      <Breadcrumbs
        links={[
          { href: '#!', children: 'Jxnblk' },
          { href: '#!', children: 'Rebass' },
          { href: '#!', children: 'Demo' },
          { href: '#!', children: 'Breadcrumbs' }
        ]} />
      <Flex wrap gutter={2}>
        <Box p={2}>
          <Menu>
            <NavItem children='This is a Menu' />
            <NavItem children='With a few' />
            <NavItem children='NavItem components' />
          </Menu>
        </Box>
        <Box p={2}>
          <Button>
            Arrow
            <Arrow />
          </Button>
        </Box>
        <Box p={2}>
          <Heading>
            Badger <Badge>Badge</Badge>
          </Heading>
          <Text children='Text me later' />
          <Text small children='Let me think about it' />
        </Box>
        <Box p={2}>
          <Block borderLeft>
            <Heading>Block</Heading>
          </Block>
        </Box>
        <Box p={2}>
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
      </Flex>
      <Divider />
      <Media img='http://lorempixel.com/128/128/cats'>
        Media object loves cats
      </Media>
      <Pre>Pre: `for preformatted code and such.`</Pre>
      <Progress value={.875} />
      <Footer>
        Footer. ©2016 Jxnblk
        <Space auto />
        <Tooltip title='Hello!'>
          <Text children='Tooltip' />
        </Tooltip>
      </Footer>
    </div>
  </Section>
)

export default KitchenSink

