
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
  FlexRow,
  Flex,
  Media,
  LinkBtn,
  Button,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Range,
  Fieldset,
  Progress,
  Toolbar,
  NavItem,
  Menu,
  MenuItem,
  Message,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  Card,
  Banner,
} from '..'

export default [
  {
    name: 'Container',
    description: 'Sets max-width, left and right padding, and centers elements',
    examples: [
      <Container>
        Hamburgers
      </Container>
    ]
  },
  {
    name: 'Row',
    description: 'Clearfix and negative-margin gutter compensation',
    examples: [
      <Row>
        <Col sm={6}>Col 6</Col>
        <Col sm={6}>Col 6</Col>
      </Row>
    ]
  },
  {
    name: 'Col',
    description: 'Responsive grid column with gutters',
    examples: [
      <Row>
        <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
        <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
        <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
        <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
        <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
        <Col sm={6} md={4} lg={3}>Col sm6 md4 lg3</Col>
      </Row>
    ]
  },
  /*
  {
    name: 'Grid',
    description: 'Responsive Container, Row, and Col components based on basscss-grid',
    examples: [
      <Container>
        <Row>
          <Col xs={6}>Col 6</Col>
          <Col xs={6}>Col 6</Col>
        </Row>
      </Container>,
    ]
  },
  */
  {
    name: 'Media',
    description: 'Media object with vertical alignment options',
    examples: [
      <Media
        image={<img src='//placehold.it/128' width={128} height={128} />}>
        Hamburger
      </Media>,
      <Media
        middle
        image={<img src='//placehold.it/128' width={128} heigh={128} />}>
        Hamburger
      </Media>,
      <Media
        bottom
        image={<img src='//placehold.it/128' width={128} heigh={128} />}>
        Hamburger
      </Media>,
    ]
  },
  {
    name: 'FlexRow',
    description: 'Container set to display flex with gutters',
    examples: [
      <FlexRow>
        <Flex>Hamburger</Flex>
        <Flex>Hamburger</Flex>
      </FlexRow>,
      <FlexRow wrap pad={false}>
        <div>Hamburger</div>
        <div>Hamburger</div>
      </FlexRow>
    ]
  },
  {
    name: 'Flex',
    description: 'Flexbox item container with default padding',
    examples: [
      <FlexRow>
        <Flex auto>Hamburger</Flex>
        <Flex pad={false}>Hamburger</Flex>
        <Flex noshrink>Hamburger</Flex>
      </FlexRow>
    ]
  },
  {
    name: 'PageHeader',
    description: 'Heading and description for main page headers with border bottom. Child elements are displayed to the right.',
    examples: [
      <PageHeader
        title='Hamburger'
        description='Fries, onion rings, and shakes'>
        <div>Medium Rare</div>
      </PageHeader>
    ]
  },
  {
    name: 'Footer',
    description: 'Footer with border top',
    examples: [
      <Footer>
        <div>Hamburger</div>
      </Footer>
    ]
  },
  {
    name: 'Section',
    description: 'Section element with vertical padding',
    examples: [
      <Section>
        Hamburger
      </Section>
    ]
  },
  {
    name: 'SectionHeader',
    description: 'Header for sections with id linked heading. Child elements display to the right',
    examples: [
      <Section>
        <SectionHeader title='Hamburger'>
          Medium rare
        </SectionHeader>
        <p>Section inception</p>
      </Section>
    ]
  },
  {
    name: 'LinkBtn',
    description: 'Solid and outline button styled links',
    examples: [
      <LinkBtn href='#Link'>Hamburger</LinkBtn>,
      <LinkBtn href='#Link' color='red'>Hamburger</LinkBtn>,
      <LinkBtn href='#Link' outline>Hamburger</LinkBtn>,
      <LinkBtn href='#Link' outline color='blue'>Hamburger</LinkBtn>
    ]
  },
  {
    name: 'Button',
    description: 'Solid and outline buttons with color prop',
    examples: [
      <Button>Hamburger</Button>,
      <Button>Hamburger</Button>,
      <Button>Hamburger</Button>,
      <Button>Hamburger</Button>,
    ]
  },
  {
    name: 'Input',
    description: 'Wrapper for form label and input elements',
    examples: [
      <Input
        label='Hamburger'
        name='demo-input' />
    ]
  },
  {
    name: 'Select',
    description: 'Wrapper for form label and select elements',
    examples: [
      <Select
        label='Hamburger'
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
    description: 'Wrapper for form label and textarea elements',
    examples: [
      <Textarea
        label='Hamburger'
        name='demo-textarea'
        rows={4} />
    ]
  },
  {
    name: 'Radio',
    description: 'Wrapper for form label and radio input elements',
    examples: [
      <Radio
        label='Hamburger 1'
        value='1'
        name='demo-radio' />,
      <div>
        <Radio
          label='Hamburger 2'
          value='2'
          name='demo-radio' />
        <Radio
          label='Hamburger 3'
          value='3'
          name='demo-radio' />
      </div>
    ]
  },
  {
    name: 'Checkbox',
    description: 'Wrapper for form label and checkbox input elements',
    examples: [
      <Checkbox
        label='Hamburger'
        value='checked'
        name='demo-checkbox' />
    ]
  },
  {
    name: 'Range',
    description: 'Wrapper for form label and range input elements',
    examples: [
      <Range
        label='Hamburger'
        name='demo-range' />
    ]
  },
  {
    name: 'Fieldset',
    description: 'Wrapper for fieldset and legend elements',
    examples: [
      <Fieldset
        legend='Hamburger'>
        <Input
          label='Fries'
          name='demo-fries' />
        <Input
          label='Pickles'
          name='demo-pickles' />
        <Select
          label='Temperature'
          name='demo-temperature'
          options={[
            { value: 1, label: 'Rare' },
            { value: 2, label: 'Medium Rare' },
            { value: 3, label: 'Medium' },
            { value: 4, label: 'Medium Well' },
            { value: 5, label: 'Well Done' },
          ]}/>
      </Fieldset>
    ]
  },
  {
    name: 'Progress',
    description: 'Styled progress element',
    examples: [
      <Progress value={32} max={100} />,
      <Progress value={96} max={100} color='red' />,
    ]
  },
  {
    name: 'Toolbar',
    description: 'Styled box with flexbox layout, padding, and reversed text on a color background',
    examples: [
      <Toolbar>
        <Flex>Hamburger</Flex>
        <NavItem href='#Toolbar'>Hot Dog</NavItem>
        <NavItem href='#Toolbar'>Fries</NavItem>
        <Flex auto />
        <Button>Shake</Button>
      </Toolbar>,
      <Toolbar color='blue'>
        <Flex>Hamburger</Flex>
        <NavItem href='#Toolbar'>Hot Dog</NavItem>
        <NavItem href='#Toolbar'>Fries</NavItem>
        <Flex auto />
        <Button color='darken-3'>Shake</Button>
      </Toolbar>
    ]
  },
  {
    name: 'NavItem',
    description: 'Inline block padded link',
    examples: [
      <NavItem href='#NavItem'>Hamburger</NavItem>,
      <NavItem href='#NavItem' flush>Hamburger</NavItem>
    ]
  },
  {
    name: 'Menu',
    description: 'Styled box with white background and rounded borders',
    examples: [
      <Menu>
        <MenuItem href='#Menu'
          label='Hambuger' />
        <MenuItem href='#Menu'
          label='Hot Dog' />
        <MenuItem href='#Menu'
          label='Onion Rings' />
      </Menu>
    ]
  },
  {
    name: 'MenuItem',
    description: 'Block-level padded link',
    examples: [
      <MenuItem href='#MenuItem'>Hamburger</MenuItem>,
        <MenuItem href='#MenuItem' flush>Hamburger</MenuItem>,
        <MenuItem href='#MenuItem' compact>Hamburger</MenuItem>,
        <MenuItem href='#MenuItem' compact flush>Hamburger</MenuItem>
    ]
  },
  {
    name: 'Message',
    description: 'Styled box with padding and background color for application flash messages',
    examples: [
      <Message>Sumbitted hamburger request</Message>,
      <Message color='green'>Hamburger successfully acquired</Message>,
      <Message color='red'>Warning! Pickles missing from hamburger</Message>,
      <Message color='red' outline>Warning! Onion has been carmelized</Message>,
    ]
  },
  {
    name: 'Badge',
    description: 'Styled inline-block element for displaying states',
    examples: [
      <Badge>Hamburger</Badge>,
      <Badge color='green'>Hamburger</Badge>,
      <Badge color='red'>Hamburger</Badge>,
    ]
  },
  {
    name: 'Arrow',
    description: 'Up and down arrow for use with clickable UI elements',
    examples: [
      <Arrow />,
      <Arrow up />,
      <Button>
        Hamburger <Arrow />
      </Button>
    ]
  },
  {
    name: 'Panel',
    description: 'Styled box with header and footer components',
    examples: [
      <Panel>
        <PanelHeader title='PanelHeader' />
        <PanelBody>
          <Input
            label='Hamburger'
            name='demo-username' />
          <Input
            label='Hot Dog'
            name='demo-password' />
          <Button>Shake</Button>
        </PanelBody>
        <PanelFooter text='PanelFooter' />
      </Panel>
    ]
  },
  {
    name: 'Card',
    description: 'Styled box with image at the top',
    examples: [
      <Row>
        <Col sm={6} md={4}>
          <Card
            image={<img src='//placehold.it/512x384' width={512} />}>
            <Media
              middle
              image={<img src='//placehold.it/48'
                width={48}
                height={48}
                className='circle'/>}>
              <h3 className='h4 m0'>Nested Hamburger</h3>
            </Media>
          </Card>
        </Col>
      </Row>
    ]
  },
  {
    name: 'Banner',
    description: 'Hero banner styled box with background image props',
    examples: [
      <Banner>
        <h1 className='m0'>Hamburger</h1>
      </Banner>,
      <Banner
        header='BannerHeader'
        footer='BannerFooter'
        bgImage='url(https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg)'>
        <h1 className='m0'>Hamburger with Background Image</h1>
      </Banner>,
      <Banner
        left
        bgImage='url(https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg)'>
        <h1 className='m0'>Left Aligned Hamburger</h1>
      </Banner>
    ]
  }
]
