
import React from 'react'
import {
  Heading,
  Divider,
  Text,
  Input,
  InputRange,
  Select,
  Checkbox,
  Radio
} from '../../src'

class ConfigForm extends React.Component {


  render () {
    const {
      scale,
      fontSizes,
      bold,
      colors,
      borderRadius,
      borderColor,
      onChange
    } = this.props

    const handleBorderRadiusChange = (e) => {
      onChange({ borderRadius: e.target.value })
    }

    const handleBorderColorChange = (e) => {
      onChange({ borderColor: e.target.value })
    }

    return (
      <div>
        <Heading children='Configuration' />
        <Heading level={3} children='Spacing Scale' />
        {scale.map((s, i) => {
          const handleChange = (e) => {
            let arr = scale
            arr[i] = parseInt(e.target.value, 10)
            onChange({ scale: arr })
          }
          return (
            <InputRange
              key={i}
              name={`scale_${i}`}
              label={`Step ${i}: ${s}px`}
              min={0}
              max={128}
              value={s}
              onChange={handleChange} />
          )
        })}
        <Heading level={3} children='Type Scale' />
        {fontSizes.map((s, i) => {
          const handleChange = (e) => {
            let arr = fontSizes
            arr[i] = parseInt(e.target.value, 10)
            onChange({ fontSizes: arr })
          }
          return (
            <InputRange
              key={i}
              name={`font_size_${i}`}
              label={`Font Size ${i}: ${s}px`}
              min={6}
              max={96}
              value={s}
              onChange={handleChange} />
          )
        })}
        <Heading level={3} children='Colors' />
        {Object.keys(colors).map((key, i) => {
          const value = colors[key]
          const handleChange = (e) => {
            const obj = colors
            obj[key] = e.target.value
            onChange({ colors: obj })
          }
          return (
            <Input
              key={i}
              name={key}
              label={key}
              value={value}
              onChange={handleChange} />
          )
        })}
        <Divider />
        <Input
          name='border_color'
          label='Border Color'
          value={borderColor}
          onChange={handleBorderColorChange} />
        <InputRange
          name='border_radius'
          label={`Border Radius: ${borderRadius}px`}
          min={0}
          max={32}
          value={borderRadius}
          onChange={handleBorderRadiusChange} />
      </div>
    )
  }
}

export default ConfigForm

