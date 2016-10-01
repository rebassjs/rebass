
import React from 'react'
import { Flex } from 'reflexbox'
import { Chevron } from 'reline'
import {
  Panel,
  PanelHeader,
  Space,
  Input,
  Select,
  Slider,
  withRebass
} from '../src'

const BlockButton = withRebass(({
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const sx = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    padding: 0,
    color: 'inherit',
    backgroundColor: 'transparent',
    border: 0,
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    ...style
  }

  return (
    <button
      {...props}
      style={sx} />
  )
})

const ComponentPropsForm = ({
  text,
  image,
  theme,
  m,
  p,
  rounded,
  pill,
  color,
  backgroundColor,
  propsOpen,
  onChange,
  toggle
}) => {

  return (
    <Panel fill='muted' pb={propsOpen ? null : 0}>
      <PanelHeader
        mb={propsOpen ? null : 0}
        onClick={toggle}>
        Edit Props
        <Space auto />
        <Chevron down size={12} />
      </PanelHeader>
      <div>
        {propsOpen && (
          <div>
            <Input
              name='text'
              label='text'
              mb={1}
              value={text}
              onChange={onChange} />
            <Flex>
              <Select
                name='color'
                label='color'
                mb={1}
                rounded='left'
                style={{ width: '100%' }}
                value={color || ''}
                onChange={onChange}
                options={[
                  { value: '', children: 'null' },
                  { value: 'white', children: 'white' },
                  { value: 'black', children: 'black' },
                  { value: 'blue', children: 'blue' },
                  { value: 'green', children: 'green' },
                  { value: 'orange', children: 'orange' },
                  { value: 'red', children: 'red' },
                  { value: 'midgray', children: 'midgray' },
                  { value: 'gray', children: 'gray' },
                ]}
              />
              <Select
                name='backgroundColor'
                label='backgroundColor'
                mb={1}
                rounded='right'
                style={{ width: '100%' }}
                value={backgroundColor || ''}
                onChange={onChange}
                options={[
                  { value: '', children: 'null' },
                  { value: 'white', children: 'white' },
                  { value: 'black', children: 'black' },
                  { value: 'blue', children: 'blue' },
                  { value: 'green', children: 'green' },
                  { value: 'orange', children: 'orange' },
                  { value: 'red', children: 'red' },
                  { value: 'midgray', children: 'midgray' },
                  { value: 'gray', children: 'gray' },
                ]}
              />
            </Flex>
              <Select
                name='theme'
                label='fill'
                mb={1}
                value={theme || ''}
                onChange={onChange}
                options={[
                  { value: '', children: 'null' },
                  { value: 'primary', children: 'primary' },
                  { value: 'default', children: 'default' },
                  { value: 'muted', children: 'muted' },
                  { value: 'info', children: 'info' },
                  { value: 'success', children: 'success' },
                  { value: 'warning', children: 'warning' },
                  { value: 'error', children: 'error' }
                ]}
              />
            {/*
            */}
            <Slider
              name='m'
              label={`margin: ${m}`}
              value={m || -1}
              min={-1}
              max={4}
              onChange={onChange} />
            <Slider
              name='p'
              label={`padding: ${p}`}
              value={p || -1}
              min={-1}
              max={4}
              onChange={onChange} />
            <Select
              name='rounded'
              label='rounded'
              value={rounded !== null ? rounded : ''}
              onChange={onChange}
              options={[
                { value: '', children: 'null' },
                { value: false, children: 'false' },
                { value: true, children: 'true' },
                { value: 'top', children: 'top' },
                { value: 'bottom', children: 'bottom' },
                { value: 'left', children: 'left' },
                { value: 'right', children: 'right' },
              ]}
            />
          </div>
        )}
      </div>
    </Panel>
  )
}

  export default ComponentPropsForm

