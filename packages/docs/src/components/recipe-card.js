import React from 'react'
import { Link } from 'gatsby'
import { Box, Card } from 'rebass'

export default props => {
  const children = React.Children.toArray(props.children)
  const title = children.find(child => child.type === 'h1' || child.props.mdxType === 'h1')
  const example = children.find(child =>
    child.type === 'pre' || child.props.mdxType === 'pre')

  const [ pre ] = React.Children.toArray(example.props.children)
  const preview = React.cloneElement(pre, {
    preview: true
  })

  return (
    <Card
      as={Link}
      to={props.href}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        textDecoration: 'none',
        color: 'inherit',
      }}>
      <Box
        sx={{
          flex: '1 1 auto',
          overflow: 'hidden',
        }}>
        {preview}
      </Box>
      <Box
        mt={3}
        fontWeight='bold'>
        {title.props.children}
      </Box>
    </Card>
  )
}
