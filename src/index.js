import { Flex, Box } from 'grid-styled'
import components from './components'
import Provider from './Provider'
import createLibrary from './create-library'

const library = createLibrary(components)
const Rebass = Object.assign({}, library, { Provider, Flex, Box })

const { length } = Object.keys(library)

export { Flex, Box } from 'grid-styled'
export { default as Provider } from './Provider'
export { default as hoc } from './hoc'
export { default as theme } from './theme'
export { default as Tag } from './Tag'
export { default as createLibrary } from './create-library'
export { default as createComponent } from './create-component'
export { default as util } from './util'

export const {
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
  Border,
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
  Circle,
  Tabs,
  TabItem,
  DotButton,
  Relative,
  Absolute,
  Fixed,
  Sticky,
  Overlay,
  Drawer,
  Carousel,
  CarouselSlide,
  Tooltip,
} = library

export default Rebass
