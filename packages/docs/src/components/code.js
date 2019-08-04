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
import { Flex, Box } from 'rebass'

const scope = {
  ...Rebass,
  photo: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20',
}

const transformCode = code => `<>${code}</>`

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
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
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
          mb: 4,
          border: t => `1px solid ${t.colors.muted}`,
          borderRadius: 2,
        }}>
        <Flex>
        </Flex>
        <LiveProvider
          {...props}
          code={code}
          transformCode={transformCode}
          scope={scope}>
          <Preview />
          <Box
            sx={{
              position: 'relative',
            }}>
            <Editor
              className={className}
            />
            <Err />
            <Box
              sx={{
                position: 'absolute',
                zIndex: 1,
                top: 0,
                right: 0,
                m: 1,
                variant: 'text.caps',
                fontSize: 0,
                fontWeight: 'bold',
                color: 'accent',
              }}>
              Live Demo
            </Box>
          </Box>
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
