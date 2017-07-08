import React from 'react'

const DonutBase = props => {
  const R = 16 - props.strokeWidth
  const C = 2 * Math.PI * R
  return (
    <svg
      {...props}
      viewBox='0 0 32 32'
      width={props.size || 128}
      height={props.size || 128}>
      <circle
        cx={16}
        cy={16}
        r={R}
        fill='none'
        stroke='currentcolor'
        strokeWidth={props.strokeWidth}
        opacity='0.125'
      />
      <circle
        cx={16}
        cy={16}
        r={R}
        fill='none'
        stroke='currentcolor'
        strokeWidth={props.strokeWidth}
        strokeDasharray={C}
        strokeDashoffset={C - props.value * C}
        transform='rotate(-90 16 16)'
      />
    </svg>
  )
}

export default DonutBase
