import React from 'react'
import styled from 'styled-components'
import Live from './Live'
import ReactMarkdown from 'react-markdown'
import * as Rebass from 'rebass'
import {
  Box,
  Heading,
  BlockLink,
  Link,
  Code,
  Pre,
  Measure,
} from 'rebass'
import PageTitle from './PageTitle'

class Markdown extends React.Component {
  render () {
    return (
      <ReactMarkdown
        source={this.props.children}
        renderers={renderers}
      />
    )
  }
}

const CodeBlock = ({ language, value }) => {
  if (!/\./.test(language)) {
    return (
      <Pre
        fontSize={13}
        px={3}
        py={3}
        my={3}
        color='blue'
        bg='#fcfcff'>
        {value}
      </Pre>
    )
  }

  const noInline = /\.\./.test(language) ? true : false

  return (
    <Box mb={3}>
      <Live
        code={value}
        noInline={noInline}
      />
    </Box>
  )
}

const MDHeading = props => {
  if (props.level === 1) {
    return (
      <PageTitle {...props} />
    )
  }

  return (
    <BlockLink href={'#' + props.children}>
      <Heading
        {...props}
        id={props.children}
        mt={5}
        mb={2}
      />
    </BlockLink>
  )
}

const MDCode = props => (
  <Code
    color='blue'
    children={props.value}
  />
)

const renderers = {
  code: CodeBlock,
  heading: MDHeading,
  inlineCode: MDCode,
  link: Link,
  paragraph: props => <Measure {...props} maxWidth='40em' mb={3} />,
}

export default Markdown
