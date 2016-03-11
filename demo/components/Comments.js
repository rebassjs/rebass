
import React from 'react'
import { Flex, Box } from 'reflexbox'
import Icon from 'react-geomicons'
import {
  Avatar,
  Divider,
  Block,
  Input,
  Button,
  ButtonOutline,
  ButtonCircle,
  Media,
  Menu,
  Card,
  Section,
  Panel,
  PanelHeader,
  PanelFooter,
  Heading,
  Text,
  Space
} from '../../src'

const comments = [
  {
    avatar: 'https://pbs.twimg.com/profile_images/666139404210081792/ef2KOClR_bigger.png',
    user: 'mrmrs',
    text: 'Hello. Can you please explain what Rebass is?'
  },
  {
    avatar: 'http://jxnblk.com/avatar/avatar-640.png',
    user: 'Jxnblk',
    text: 'Sure! It’s a library of React stateless functional UI components.'
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/666139404210081792/ef2KOClR_bigger.png',
    user: 'mrmrs',
    text: 'wtf does that mean?'
  }
]

const Comments = () => (
  <Section>
    <Flex sm gutter={3}>
      <Box sm={6} px={3} py={3}>
        <Card p={0}>
          <img src='https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e15/10349615_405116952959537_1120267905_n.jpg?ig_cache_key=NzI4MzI1NTg3NTk4MzA1NjQ3.2'
            style={{
              maxWidth: '100%',
              height: 'auto'
            }} />
          <Flex align='center'>
            <Box px={2} py={2}>
              <Avatar src='https://pbs.twimg.com/profile_images/666139404210081792/ef2KOClR_bigger.png' />
            </Box>
            <Text bold children='mrmrs' />
            <Space auto />
            <ButtonOutline m={2} children='Follow' />
          </Flex>
          <Divider my={0} />
          <Flex align='center'>
            <ButtonCircle m={2}
              title='Like'
              color='red'
              backgroundColor='gray'>
              <Icon name='heart' />
            </ButtonCircle>
            <ButtonCircle m={2}
              title='Repost'
              color='inherit'
              backgroundColor='gray'>
              <Icon name='repost' />
            </ButtonCircle>
            <Space auto />
            <Text small m={2} children='256 Likes' />
            <Text small m={2} children='32 Reposts' />
          </Flex>
        </Card>
      </Box>
      <Box sm={6} px={3} py={3}>
        <Card p={0}>
          <Box px={2} py={2}>
            <Heading level={3} children={`${comments.length} Comments`} />
          </Box>
          {comments.map( ({ avatar, user, text }, i) => (
            <Block borderLeft key={i}>
              <Flex align='center'>
                <Box>
                  <Avatar mr={2} src={avatar} />
                </Box>
                <Box>
                  <Text
                    small
                    bold
                    color='midgray'
                    children={user} />
                  <Text children={text} />
                </Box>
              </Flex>
            </Block>
          ))}
          <Divider my={0} />
          <Box px={2} py={2}>
            <Flex>
              <Box auto>
                <Input
                  name='comment'
                  label='Comment'
                  placeholder='Add comment...'
                  hideLabel
                  mb={0}
                  rounded='left' />
              </Box>
              <ButtonOutline
                rounded='right'
                children='Post' />
            </Flex>
          </Box>
        </Card>
      </Box>
    </Flex>
  </Section>
)

export default Comments
