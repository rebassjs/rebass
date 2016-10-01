
import React from 'react'
import { Container, Grid } from 'gridsys'
import {
  HeadingLink,
  themes
} from '../src'
import BigHeading from './BigHeading'
import Rule from './Rule'

const ThemesIndex = ({
  changeTheme
}) => {
  const themeKeys = Object.keys(themes)

  return (
    <Container>
      <Grid span={8}>
        <BigHeading>
          Themes
        </BigHeading>
        <Rule />
      </Grid>
      {themeKeys.map((key, i) => (
        <Grid key={i}>
          <HeadingLink
            onClick={e => { changeTheme(key) }}>
            {key}
          </HeadingLink>
        </Grid>
      ))}
    </Container>
  )
}

export default ThemesIndex

