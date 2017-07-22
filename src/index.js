import components from './components'
import { Flex, Box } from './grid'
import Provider from './Provider'
import createLibrary from './create-library'

const library = createLibrary(components)

const { length } = Object.keys(library)

const Rebass = Object.assign({}, library, { Provider, Flex, Box })

export { Flex, Box } from './grid'
export { default as Provider } from './Provider'
export { default as hoc } from './hoc'
export {
  default as theme,
  breakpoints,
  space,
  font,
  monospace,
  fontSizes,
  weights,
  colors,
  radius
} from './theme'
export { default as createLibrary } from './create-library'
export { default as createComponent } from './create-component'
export { default as util } from './util'

export const {
  Button,
  ButtonOutline,
  ButtonCircle,
  ButtonTransparent,
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
  Measure,
  Truncate,
  Label,
  Input,
  Select,
  Select2,
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
  Close,
  Relative,
  Absolute,
  Fixed,
  Sticky,
  Drawer,
  Overlay,
  Carousel,
  ScrollCarousel,
  CarouselSlide,
  Tooltip,
  Switch,
  Arrow,
  Star,
  Embed,
  Donut,
  Row,
  Column,
} = library

export default Rebass
