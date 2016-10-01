
import React from 'react'
import { Link } from 'react-router'
import { Container, Grid } from 'gridsys'
import {
  Heading,
  NavItem,
  LinkBlock,
  Divider,
  Card,
} from '../src'
import BigHeading from './BigHeading'
import Rule from './Rule'
import getExample from './examples'
import data from './data.json'

const ComponentIndex = () => {
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
        <BigHeading children='Components' />
        <Rule />
      </Grid>
      {data.components.map((comp, i) => (
        <Grid
          key={i}
          span={2}>
          <Link to={`/components/${comp.name}`}>
            {({ href, onClick }) => (
              <LinkBlock
                onClick={onClick}
                href={href}>
                <Heading
                  level={3}
                  mb={2}>
                  {comp.name}
                </Heading>
                <Divider />
                {getExample(comp.name)({})}
              </LinkBlock>
            )}
          </Link>
        </Grid>
      ))}
    </Container>
  )
}

export default ComponentIndex

