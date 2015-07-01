
import React from 'react'
import { TweetButton, GithubButton, CarbonAd } from 'blk'
import Rebass from '../..'
let { Section, Flex, FlexItem, Pad } = Rebass

class Intro extends React.Component {

  render () {
    let total = Object.keys(React).length
    return (
      <Pad y={4}>
        <h2 className='h1 regular m0'>
          {total} React UI components build with Basscss – low-level CSS toolkit
        </h2>
      </Pad>
    )
  }

}

export default Intro

