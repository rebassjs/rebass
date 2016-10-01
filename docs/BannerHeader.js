
import React from 'react'
import { Container, Grid } from 'gridsys'
import {
  Heading,
  Text,
  Button,
} from '../src'
import BigHeading from './BigHeading'
import Rule from './Rule'
import CarbonAd from './CarbonAd'
import TweetButton from './TweetButton'
import GithubButton from './GithubButton'
import TravisBadge from './TravisBadge'
import data from './data.json'
import Logo from './Logo'

const Small = props => {
  const sx = {
    fontSize: '25%',
    fontWeight: 400
  }
  return (
    <small
      {...props}
      style={sx}
    />
  )
}

const BannerHeader = () => {
  return (
    <header>
      <Container>
        <Grid span={2}>
          <Logo size={256} />
        </Grid>
        <Grid span={4}>
          <BigHeading mega>
            Rebass
            {' '}
            <Small>
              v{data.version}
            </Small>
          </BigHeading>
          <Text
            bold
            size={3}
            mb={3}>
            {data.description}
          </Text>
          <Rule />
        </Grid>
        <Grid span={8} />
        <Grid align='middle'>
          <TweetButton
            text={`Rebass: ${data.description}`}
            url='http://jxnblk.com/rebass'
            via='jxnblk'
          />
        </Grid>
        <Grid align='middle'>
          <GithubButton />
        </Grid>
        <Grid align='middle'>
          <TravisBadge />
        </Grid>
        <Grid span={2} align='middle'>
          <CarbonAd />
        </Grid>
      </Container>
    </header>
  )
}

export default BannerHeader

