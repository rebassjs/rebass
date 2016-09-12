
import React from 'react'
import assign from 'object-assign'
import { Flex, Box } from 'reflexbox'
import {
  Section,
  SectionHeader,
  Heading,
  Panel,
  PanelHeader,
  Divider,
  Input,
  Select,
  Slider,
  Textarea,
} from '../../src'
import FormDemo from './FormDemo'

class Forms extends React.Component {
  constructor(props, { rebass }) {
    super()
    const { scale, colors } = rebass
    this.state = assign({}, rebass, {
      Label: {
        fontSize: 14
      },
      Radio_dot: {
        width: scale[2],
        height: scale[2],
        color: colors.blue,
        borderWidth: 5
      },
      Checkbox_box: {
        width: scale[2],
        height: scale[2],
        color: colors.green
      },
      // FormDemo
      input: 'Hello!',
      select: 128,
      radio: 'radio1',
      textarea: null,
      checkbox: true
    })
    this.handleChange = this.handleChange.bind(this)
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleScaleChange = this.handleScaleChange.bind(this)
    this.handleComponentChange = this.handleComponentChange.bind(this)
  }

  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: this.state
    }
  }

  componentWillReceiveProps (props, { rebass }) {
    this.setState(rebass)
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleNumberChange (e) {
    const val = parseInt(e.target.value, 10)
    this.setState({ [e.target.name]: val })
  }

  handleRadioChange (e) {
    this.setState({ radio: e.target.value })
  }

  handleCheckboxChange (e) {
    const key = e.target.name
    this.setState({ [key]: e.target.checked })
  }

  handleComponentChange (key) {
    return (e) => {
      const comp = this.state[key]
      const val = e.target.value
      const checkboxBox = this.state.Checkbox_box
      comp[e.target.name] = val
      if (e.target.name === 'width') {
        comp.height = val
        if (key === 'Radio_dot') {
          checkboxBox.width = val
          checkboxBox.height = val
        }
      }
      this.setState({
        [key]: comp,
        Checkbox_box: checkboxBox
      })
    }
  }

  handleScaleChange (e) {
    const { scale } = this.state
    scale[3] = parseInt(e.target.value, 10)
    this.setState({ scale })
  }

  render () {
    const {
      fontFamily,
      colors,
    } = this.state

    return (
      <Section>
        <SectionHeader
          heading='Form Configuration'
          description='A demonstration of some of the options available for configuring form elements' />
        <Flex wrap gutter={2}>
          <Box col={12} sm={5} px={2}>
            <Select
              name='fontFamily'
              label='Font Family'
              value={fontFamily}
              onChange={this.handleChange}
              options={[
                { value: '-apple-system, BlinkMacSystemFont, sans-serif', children: 'Default' },
                { value: 'Helvetica, sans-serif', children: 'Helvetica' },
                { value: '"Avenir Next", sans-serif', children: 'Avenir Next' },
                { value: 'Roboto, sans-serif', children: 'Roboto' },
                { value: '"Roboto Mono", monospace', children: 'Roboto Mono' },
                { value: 'Karla, sans-serif', children: 'Karla' },
                { value: 'Georgia, serif', children: 'Georgia' }
              ]} />
            <Divider />
            <Slider
              fill
              mb={0}
              name='scale-3'
              label={`Form field height (scale[3]: ${this.state.scale[3]})`}
              value={this.state.scale[3]}
              min={20}
              max={64}
              step={2}
              onChange={this.handleScaleChange} />
            <Slider
              fill
              mb={0}
              name='fontSize'
              label={`Label font size (${this.state.Label.fontSize})`}
              value={this.state.Label.fontSize}
              min={10}
              max={32}
              step={2}
              onChange={this.handleComponentChange('Label')} />
            <Slider
              fill
              mb={0}
              name='borderRadius'
              label={`Border radius (${this.state.borderRadius})`}
              value={this.state.borderRadius}
              min={0}
              max={32}
              step={1}
              onChange={this.handleChange} />
            <Select
              name='borderColor'
              label='Border color'
              value={this.state.borderColor}
              onChange={this.handleChange}
              options={[
                ...Object.keys(colors).map(key => { return { value: colors[key], children: key } }),
                  { children: 'rgba(0, 0, 0, .375)' },
                  { children: 'rgba(0, 0, 0, .25)' },
                  { children: 'rgba(0, 0, 0, .125)' },
              ]} />
            <Slider
              fill
              mb={0}
              name='width'
              label={`Radio and Checkbox size (${this.state.Radio_dot.width})`}
              value={this.state.Radio_dot.width}
              min={16}
              max={48}
              step={2}
              onChange={this.handleComponentChange('Radio_dot')} />
            <Slider
              fill
              mb={0}
              name='borderWidth'
              label={`Radio dot border width (${this.state.Radio_dot.borderWidth})`}
              value={this.state.Radio_dot.borderWidth}
              min={2}
              max={this.state.Radio_dot.width / 2}
              onChange={this.handleComponentChange('Radio_dot')} />
            <Select
              name='color'
              label='Radio dot color'
              value={this.state.Radio_dot.color}
              onChange={this.handleComponentChange('Radio_dot')}
              options={Object.keys(colors).map(key => { return { value: colors[key], children: key } })} />
          </Box>
          <Box col={12} sm={7} px={2}>
            <Panel theme='default'>
              <PanelHeader children='Result' />
              <FormDemo
                {...this.state}
                handleChange={this.handleChange}
                handleNumberChange={this.handleNumberChange}
                handleCheckboxChange={this.handleCheckboxChange}
                handleRadioChange={this.handleRadioChange} />
            </Panel>
          </Box>
        </Flex>
      </Section>
    )
  }
}

Forms.contextTypes = {
  rebass: React.PropTypes.object
}

export default Forms
