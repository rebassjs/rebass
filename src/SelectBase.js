import React from 'react'
import styled from 'styled-components'

const Select = styled.select([], {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  appearance: 'none',
  width: '100%',
  margin: 0,
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: 0,
  outline: 'none'
})

const SelectBase = props => (
  <div className={props.className}>
    <Select
      {...props}
      className={null}
    />
  </div>
)

export default SelectBase
