
import React from 'react'
import { TweetButton, GithubButton, CarbonAd } from 'blk'
import { FlexRow, Flex, Pad } from '../..'

class Social extends React.Component {

  render () {
    return (
      <FlexRow wrap center>
        <Flex>
          <Pad y={1}>
            <TweetButton
              text='Stateless React UI components for Basscss' />
          </Pad>
        </Flex>
        <Flex>
          <Pad y={1}>
            <GithubButton
              user='jxnblk'
              repo='rebass' />
          </Pad>
        </Flex>
        <Flex auto />
        <Flex>
          <CarbonAd />
        </Flex>
      </FlexRow>
    )
  }

}

export default Social

