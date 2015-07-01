
import React from 'react'
import Logo from 'basscss-logo'
import { TweetButton, GithubButton, CarbonAd } from 'blk'
import { Banner, Flex, FlexItem, LinkBtn, Space, Pad } from '../..'

class Hero extends React.Component {

  render () {
    let footer = (
      <Flex wrap center pad={false}>
        <FlexItem>
          <Pad y={1}>
            <TweetButton
              text='Stateless React UI components for Basscss' />
          </Pad>
        </FlexItem>
        <FlexItem>
          <Pad y={1}>
            <GithubButton
              user='jxnblk'
              repo='rebass' />
          </Pad>
        </FlexItem>
        <FlexItem auto />
        <FlexItem>
          <CarbonAd />
        </FlexItem>
      </Flex>
    )
    return (
      <Banner
        footer={footer}
        left>
        <Flex wrap>
          <FlexItem auto>
            <Logo />
            <h1 className='m0'>
              {this.props.title}
              <Space />
              <span className='h5'>v{this.props.version}</span>
            </h1>
            <p>{this.props.description}</p>
          </FlexItem>
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
        </Flex>
      </Banner>
    )
  }

}

export default Hero

