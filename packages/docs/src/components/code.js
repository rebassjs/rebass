import React from 'react'
import styled from '@emotion/styled'
import {
  LiveProvider,
  LivePreview,
  LiveEditor,
  LiveError,
} from '@jxnblk/react-live'
import Prism from '@theme-ui/prism'
import * as Rebass from 'rebass'
import { Box } from 'rebass'

const scope = {
  ...Rebass,
  photo: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20',
}

const Preview = props =>
  <Box
    as={LivePreview}
    {...props}
    sx={{
      p: 3,
    }}
  />

const Editor = props =>
  <Box
    {...props}
    as={LiveEditor}
    sx={{
      variant: 'styles.pre',
      outline: 'none',
    }}
  />

const Err = props =>
  <Box
    {...props}
    as={LiveError}
    sx={{
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      overflowX: 'auto',
      color: 'white',
      bg: 'red',
    }}
  />

export default ({
  className,
  ...props
}) => {
  const lang = 'jsx'

  if (props.live) {
    const code = props.children
    return (
      <Box
        sx={{
          border: t => `1px solid ${t.colors.muted}`,
          borderRadius: 2,
        }}>
        <LiveProvider
          {...props}
          code={code}
          scope={scope}>
          <Preview />
          <Editor
            className={className}
          />
          <Err />
        </LiveProvider>
      </Box>
    )
  }

  return (
    <Prism
      {...props}
      className={className}
    />
  )
}
