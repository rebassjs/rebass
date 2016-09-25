
import React from 'react'
import chunk from 'lodash/chunk'
import { Link } from 'react-router'
import { Container, Grid } from 'gridsys'
import {
  Heading,
  NavItem,
  List
} from '../src'
import Rule from './Rule'
import data from './data'

const chunkLength = Math.ceil(data.components.length / 6)
const columns = chunk(data.components, chunkLength)

const ComponentList = () => {
  return (
    <Container>
      <Grid span={8}>
        <Heading>{data.components.length} Components</Heading>
        <Rule />
      </Grid>
      {columns.map((column, i) => (
        <Grid key={i}>
          <List reset>
            {column.map((comp, j) => (
              <NavItem
                key={j}
                is={Link}
                to={`/components/${comp.name}`}
                children={comp.name} />
            ))}
          </List>
        </Grid>
      ))}
    </Container>
  )
}

export default ComponentList

