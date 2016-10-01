
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Section,
  SectionHeader,
  Input,
  Select,
  Checkbox,
  Radio,
  Textarea,
  Slider
} from '../../src'

class Forms extends React.Component {
  state = {
    input: '',
    select: '',
    textarea: '',
    radio: '',
    checkbox: false,
    slider: 25
  }

  handleChange = e => {
    const { type, name, value, checked } = e.target
    const num = isNaN(parseInt(value)) ? null : parseInt(value)
    const isBool = /^on$|^off$/.test(value)

    if (isBool) {
      this.setState({ [name]: checked })
    } else {
      this.setState({ [name]: num || value })
    }
  }

  render () {
    const {
      input,
      select,
      textarea,
      checkbox,
      radio,
      slider
    } = this.state
    return (
      <Section id='Forms'>
        <SectionHeader heading='Forms' />
        <Flex
          wrap
          mx={-2}>
          <Box sm={4} px={2}>
            <Input
              name='input'
              label='Input'
              value={input}
              onChange={this.handleChange} />
            <Select
              name='select'
              label='Select'
              value={select}
              onChange={this.handleChange}
              options={[
                { value: '', children: 'Choose your power' },
                { value: 2, children: '2' },
                { value: 4, children: '4' },
                { value: 8, children: '8' },
                { value: 16, children: '16' },
                { value: 32, children: '32' },
                { value: 64, children: '64' },
                { value: 128, children: '128' },
                { value: 256, children: '256' },
              ]}
            />
          </Box>
          <Box sm={4} px={2}>
            <Slider
              name='slider'
              label='Slider'
              fill
              mb={2}
              value={slider}
              onChange={this.handleChange} />
            <Checkbox
              name='checkbox'
              label='Checkbox'
              mb={2}
              checked={checkbox}
              onClick={this.handleChange} />
            <Radio
              name='radio'
              label='Radio blue'
              value='blue'
              checked={radio === 'blue'}
              onChange={this.handleChange}
            />
            <Radio
              name='radio'
              label='Radio red'
              value='red'
              checked={radio === 'red'}
              onChange={this.handleChange}
            />
          </Box>
          <Box sm={4} px={2}>
            <Textarea
              name='textarea'
              label='Textarea'
              value={textarea}
              onChange={this.handleChange} />
          </Box>
        </Flex>
      </Section>
    )
  }
}

export default Forms

