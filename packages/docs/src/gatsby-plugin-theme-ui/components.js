import React from 'react'
import code from '../components/code'

const heading = Tag => props => {
  if (!props.id) return <Tag {...props} />

  return (
    <Tag {...props}>
      <a href={'#' + props.id}>
        {props.children}
      </a>
    </Tag>
  )
}

export default {
  pre: props => props.children,
  code,
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
}
