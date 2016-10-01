
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
  theme
} from '../src'
import BigHeading from './BigHeading'
import Rule from './Rule'
import PropsTable from './PropsTable'
import ComponentPropsForm from './ComponentPropsForm'
import getExample, { filterNull } from './examples'
import data from './data.json'

const PropField = ({
  name,
}) => {
  return <div />
}

class ComponentDetail extends React.Component {
  state = {
    text: '', // 'Hello Rebass',
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
    propsOpen: false
  }

  onChange = obj => {
    this.setState(obj)
  }

  handleChange = e => {
    const { name, value } = e.target
    const val = (value === '' || value === '-1')
      ? null
      : /^true$|^false$/.test(value)
      ? value === 'true'
      : value
    this.setState({ [name]: val })
  }

  togglePropsOpen = () => {
    const propsOpen = !this.state.propsOpen
    this.setState({ propsOpen })
  }

  render () {
    const { params } = this.props
    const { text } = this.state
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
        <Grid span={8}>
          <Heading
            alt
            mb={3}
            level={3}>
            Preview
          </Heading>
          {example}
        </Grid>
        <Grid span={3}>
          <Pre children={code} />
        </Grid>
        <Grid span={2}>
          <ComponentPropsForm
            {...this.state}
            toggle={this.togglePropsOpen}
            onChange={this.handleChange} />
        </Grid>
        <Grid span={3}>
          <PropsTable props={comp.props} />
        </Grid>
        <Grid span={6}>
        </Grid>
      </Container>
    )
  }
}

export default ComponentDetail

