
import React from 'react'
import { Container, Grid } from 'gridsys'
import {
  Heading,
  Text,
} from '../../src'
import TweetButton from './TweetButton'
import GithubButton from './GithubButton'
import TravisBadge from './TravisBadge'
import CarbonAd from './CarbonAd'

const Header = ({
  description,
  version,
  components,
  ...props
}) => {
  return (
    <header>
      <Heading level={1}>
        Rebass
      </Heading>
      <Text>
        v{version}
      </Text>
      <Text>
        {components.length} themeable React stateless functional UI components
      </Text>
      <TweetButton />
      <GithubButton />
      <TravisBadge />
      <CarbonAd />
    </header>
  )
}

export default Header

