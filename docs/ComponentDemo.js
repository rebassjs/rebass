
// Experimental live demo component

import React from 'react'
import { Container, Grid } from 'gridsys'
import Rebass from '../src'
import {
  Heading,
  Input,
  Checkbox,
  Select
} from '../src'

const defaultProps = {
  string: 'Burger',
  number: 16,
  bool: false,
  func: null,
  array: [
    { children: 'one' },
    { children: 'two' },
    { children: 'three' }
  ],

  size: 48,
  href: '#!',
  src: 'https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg',
  backgroundImage: 'https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'
}

class ComponentDemo extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.createState(props)
    this.onChange = this.onChange.bind(this)
  }

  componentWillUpdate (nextProps) {
    if (nextProps.component.name !== this.props.component.name) {
      const state = this.createState(nextProps)
      this.setState(state)
    }
  }

  createState (props = {}) {
    const { component } = props
    const state = {
      children: component.name
    }
    Object.keys(component.props || {}).forEach(p => {
      const type = component.props[p].type.name
      state[p] = defaultProps[p] || defaultProps[type]
    })
    return state
  }

  onChange (e) {
    const { name, value, checked } = e.target
    const num = parseFloat(value)
    if (!isNaN(num)) {
      this.setState({ [name]: num })
    } else if (/true|false/.test(value)) {
      this.setState({ [name]: checked })
    } else {
      this.setState({ [name]: value })
    }
  }

  render () {
    const {
      component,
    } = this.props

    const Comp = Rebass[component.name]
    const propKeys = [
      ...Object.keys(component.props || {}),
      'children'
    ]

    // global props

    return (
      <Container>
        <Grid span={3}>
          <Heading
            alt
            mb={3}
            level={3}>
            Live Demo
          </Heading>
          <Comp {...this.state} />
        </Grid>
        <Grid span={2}>
          <Heading
            alt
            mb={3}
            level={3}>
            Editable Props
          </Heading>
          <div>
            {propKeys.map((key, i) => {
              const value = this.state[key]
              const type = typeof value
              let Comp = Input
              if (value === null || Array.isArray(value)) {
                return null
              }
              switch (type) {
                case 'boolean':
                  Comp = Checkbox
                  break
                case 'string':
                case 'number':
                default:
                  Comp = Input
                  break
              }
              const p = {
                name: key,
                label: key,
                value: value,
                onChange: this.onChange,
                checked: type === 'boolean' ? value : null
              }

              return (
                <div key={i}>
                  <Comp
                    {...p} />
                </div>
              )
            })}
          </div>
          {/*
          <pre>{JSON.stringify(this.props.component, null, 2)}</pre>
          */}
        </Grid>
      </Container>
    )
  }
}

export default ComponentDemo

