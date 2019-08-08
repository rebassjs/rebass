import React from 'react'
import { Styled } from 'theme-ui'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Box, Flex } from 'rebass'
import { globalHistory } from '@reach/router'

const breadcrumbRoutes = [
  'guides',
  'recipes',
]


export const Breadcrumbs = ({
  title,
}) => {
  const { location } = globalHistory
  const [ n, base, path ] = location.pathname.split('/')
  if (!breadcrumbRoutes.includes(base)) return false
  if (!path) return false

  return (
    <Flex
      sx={{
        fontWeight: 'bold',
        mb: 4,
        textTransform: 'capitalize',
      }}>
      <Styled.a
        as={Link}
        to={'/' + base}>
        {base}
      </Styled.a>
      <Box px={2}>
        /
      </Box>
      <Box>
        {title || path}
      </Box>
    </Flex>
  )
}


export const wrapper = ({
  title,
  ...props
}) => {
  const children = React.Children.toArray(props.children)
    .reduce((acc, child) => {
      const type = child.props.mdxType
      if (type !== 'h1') return [ ...acc, child ]
      return [
        ...acc,
        child,
        <Breadcrumbs key='breadcrumbs' title={title} />,
      ]
    }, [])

  return (
    <>
      {title && (
        <Helmet>
          <title>{title} | Rebass</title>
        </Helmet>
      )}
      {children}
    </>
  )
}
