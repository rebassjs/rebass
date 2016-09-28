
import React from 'react'
import assign from 'object-assign'
import { Container, Grid } from 'gridsys'
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
  Label,
  Radio,
  Checkbox,
  Button,
  Space
} from '../src'

class FormDemo extends React.Component {
  render () {
    const {
      fontFamily,
      input,
      select,
      radio,
      radio1,
      radio2,
      textarea,
      checkbox,
      handleChange,
      handleNumberChange,
      handleCheckboxChange,
      handleRadioChange,
      ...props
    } = this.props

    const handleSubmit = (e) => e.preventDefault()

    return (
      <form onSubmit={handleSubmit}
        style={{
          fontFamily
        }}>
        <Input
          name='input'
          label='Input'
          value={input}
          onChange={handleChange} />
        <Select
          name='select'
          label='Select'
          value={select}
          onChange={handleNumberChange}
          options={[
            { value: 2, children: 'Two' },
            { value: 4, children: 'Four' },
            { value: 8, children: 'Eight' },
            { value: 16, children: 'Sixteen' },
            { value: 32, children: 'Thirty-Two' },
            { value: 64, children: 'Sixty-Four' },
            { value: 128, children: 'One Hundred Twenty-Eight' },
            { value: 256, children: 'Two Hundred Fifty-Six' }
          ]} />
        <Radio
          name='radio1'
          value='radio1'
          checked={radio === 'radio1'}
          onChange={handleRadioChange}
          label='Radio 1' />
        <Radio
          name='radio1'
          value='radio2'
          checked={radio === 'radio2'}
          onChange={handleRadioChange}
          label='Radio 2' />
        <Textarea
          value={textarea || ''}
          name='textarea'
          label='Textarea'
          onChange={handleChange} />
        <Checkbox
          mb={2}
          checked={checkbox}
          name='checkbox'
          label='Checkbox'
          onChange={handleCheckboxChange} />
        <Button children='Hello' />
        <Space />
        <Button backgroundColor='secondary' children='Nope' />
      </form>
    )
  }
}


class Forms extends React.Component {
  constructor(props, { rebass }) {
    super()
    const { scale, colors } = rebass
    this.state = assign({}, rebass, {
      Label: {
        fontSize: 14
      },
      Radio: {
        dot: {
          width: scale[2],
          height: scale[2],
          color: colors.blue,
          borderWidth: 5
        }
      },
      Checkbox: {
        box: {
          width: scale[2],
          height: scale[2],
          color: colors.green
        }
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
    const { name, value } = e.target
    const val = isNaN(parseInt(value)) ? value : parseInt(value)
    this.setState({ [name]: val })
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
      const [ k1, k2 ] = key.split('.')
      const comp = this.state[key] || this.state[k1][k2]
      const { value } = e.target
      const val = isNaN(parseInt(value)) ? value : parseInt(value)
      const checkboxBox = this.state.Checkbox.box
      comp[e.target.name] = val
      if (e.target.name === 'width') {
        comp.height = val
        if (key === 'Radio.dot') {
          checkboxBox.width = val
          checkboxBox.height = val
        }
      }
      this.setState({
        [key]: comp,
        Checkbox: {
          box: checkboxBox
        }
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
        <Container>
          <Grid span={8}>
            <SectionHeader
              heading='Form Configuration'
              description='A demonstration of some of the options available for configuring form elements' />
          </Grid>
          <Grid span={3}>
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
              onChange={this.handleNumberChange} />
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
              label={`Radio and Checkbox size (${this.state.Radio.dot.width})`}
              value={this.state.Radio.dot.width}
              min={16}
              max={48}
              step={2}
              onChange={this.handleComponentChange('Radio.dot')} />
            <Slider
              fill
              mb={0}
              name='borderWidth'
              label={`Radio dot border width (${this.state.Radio.dot.borderWidth})`}
              value={this.state.Radio.dot.borderWidth}
              min={2}
              max={this.state.Radio.dot.width / 2}
              onChange={this.handleComponentChange('Radio.dot')} />
            <Select
              name='color'
              label='Radio dot color'
              value={this.state.Radio.dot.color}
              onChange={this.handleComponentChange('Radio.dot')}
              options={Object.keys(colors).map(key => { return { value: colors[key], children: key } })} />
          </Grid>
          <Grid span={3}>
            <Panel theme='default'>
              <PanelHeader children='Result' />
              <FormDemo
                {...this.state}
                handleChange={this.handleChange}
                handleNumberChange={this.handleNumberChange}
                handleCheckboxChange={this.handleCheckboxChange}
                handleRadioChange={this.handleRadioChange} />
            </Panel>
          </Grid>
        </Container>
      </Section>
    )
  }
}

Forms.contextTypes = {
  rebass: React.PropTypes.object
}

export default Forms
