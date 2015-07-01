
import React from 'react'
import {
  Arrow,
  Badge,
  Container,
  Row,
  Col,
  PageHeader,
  Section,
  SectionHeader,
  Footer,
  Flex,
  FlexItem,
  Media,
  MediaImg,
  MediaBody,
  Link,
  LinkBtn,
  Button,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Toolbar,
  NavItem,
} from '..'

export default [
  {
    name: 'Grid',
    examples: [
      <Container>
        <Row>
          <Col xs={6}>Col 6</Col>
          <Col xs={6}>Col 6</Col>
        </Row>
      </Container>,
      <Container>
        <Row>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
          <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
        </Row>
      </Container>
    ]
  },
  {
    name: 'Media',
    examples: [
      <Media>
        <MediaImg>
          <img src='//placehold.it/128' />
        </MediaImg>
        <MediaBody>
          Media Object
        </MediaBody>
      </Media>,
      <Media>
        <MediaImg middle>
          <img src='//placehold.it/128' />
        </MediaImg>
        <MediaBody middle>
          Media Object
        </MediaBody>
      </Media>,
      <Media>
        <MediaBody middle>
          Media Object
        </MediaBody>
        <MediaImg middle>
          <img src='//placehold.it/128' width='128' />
        </MediaImg>
      </Media>,
    ]
  },
  {
    name: 'Flex',
    examples: [
      <Flex>
        <FlexItem auto>FlexItem</FlexItem>
        <FlexItem>FlexItem</FlexItem>
        <FlexItem>FlexItem</FlexItem>
      </Flex>
    ]
  },
  {
    name: 'PageHeader',
    examples: [
      <PageHeader
        title='PageHeader'
        description='For heading the top of the page'>
        <div>Children go to the right</div>
      </PageHeader>
    ]
  },
  {
    name: 'Footer',
    examples: [
      <Footer>
        <div>Footer</div>
      </Footer>
    ]
  },
  {
    name: 'Section',
    examples: [
      <Section>
        Section adds vertical padding
      </Section>
    ]
  },
  {
    name: 'SectionHeader',
    examples: [
      <Section>
        <SectionHeader title='SectionHeader'>
          Children to the right
        </SectionHeader>
        <p>Adds a linked heading and id to sections. This is some inception type nonsense happening here.</p>
      </Section>
    ]
  },
  {
    name: 'Link',
    examples: [
      <Link href='#Link'>Link</Link>
    ]
  },
  {
    name: 'LinkBtn',
    examples: [
      <LinkBtn href='#Link'>LinkBtn</LinkBtn>,
      <LinkBtn href='#Link' outline>LinkBtn</LinkBtn>
    ]
  },
  {
    name: 'Button',
    examples: [
      <Button href='#Button'>Button</Button>,
      <Button href='#Button' color='red'>Button</Button>,
      <Button href='#Button' outline>Button</Button>,
      <Button href='#Button' outline color='blue'>Button</Button>,
    ]
  },
  {
    name: 'Input',
    examples: [
      <Input
        label='Input'
        name='demo-input' />
    ]
  },
  {
    name: 'Select',
    examples: [
      <Select
        label='Select'
        name='demo-select'
        options={[
          { value: 1, label: 'One' },
          { value: 2, label: 'Two' },
          { value: 3, label: 'Three' },
        ]}/>
    ]
  },
  {
    name: 'Textarea',
    examples: [
      <Textarea
        label='Textarea'
        name='demo-textarea'
        rows={4} />
    ]
  },
  {
    name: 'Radio',
    description: '',
    examples: [
      <Radio
        label='Radio 1'
        value='1'
        name='demo-radio' />,
      <div>
        <Radio
          label='Radio 2'
          value='2'
          name='demo-radio' />
        <Radio
          label='Radio 3'
          value='3'
          name='demo-radio' />
      </div>
    ]
  },
  {
    name: 'Checkbox',
    description: '',
    examples: [
      <Checkbox
        label='Checkbox'
        value='checked'
        name='demo-checkbox' />
    ]
  },
  {
    name: 'Toolbar',
    examples: [
      <Toolbar>
        <FlexItem>Toolbar</FlexItem>
        <NavItem href='#Toolbar'>NavItem</NavItem>
        <NavItem href='#Toolbar'>NavItem</NavItem>
        <FlexItem auto />
        <Button>Button</Button>
      </Toolbar>,
      <Toolbar color='blue'>
        <FlexItem>Toolbar</FlexItem>
        <NavItem href='#Toolbar'>NavItem</NavItem>
        <NavItem href='#Toolbar'>NavItem</NavItem>
        <FlexItem auto />
        <Button>Button</Button>
      </Toolbar>
    ]
  },
  {
    name: 'Badge',
    examples: [
      <Badge>Badge</Badge>,
      <Badge color='green'>Badge</Badge>,
      <Badge color='red'>Badge</Badge>,
    ]
  },
  {
    name: 'Arrow',
    examples: [
      <Arrow />,
      <Arrow up />
    ]
  },
]
