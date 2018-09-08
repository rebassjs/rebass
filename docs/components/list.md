
# Components

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href='#flex'>Flex</a></li>
<li><a href='#box'>Box</a></li>
<li><a href='#base'>Base</a></li>
<li><a href='#css'>CSS</a></li>
<li><a href='#root'>Root</a></li>
<li><a href='#provider'>Provider</a></li>
<li><a href='#darkmode'>DarkMode</a></li>
<li><a href='#button'>Button</a></li>
<li><a href='#buttonoutline'>ButtonOutline</a></li>
<li><a href='#buttoncircle'>ButtonCircle</a></li>
<li><a href='#buttontransparent'>ButtonTransparent</a></li>
<li><a href='#link'>Link</a></li>
<li><a href='#navlink'>NavLink</a></li>
<li><a href='#blocklink'>BlockLink</a></li>
<li><a href='#close'>Close</a></li>
<li><a href='#text'>Text</a></li>
<li><a href='#heading'>Heading</a></li>
<li><a href='#subhead'>Subhead</a></li>
<li><a href='#caps'>Caps</a></li>
<li><a href='#small'>Small</a></li>
<li><a href='#lead'>Lead</a></li>
<li><a href='#truncate'>Truncate</a></li>
<li><a href='#blockquote'>Blockquote</a></li>
<li><a href='#divider'>Divider</a></li>
<li><a href='#pre'>Pre</a></li>
<li><a href='#code'>Code</a></li>
<li><a href='#samp'>Samp</a></li>
<li><a href='#measure'>Measure</a></li>
<li><a href='#label'>Label</a></li>
<li><a href='#input'>Input</a></li>
<li><a href='#select'>Select</a></li>
<li><a href='#textarea'>Textarea</a></li>
<li><a href='#radio'>Radio</a></li>
<li><a href='#checkbox'>Checkbox</a></li>
<li><a href='#slider'>Slider</a></li>
<li><a href='#switch'>Switch</a></li>
<li><a href='#image'>Image</a></li>
<li><a href='#backgroundimage'>BackgroundImage</a></li>
<li><a href='#avatar'>Avatar</a></li>
<li><a href='#embed'>Embed</a></li>
<li><a href='#container'>Container</a></li>
<li><a href='#group'>Group</a></li>
<li><a href='#row'>Row</a></li>
<li><a href='#column'>Column</a></li>
<li><a href='#border'>Border</a></li>
<li><a href='#card'>Card</a></li>
<li><a href='#panel'>Panel</a></li>
<li><a href='#progress'>Progress</a></li>
<li><a href='#banner'>Banner</a></li>
<li><a href='#message'>Message</a></li>
<li><a href='#toolbar'>Toolbar</a></li>
<li><a href='#tabs'>Tabs</a></li>
<li><a href='#tab'>Tab</a></li>
<li><a href='#badge'>Badge</a></li>
<li><a href='#circle'>Circle</a></li>
<li><a href='#dot'>Dot</a></li>
<li><a href='#arrow'>Arrow</a></li>
<li><a href='#donut'>Donut</a></li>
<li><a href='#position'>Position</a></li>
<li><a href='#relative'>Relative</a></li>
<li><a href='#absolute'>Absolute</a></li>
<li><a href='#fixed'>Fixed</a></li>
<li><a href='#sticky'>Sticky</a></li>
<li><a href='#modal'>Modal</a></li>
<li><a href='#drawer'>Drawer</a></li>
<li><a href='#carousel'>Carousel</a></li>
<li><a href='#tooltip'>Tooltip</a></li>
<li><a href='#hide'>Hide</a></li>
<li><a href='#overlay'>Overlay</a></li>
  </ul>
</details>

## Flex

```.jsx
<Flex
  mx={-3}
  flexWrap='wrap'>
  <Box width={[ 1, 1/2 ]} p={3} color='white' bg='blue'>
    Flex
  </Box>
  <Box width={[ 1, 1/2 ]} p={3} color='white' bg='violet'>
    Box
  </Box>
</Flex>
```

### Props

- `flexWrap`
- `flexDirection`
- `alignItems`
- `justifyContent`

## Box

```.jsx
<Box
  px={3}
  py={4}
  color='white'
  bg='blue'>
  Hello
</Box>

```

### Props

- `width`
- `fontSize`
- `flex`
- `order`
- `alignSelf`

## Base

### Props

- `fontSize`

## CSS

## Root

### Props

- `fontFamily`

## Provider

## DarkMode

## Button

```.jsx
<Button
  children='Hello'
/>
```

### Props

- `fontSize`
- `fontWeight`
- `lineHeight`
- `borderRadius`
- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`

## ButtonOutline

```.jsx
<ButtonOutline
  children='Hello'
/>
```

## ButtonCircle

```.jsx
<ButtonCircle
  children='Hello'
/>
```

## ButtonTransparent

```.jsx
<ButtonTransparent>
  Hello
</ButtonTransparent>
```

## Link

```.jsx
<Link
  href='#!'
  children='Hello'
/>
```

## NavLink

```.jsx
<NavLink
  href='#!'
  children='Hello'
/>
```

### Props

- `width`
- `fontSize`
- `fontWeight`

## BlockLink

```.jsx
<BlockLink
  href='#!'
  children='Hello'
/>
```

### Props

- `width`

## Close

```.jsx
<Close />
```

### Props

- `lineHeight`

## Text

```.jsx
<Text
  textAlign='center'
  fontWeight='bold'
  children='Hello'
/>
```

### Props

- `fontFamily`
- `fontSize`
- `fontWeight`
- `textAlign`
- `lineHeight`

## Heading

```.jsx
<Heading
  children='Hello'
/>
```

### Props

- `fontFamily`
- `fontSize`
- `fontWeight`
- `lineHeight`
- `textAlign`

## Subhead

```.jsx
<Subhead
  children='Hello'
/>
```

## Caps

```.jsx
<Caps>Hello</Caps>
```

### Props

- `letterSpacing`

## Small

```.jsx
<Small
  children='Hello'
/>
```

## Lead

```.jsx
<Lead>
  Hello Lead
</Lead>
```

## Truncate

```.jsx
<Truncate>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Truncate>
```

## Blockquote

```.jsx
<Blockquote>
  “The simplest scale is a single note, and sticking with a single note draws more attention to other parameters, such as rhythm and inflection.”
</Blockquote>
```

## Divider

```.jsx
<Divider
  w={1}
  borderColor='blue'
/>
```

### Props

- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `borderColor`

## Pre

```.jsx
<Pre
  children="const hello = 'Rebass'"
/>
```

### Props

- `fontFamily`
- `fontSize`

## Code

```.jsx
<Code
  children='<Hello />'
/>
```

### Props

- `fontFamily`
- `fontSize`

## Samp

```.jsx
<Samp>
  1024
</Samp>
```

## Measure

```.jsx
<Measure>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</Measure>
```

### Props

- `maxWidth`

## Label

```.jsx
<Label>
  Hello Label
</Label>
```

### Props

- `alignItems`
- `fontSize`

## Input

```.jsx
<Input
  defaultValue='Hello'
  placeholder='Input'
/>
```

### Props

- `fontSize`
- `lineHeight`
- `width`
- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `borderColor`
- `boxShadow`
- `borderRadius`

## Select

```.jsx
<Select>
  <option>Hello</option>
  <option>Beep</option>
  <option>Boop</option>
</Select>
```

### Props

- `width`
- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `borderColor`
- `boxShadow`
- `borderRadius`

## Textarea

```.jsx
<Textarea
  rows={4}
  defaultValue='Hello'
/>
```

### Props

- `width`
- `fontSize`
- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `borderColor`
- `boxShadow`
- `borderRadius`

## Radio

```.jsx
<radiogroup>
  <Label>
    <Radio
      name='radio'
      defaultChecked
    />
    Hello
  </Label>
  <Label>
    <Radio name='radio' />
    Beep
  </Label>
</radiogroup>
```

## Checkbox

```.jsx
<Label>
  <Checkbox defaultChecked />
  Hello
</Label>
```

## Slider

```.jsx
<Slider />
```

### Props

- `width`
- `borderRadius`

## Switch

```.jsx
<Switch
  checked={true}
/>
```

### Props

- `borderRadius`

## Image

```.jsx
<Image
  src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
/>
```

### Props

- `width`

## BackgroundImage

```.jsx
<BackgroundImage
  ratio={1/2}
  src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
/>
```

### Props

- `image`
- `width`
- `ratio`
- `backgroundSize`
- `backgroundPosition`

## Avatar

```.jsx
<Avatar
  size={32}
  src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
/>
```

### Props

- `borderRadius`
- `size`

## Embed

```.jsx
<Embed>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/GNCd_ERZvZM"
    frameBorder="0"
    allowFullScreen
  />
</Embed>
```

### Props

- `ratio`

## Container

```.jsx
<Container>
  Hello
</Container>
```

### Props

- `maxWidth`

## Group

```.jsx
<Group>
  <Button children='Beep' />
  <ButtonOutline children='Boop' />
  <ButtonOutline children='Bop' />
</Group>
```

## Row

```.jsx
<Row>
  <Column>Column</Column>
  <Column>Column</Column>
</Row>
```

## Column

```.jsx
<Row>
  <Column>Column</Column>
  <Column>Column</Column>
  <Column>Column</Column>
</Row>
```

### Props

- `flex`

## Border

```.jsx
<Border
  py={2}
  top
  bottom>
  Hello
</Border>
```

### Props

- `width`
- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `borderColor`

## Card

```.jsx
<Card width={256}>
  <BackgroundImage
    ratio={1}
    src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
  />
  <Subhead p={2}>
    Hello
  </Subhead>
</Card>
```

### Props

- `width`
- `borderRadius`
- `boxShadow`

## Panel

```.jsx
<Panel color='blue'>
  <Panel.Header
    color='white'
    bg='blue'>
    Hello
  </Panel.Header>
  <Box p={3}>
    <Subhead>
      Panel
    </Subhead>
  </Box>
  <Panel.Footer color='blue'>
    Footer
  </Panel.Footer>
</Panel>
```

### Props

- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `borderColor`
- `borderRadius`

## Progress

```.jsx
<Progress
  value={1/3}
/>
```

### Props

- `width`
- `borderRadius`

## Banner

```.jsx
<Banner
  color='white'
  bg='darken'
  backgroundImage='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'>
  <Heading
    f={[ 4, 5, 6, 7 ]}>
    Hello
  </Heading>
</Banner>
```

### Props

- `minHeight`
- `backgroundSize`
- `backgroundPosition`
- `backgroundImage`

## Message

```.jsx
<Message>
  Hello
</Message>
```

### Props

- `minHeight`
- `fontWeight`

## Toolbar

```.jsx
<Toolbar>
  <NavLink>
    Hello
  </NavLink>
  <NavLink ml='auto'>
    Beep
  </NavLink>
  <NavLink>
    Boop
  </NavLink>
</Toolbar>
```

### Props

- `minHeight`

## Tabs

```.jsx
<Tabs>
  <Tab borderColor='blue'>
    Beep
  </Tab>
  <Tab>
    Boop
  </Tab>
  <Tab>
    Bop
  </Tab>
</Tabs>
```

### Props

- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `borderColor`

## Tab

```.jsx
<Tab borderColor='blue'>
  Hello
</Tab>
```

### Props

- `fontSize`
- `fontWeight`
- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `borderColor`

## Badge

```.jsx
<Heading>
  Hello
  <Badge>
    Beep
  </Badge>
</Heading>
```

### Props

- `fontSize`
- `fontWeight`
- `borderRadius`

## Circle

```.jsx
<Circle>
  A
</Circle>
```

### Props

- `textAlign`
- `borderRadius`
- `size`

## Dot

```.jsx
<Flex>
  <Dot bg='black' />
  <Dot />
  <Dot />
</Flex>
```

### Props

- `size`
- `borderRadius`
- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `borderColor`

## Arrow

```.jsx
<Arrow direction='down' />
```

## Donut

```.jsx
<Donut
  value={2/3}
  strokeWidth={3}
  size={256}
  color='blue'
/>
```

## Position

```.jsx
<Position
  p={3}
  bg='green'
  position='relative'>
  Hello
</Position>
```

### Props

- `zIndex`
- `top`
- `right`
- `bottom`
- `left`

## Relative

```.jsx
<Relative>
  <Absolute bottom={0} right={0}>
    Hello
  </Absolute>
</Relative>
```

## Absolute

```.jsx
<Relative>
  <Absolute bottom={0} right={0}>
    Hello
  </Absolute>
</Relative>
```

## Fixed

```.jsx
<div>
  {false && (
    <Fixed
      m={2}
      p={3}
      bg='green'
      zIndex={1}
      right={0}
      bottom={0}>
      Hello
    </Fixed>
  )}
</div>
```

## Sticky

```.jsx
<Sticky m={2} top={0} right={0} bottom={0}>
  Hello
</Sticky>
```

## Modal

```.jsx
<div>
  {false && (
    <div>
      <Fixed
        top={0}
        right={0}
        bottom={0}
        left={0}
      />
      <Modal width={256}>
        <Heading>Hello</Heading>
      </Modal>
    </div>
  )}
</div>
```

### Props

- `borderRadius`
- `width`
- `maxWidth`
- `maxHeight`

## Drawer

```.jsx
<div>
  <Drawer
    open={false}
    side='right'
    p={3}
    color='white'
    bg='black'>
    <Heading>Hello</Heading>
  </Drawer>
</div>
```

### Props

- `position`
- `zIndex`
- `height`

## Carousel

```.jsx
<Carousel
  index={false ? 1 : 0}>
  <Box bg='blue'>
    <Flex
      p={6}
      justify='center'
      align='center'>
      <Heading>Hello</Heading>
    </Flex>
  </Box>
  <Box bg='gray'>
    <Flex
      p={6}
      justify='center'
      align='center'>
      <Heading>Rebass</Heading>
    </Flex>
  </Box>
</Carousel>
```

## Tooltip

```.jsx
<Tooltip text='Hello'>
  <Text>
    Hover Me
  </Text>
</Tooltip>
```

## Hide

```.jsx
<Hide p={2} bg='blue' xsmall>Hide xsmall</Hide>
<Hide p={2} bg='green' small>Hide small</Hide>
<Hide p={2} bg='yellow' medium>Hide medium</Hide>
<Hide p={2} bg='orange' large>Hide large</Hide>
<Hide p={2} bg='red' xlarge>Hide xlarge</Hide>
```

## Overlay

### Props

- `borderRadius`
- `width`
- `maxWidth`
- `maxHeight`

