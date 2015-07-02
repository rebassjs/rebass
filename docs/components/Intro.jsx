
import React from 'react'
import { TweetButton, GithubButton, CarbonAd } from 'blk'
import Rebass from '../..'
let { Section, Pad } = Rebass

class Intro extends React.Component {

  render () {
    let total = Object.keys(React).length
    return (
      <Pad y={4}>
        <h2 className='h1 regular m0'>
          {total} stateless React UI components built with Basscss
        </h2>
        <a href='//www.basscss.com'>
          Learn more about Basscss
        </a>
      </Pad>
    )
  }

}

export default Intro

