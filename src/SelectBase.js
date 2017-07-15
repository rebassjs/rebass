import React from 'react'
import styled from 'styled-components'
import { color } from './util'

const Root = styled.div`
  position: relative;
`

const Select = styled.select([], {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  appearance: 'none',
  width: '100%',
  margin: 0,
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: 0,
  outline: 'none'
})

const Arrow = styled(props => (
  <svg
    {...props}
    viewBox='0 0 32 32'>
    <path
      d='M0 6 L32 6 L16 28 z'
    />
  </svg>
))`
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  margin: 12px;
  fill: currentcolor;
`

const SelectBase = props => (
  <Root className={props.className}>
    <Select
      {...props}
      className={null}
    />
    <Arrow />
  </Root>
)

export default SelectBase
