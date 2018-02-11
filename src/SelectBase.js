import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  align-items: center;
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
  width: 8px;
  height: 8px;
  margin-left: -16px;
  fill: currentcolor;
  pointer-events: none;
`

const SelectBase = props => (
  <Root>
    <Select {...props} />
    <Arrow />
  </Root>
)

export default SelectBase
