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
  if (language !== 'live') return <Pre f={0} color='blue'>{literal}</Pre>

  return (
    <Live
      code={literal}
    />
  )
}

const renderers = {
  CodeBlock,
  Heading: props => <Heading {...props} mt={3} />,
  Code: props => <Code color='blue' children={props.literal} />,
  Link
}

export default Markdown
