import React from 'react'
import styled from 'styled-components'
import sys from 'system-components'

const Root = styled.div`
  display: flex;
  align-items: center;
`

const SelectElement = styled.select([], {
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
    <SelectElement {...props} />
    <Arrow />
  </Root>
)

export const Select = sys({
  is: SelectBase,
  m: 0,
  px: 1,
  py: 1,
  width: 1,
  borderWidth: 0,
  borderColor: 'gray',
  boxShadow: 1,
  borderRadius: 2,
  color: 'inherit',
  bg: 'transparent'
})

Select.displayName = 'Select'

export default Select

  /* TODO
  {
    name: 'Select',
    style: props => ({
      display: 'inline-block',
      verticalAlign: 'middle',
      select: {
        padding: px(idx('space.1', props.theme)),
        boxShadow: `inset 0 0 0 1px ${color(props)('gray2')}`,
        borderRadius: px(props.theme.radius),

        '&:focus': {
          boxShadow: `inset 0 0 0 1px ${color(props)('blue')}`,
        },
        '&:disabled': {
          opacity: 1/4
        }
      }
    })
  },
  */
