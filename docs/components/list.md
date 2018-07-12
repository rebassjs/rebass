
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

Extends [Box](#box)

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
- `wrap`
- `flexDirection`
- `alignItems`
- `align`
- `justifyContent`
- `justify`

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
- `font`

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

Extends [Button](#button)

```.jsx
<ButtonOutline
  children='Hello'
/>
```

### Props

- `hover`

## ButtonCircle

Extends [Button](#button)

```.jsx
<ButtonCircle
  children='Hello'
/>
```

### Props

- `borderRadius`

## ButtonTransparent

Extends [Button](#button)

```.jsx
<ButtonTransparent>
  Hello
</ButtonTransparent>
```

### Props

- `focus`

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

- `fontSize`
- `fontWeight`
- `width`

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

Extends [ButtonTransparent](#buttontransparent)

```.jsx
<Close />
```

### Props

- `fontSize`
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
- `font`
- `fontSize`
- `fontWeight`
- `textAlign`
- `align`
- `lineHeight`

## Heading

```.jsx
<Heading
  children='Hello'
/>
```

### Props

- `fontSize`
- `fontWeight`
- `lineHeight`
- `fontFamily`
- `font`
- `textAlign`
- `align`

## Subhead

```.jsx
<Subhead
  children='Hello'
/>
```

### Props

- `fontSize`

## Caps

Extends [Text](#text)

```.jsx
<Caps>Hello</Caps>
```

### Props

- `fontSize`
- `letterSpacing`

## Small

```.jsx
<Small
  children='Hello'
/>
```

### Props

- `fontSize`

## Lead

Extends [Text](#text)

```.jsx
<Lead>
  Hello Lead
</Lead>
```

### Props

- `fontSize`
- `lineHeight`

## Truncate

Extends [Text](#text)

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

### Props

- `fontSize`

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

- `fontSize`
- `fontFamily`
- `font`

## Code

```.jsx
<Code
  children='<Hello />'
/>
```

### Props

- `fontSize`
- `fontFamily`
- `font`

## Samp

```.jsx
<Samp>
  1024
</Samp>
```

## Measure

Extends [Text](#text)

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

- `fontSize`
- `alignItems`
- `align`

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

- `width`
- `ratio`
- `backgroundSize`
- `bgSize`
- `backgroundPosition`
- `bgPosition`

## Avatar

```.jsx
<Avatar
  size={32}
  src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
/>
```

### Props

- `size`
- `borderRadius`

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

Extends [Box](#box)

```.jsx
<Container>
  Hello
</Container>
```

### Props

- `maxWidth`

## Group

Extends [Flex](#flex)

```.jsx
<Group>
  <Button children='Beep' />
  <ButtonOutline children='Boop' />
  <ButtonOutline children='Bop' />
</Group>
```

## Row

Extends [Flex](#flex)

```.jsx
<Row>
  <Column>Column</Column>
  <Column>Column</Column>
</Row>
```

## Column

Extends [Box](#box)

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

- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `borderColor`
- `width`

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

- `borderRadius`
- `border`
- `borderTop`
- `borderRight`
- `borderBottom`
- `borderLeft`
- `borderColor`

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

Extends [Flex](#flex)

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

- `flexDirection`
- `alignItems`
- `align`
- `justifyContent`
- `justify`
- `backgroundSize`
- `bgSize`
- `backgroundPosition`
- `bgPosition`
- `minHeight`
- `backgroundImage`
- `bgImage`

## Message

Extends [Flex](#flex)

```.jsx
<Message>
  Hello
</Message>
```

### Props

- `fontWeight`
- `alignItems`
- `align`
- `minHeight`

## Toolbar

Extends [Flex](#flex)

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

- `alignItems`
- `align`
- `minHeight`

## Tabs

Extends [Flex](#flex)

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
- `hover`

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

Extends [Badge](#badge)

```.jsx
<Circle>
  A
</Circle>
```

### Props

- `size`
- `alignItems`
- `align`
- `borderRadius`
- `textAlign`

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
- `focus`
- `hover`
- `disabledStyle`

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

Extends [Position](#position)

```.jsx
<Relative>
  <Absolute bottom={0} right={0}>
    Hello
  </Absolute>
</Relative>
```

## Absolute

Extends [Position](#position)

```.jsx
<Relative>
  <Absolute bottom={0} right={0}>
    Hello
  </Absolute>
</Relative>
```

## Fixed

Extends [Position](#position)

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

Extends [Position](#position)

```.jsx
<Sticky m={2} top={0} right={0} bottom={0}>
  Hello
</Sticky>
```

## Modal

Extends [Fixed](#fixed)

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

- `top`
- `left`
- `borderRadius`
- `maxWidth`
- `maxHeight`
- `width`

## Drawer

Extends [Box](#box)

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
- `width`
- `zIndex`
- `height`

## Carousel

Extends [Flex](#flex)

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

### Props

- `width`

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

Extends [Fixed](#fixed)

### Props

- `top`
- `left`
- `borderRadius`
- `maxWidth`
- `maxHeight`
- `width`

