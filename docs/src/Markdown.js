import React from 'react'
import styled from 'styled-components'
import Live from './Live'
import ReactMarkdown from 'react-markdown'
import Rebass, {
  Box,
  Heading,
  BlockLink,
  Link,
  Code,
} from 'rebass'

const h = React.createElement

const Pre = styled(Rebass.Pre)`
  border-left: 2px solid;
`

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

const CodeBlock = ({ language, literal }) => {
  if (!/live/.test(language)) {
    return (
      <Pre
        f={1}
        px={3}
        py={1}
        my={3}
        color='black'>
        {literal}
      </Pre>
    )
  }

  const noInline = /render/.test(language) ? true : false

  return (
    <Box mb={3}>
      <Live
        code={literal}
        noInline={noInline}
      />
    </Box>
  )
}

const MDHeading = props => {
  if (props.level === 1) {
    return (
      <Heading
        {...props}
        is='h1'
        f={[ 5, 6, 7, 8 ]}
        mt={4}
        mb={4}
      />
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
    children={props.literal}
  />
)

const renderers = {
  CodeBlock,
  Heading: MDHeading,
  Code: MDCode,
  Link
}

export default Markdown
