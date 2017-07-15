import React from 'react'
import Live from './Live'
import ReactMarkdown from 'react-markdown'
import {
  Heading,
  Link,
  Pre,
  Code,
} from 'rebass'

const h = React.createElement

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
  if (language !== 'live') {
    return (
      <Pre
        f={0}
        p={3}
        color='black'
        bg='blue0'>
        {literal}
      </Pre>
    )
  }

  return (
    <Live
      code={literal}
    />
  )
}

const MDHeading = props => {
  if (props.level === 1) {
    console.log('h1', props.level)
    return (
      <Heading
        {...props}
        is='h1'
        f={[ 5, 6, 7, 8 ]}
        mt={4}
      />
    )
  }

  return <Heading {...props} mt={3} />
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
