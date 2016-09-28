
import React from 'react'
import { Link } from 'react-router'
import find from 'lodash/find'
import toJsxString from 'react-element-to-jsx-string'
import { Container, Grid } from 'gridsys'
import {
  NavItem,
  Heading,
  Text,
  Pre,
  Input,
  Select,
  Checkbox,
  theme
} from '../src'
import BigHeading from './BigHeading'
import Rule from './Rule'
import PropsTable from './PropsTable'
// import ComponentDemo from './ComponentDemo'
import getExample, { filterNull } from './func-examples'
import data from './data.json'

const PropField = ({
  name,
}) => {
  return <div />
}

class ComponentDetail extends React.Component {
  state = {
    text: 'Hello Rebass',
    number: 16,
    image: null,
    theme: null,
    open: false,
    m: null,
    p: null,
    rounded: null,
    pill: false,
    color: null,
    backgroundColor: null,
  }

  onChange = obj => {
    this.setState(obj)
  }

  handleChange = e => {
    const { name, value } = e.target
    const val = value === '' ? null : value
    this.setState({ [name]: val })
  }

  render () {
    const { params } = this.props
    const {
      text,
      image,
      theme,
      m,
      p,
      rounded,
      pill,
      color,
      backgroundColor
    } = this.state
    const { name } = params
    const comp = find(data.components, d => d.name === name)

    const example = getExample(comp.name)({
      ...filterNull(this.state),
      text: text || comp.name,
      update: this.onChange
    })

    const code = toJsxString(example, {
      showDefaultProps: false
    })

    return (
      <Container>
        <Grid span={8}>
          <Link to='/'>
            {({ href, onClick }) => (
              <NavItem
                px={0}
                onClick={onClick}
                href={href}>
                Rebass
              </NavItem>
            )}
          </Link>
          <BigHeading children={name} />
          <Text children={comp.description} />
          <Rule />
        </Grid>
        <Grid span={6}>
          <Heading
            alt
            mb={3}
            level={3}>
            Preview
          </Heading>
          {example}
        </Grid>
        <Grid span={1}>
          <Input
            name='text'
            label='text'
            mb={1}
            value={text}
            onChange={this.handleChange} />
          {/*
            <Select
              name='image'
              label='image'
              value={image || ''}
              onChange={this.handleChange}
              options={[
                { value: '', children: 'Space' },
              ]}
            />
          */}
          <Select
            name='color'
            label='color'
            mb={1}
            value={color || ''}
            onChange={this.handleChange}
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
            value={backgroundColor || ''}
            onChange={this.handleChange}
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
            name='theme'
            label='fill'
            mb={1}
            value={theme || ''}
            onChange={this.handleChange}
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
        </Grid>
        <Grid span={1}>
          <Select
            name='m'
            label='margin'
            mb={1}
            value={m || ''}
            onChange={this.handleChange}
            options={[
              { value: '', children: 'null' },
              { value: 0, children: '0' },
              { value: 1, children: '1' },
              { value: 2, children: '2' },
              { value: 3, children: '3' },
              { value: 4, children: '4' },
            ]}
          />
          <Select
            name='p'
            label='padding'
            mb={1}
            value={p || ''}
            onChange={this.handleChange}
            options={[
              { value: '', children: 'null' },
              { value: 0, children: '0' },
              { value: 1, children: '1' },
              { value: 2, children: '2' },
              { value: 3, children: '3' },
              { value: 4, children: '4' },
            ]}
          />
          <Select
            name='rounded'
            label='rounded'
            mb={1}
            value={rounded || ''}
            onChange={this.handleChange}
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
          {/*
            <Checkbox
              name='pill'
              label='pill'
              checked={pill}
              onClick={e => { this.onChange({ pill: !pill }) }}
            />
          */}
        </Grid>
        <Grid span={3}>
          <PropsTable props={comp.props} />
        </Grid>
        <Grid span={3}>
          <Pre children={code} />
        </Grid>
        <Grid span={6}>
        </Grid>
      </Container>
    )
  }
}

export default ComponentDetail

