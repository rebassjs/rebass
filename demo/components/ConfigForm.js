
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Heading,
  Divider,
  Drawer,
  Space,
  Close,
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
      fontFamily,
      color,
      backgroundColor,
      drawerOpen,
      toggle,
      onChange,
      reset
    } = this.props

    const handleBorderRadiusChange = (e) => {
      onChange({ borderRadius: e.target.value })
    }

    const handleBorderColorChange = (e) => {
      onChange({ borderColor: e.target.value })
    }

    const handleHeadingFontChange = (e) => {
      const obj = Object.assign({}, this.props.Heading, {
        fontFamily: e.target.value
      })
      onChange({ Heading: obj })
    }

    const toggleHeadingCaps = (e) => {
      let obj
      if (this.props.Heading.textTransform === 'uppercase') {
        obj = Object.assign({}, this.props.Heading, {
          textTransform: null,
          letterSpacing: null
        })
      } else {
        obj = Object.assign({}, this.props.Heading, {
          textTransform: 'uppercase',
          letterSpacing: '.2em'
        })
      }
      onChange({ Heading: obj })
    }

    const handleThemeChange = (key) => {
      return (e) => {
        onChange({ [key]: e.target.value })
      }
    }

    return (
      <Drawer
        open={drawerOpen}
        onDismiss={toggle('drawerOpen')}
        position='right'>
        <Flex align='center'>
          <Space auto />
          <Close onClick={toggle('drawerOpen')} />
        </Flex>
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
          <Divider />
          <Heading level={3} children='Base Styles' />
          <Select
            name='font_select'
            label='Font Family'
            value={fontFamily}
            options={[
              { value: '-apple-system, BlinkMacSystemFont, sans-serif', label: 'System' },
              { value: '"Avenir Next", sans-serif', label: 'Avenir' },
              { value: 'Helvetica, sans-serif', label: 'Helvetica' },
              { value: 'Verdana, sans-serif', label: 'Verdana' },
              { value: 'Roboto, sans-serif', label: 'Roboto' },
              { value: '"Roboto Mono", monospace', label: 'Roboto Mono' },
              { value: 'Georgia, serif', label: 'Georgia' },
              { value: 'Palatino, Georgia, serif', label: 'Palatino' },
            ]}
            onChange={handleThemeChange('fontFamily')} />
          <Flex align='flex-end' gutter={1}>
            <Box auto px={1}>
              <Input
                name='color'
                label='Color'
                value={color}
                onChange={handleThemeChange('color')} />
            </Box>
            <Box px={1}>
              <Block backgroundColor={color} />
            </Box>
          </Flex>
          <Flex align='flex-end' gutter={1}>
            <Box auto px={1}>
              <Input
                name='background_color'
                label='Background Color'
                value={backgroundColor}
                onChange={handleThemeChange('backgroundColor')} />
            </Box>
            <Box px={1}>
              <Block backgroundColor={backgroundColor} />
            </Box>
          </Flex>
          <Heading level={3} children='Heading styles' />
            <Select
              name='heading_font'
              label='Heading Font'
              value={this.props.heading ? this.props.Heading.fontFamily : 'inherit'}
              options={[
                { value: 'inherit', label: 'Inherit' },
                { value: '"Avenir Next", sans-serif', label: 'Avenir' },
                { value: 'Helvetica, sans-serif', label: 'Helvetica' },
                { value: '"Roboto Mono", monospace', label: 'Roboto Mono' },
                { value: 'Georgia, serif', label: 'Georgia' },
                { value: 'Palatino, serif', label: 'Palatino' },
              ]}
              onChange={handleHeadingFontChange}
            />
            <Checkbox
              name='heading_caps'
              label='All Caps'
              checked={this.props.Heading && this.props.Heading.textTransform === 'uppercase'}
              onChange={toggleHeadingCaps} />
        </Box>
      </Drawer>
    )
  }
}

export default ConfigForm

