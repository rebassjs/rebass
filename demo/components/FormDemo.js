
import React from 'react'
import {
  Label,
  Input,
  Select,
  Radio,
  Checkbox,
  Textarea,
  Button,
  Space
} from '../../src'

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
          group='radio'
          value='radio1'
          checked={radio === 'radio1'}
          onChange={handleRadioChange}
          label='Radio 1' />
        <Radio
          name='radio2'
          group='radio'
          value='radio2'
          checked={radio === 'radio2'}
          onChange={handleRadioChange}
          label='Radio 2' />
        <Textarea
          value={textarea}
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
        <Button theme='secondary' children='Nope' />
      </form>
    )
  }
}

export default FormDemo

