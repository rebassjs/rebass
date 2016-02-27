
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Heading,
  Divider,
  Text,
  Block,
  Input,
  InputRange,
  Select,
  Checkbox,
  Radio,
  Button
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
      onChange,
      reset
    } = this.props

    const handleBorderRadiusChange = (e) => {
      onChange({ borderRadius: e.target.value })
    }

    const handleBorderColorChange = (e) => {
      onChange({ borderColor: e.target.value })
    }

    return (
      <Box py={2}>
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
            <Flex key={i} align='flex-end' gutter={1}>
              <Box auto px={1}>
                <Input
                  name={key}
                  label={key}
                  value={value}
                  onChange={handleChange} />
              </Box>
              <Box px={1}>
                <Block backgroundColor={value} />
              </Box>
            </Flex>
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
      </Box>
    )
  }
}

export default ConfigForm

