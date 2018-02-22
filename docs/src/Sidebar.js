import React from 'react'
import connect from 'refunk'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { width, order, themeGet } from 'styled-system'
import {
  Box,
  Flex,
  Sticky,
  NavLink,
  Divider
} from 'rebass'
import { components } from './examples'

const Root = styled(Sticky)`
  flex: none;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  max-height: 100vh;
  ${width}
  ${order}
`

const A = styled(props =>
  <NavLink
    {...props}
    is={Link}
    width={1}
    fontSize={0}
    py={1}
  />)`
  display: block;
  transition: color .1s ease-out;
  &:hover {
    color: ${themeGet('colors.blue')};
  }
`

Box.hide = Box.extend`
  @media screen and (max-width: ${themeGet('breakpoints.0')}) {
    display: none;
  }
`

class Sidebar extends React.Component {
  render () {
    const {
      update,
      menu,
      location: {
        pathname
      } = {},
    } = this.props

    return (
      <Root
        width={[ 1, 160 ]}
        order={[ 2, 0 ]}
        top={0}>
        <Flex
          flexWrap='wrap'
          px={2}
          pt={3}
          pb={5}>
          <A to='/' children='Rebass' />
          <Box my={3} />
          <Box width={[ 1/2, 1 ]}>
            <A
              to='/getting-started'
              children='Getting Started'
            />
            <A
              to='/props'
              children='Props'
            />
            <A
              to='/grid-system'
              children='Grid System'
            />
          </Box>
          <Box width={[ 1/2, 1 ]}>
            <A
              to='/theming'
              children='Theming'
            />
            <A
              to='/extending'
              children='Extending'
            />
            <A
              to='/server-side-rendering'
              children='Server Side'
            />
            <Box my={[ 0, 3 ]} />
            <A
              to='/components'
              children='Components'
            />
          </Box>
          <Box.hide>
            {components.map(name => (
              <A
                key={name}
                to={`/components/${name}`}
                children={name}
              />
            ))}
          </Box.hide>
          <Box my={3} />
        </Flex>
      </Root>
    )
  }
}

const toggle = key => state => ({ [key]: !state[key] })

export default connect(Sidebar)
