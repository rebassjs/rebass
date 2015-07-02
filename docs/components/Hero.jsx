
import React from 'react'
import Logo from 'basscss-logo'
import { TweetButton, GithubButton, CarbonAd } from 'blk'
import { Banner, FlexRow, Flex, LinkBtn, Space, Pad } from '../..'
import Social from './Social.jsx'

class Hero extends React.Component {

  render () {
    return (
      <Banner
        //bgImage='url(https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg)'
        //footer={<Social />}
        left>
        <FlexRow md>
          <Flex auto>
            <Logo />
            <h1 className='m0'>
              {this.props.title}
              <Space />
              <span className='h5'>v{this.props.version}</span>
            </h1>
            {/*
            <p className='h3 bold mb3'>{this.props.description}</p>
            */}
          </Flex>
          <LinkBtn
            href='//github.com/jxnblk/rebass'
            color='darken-4'>
            GitHub
          </LinkBtn>
          <Space w={2} />
          <LinkBtn
            href='//npmjs.com/package/rebass'
            color='darken-4'>
            npm
          </LinkBtn>
        </FlexRow>
      </Banner>
    )
  }

}

export default Hero

