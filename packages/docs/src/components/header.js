import React from 'react'
import {
  Flex,
  Box,
  Link,
  Button,
} from 'rebass'
import { useColorMode } from 'theme-ui'

const modes = [
  'lite',
  'dark',
  'gray',
  'hack',
  'pink',
]

const Burger = ({ size = 24 }) => (
  <Box
    as='svg'
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentcolor"
    viewBox="0 0 24 24"
    sx={{
      display: 'block',
      margin: 0,
    }}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </Box>
)

const Dot = props =>
  <svg
    viewBox='0 0 32 32'
    width='24'
    height='24'
    fill='currentcolor'
    style={{
      display: 'block',
    }}>
    <circle
      cx='16'
      cy='16'
      r='14'
      fill='none'
      stroke='currentcolor'
      strokeWidth='4'
    />
    <path
      d={`
        M 16 0
        A 16 16 0 0 0 16 32
        z
      `}
    />
  </svg>

export default ({
  nav,
  menu,
  setMenu,
  fullwidth,
}) => {
  const [ mode, setMode ] = useColorMode()

  const cycleMode = e => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }

  return (
    <Flex
      as='header'
      px={3}
      py={2}
      height={64}
      alignItems='center'>
      {!fullwidth && (
        <Button
          title='Toggle Menu'
          display={[ 'block', 'none' ]}
          sx={{
            width: 32,
            height: 32,
            p: 1,
          }}
          variant='transparent'
          onClick={e => {
            setMenu(!menu)
            if (menu || !nav.current) return
            const navlink = nav.current.querySelector('a')
            navlink.focus()
          }}>
          <Burger />
        </Button>
      )}
      <Link variant='nav' href='/'>Rebass</Link>
      <Box mx='auto' />
      <Link
        mr={2}
        variant='nav'
        href='https://github.com/rebassjs/rebass'>
        GitHub
      </Link>
      <Button
        title='Change color mode'
        variant='transparent'
        sx={{
          width: 32,
          height: 32,
          p: 1,
          borderRadius: 99999,
        }}
        onClick={cycleMode}>
        <Dot />
      </Button>
    </Flex>
  )
}
