
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
import data from './data'

const ComponentIndex = () => {
  return (
    <Container>
      <Grid span={12}>
        <Link to='/'>
          {({ href }) => (
            <NavItem
              px={0}
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
              <LinkBlock href={href}>
                <Heading
                  level={3}
                  mb={2}>
                  {comp.name}
                </Heading>
                <Divider />
                {comp.example}
              </LinkBlock>
            )}
          </Link>
        </Grid>
      ))}
    </Container>
  )
}

export default ComponentIndex

