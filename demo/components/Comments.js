
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Avatar,
  Divider,
  Block,
  Input,
  Button,
  ButtonOutline,
  Media,
  Menu,
  Section,
  Panel,
  PanelHeader,
  PanelFooter,
  Heading,
  Text
} from '../../src'

const comments = [
  {
    avatar: 'http://lorempixel.com/96/96/people',
    user: 'Bob',
    text: 'Hello. Can you please explain what Rebass is?'
  },
  {
    avatar: 'http://lorempixel.com/72/72/people',
    user: 'Rob',
    text: 'Sure! It’s a library of React stateless functional UI components.'
  },
  {
    avatar: 'http://lorempixel.com/96/96/people',
    user: 'Bob',
    text: 'wtf does that mean?'
  }
]

const Comments = () => (
  <Section>
    <Flex sm gutter={3}>
      <Box p={3}>
        <Menu>
          <Box p={2}>
            <Heading level={3} children={`${comments.length} Comments`} />
          </Box>
          {comments.map( ({ avatar, user, text }, i) => (
            <Block borderLeft key={i}>
              <Flex align='center'>
                <Avatar mr={2} src={avatar} />
                <div>
                  <Text
                    small
                    color='midgray'
                    children={user} />
                  <Text children={text} />
                </div>
              </Flex>
            </Block>
          ))}
          <Divider m={0} />
          <Box p={2}>
            <Flex>
              <Box auto>
                <Input
                  name='comment'
                  label='Comment'
                  placeholder='Add comment...'
                  hideLabel
                  m={0}
                  rounded='left' />
              </Box>
              <ButtonOutline
                rounded='right'
                children='Post' />
            </Flex>
          </Box>
        </Menu>
      </Box>
    </Flex>
  </Section>
)

export default Comments
