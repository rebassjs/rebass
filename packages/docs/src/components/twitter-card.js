import React from 'react'
import Logo from './Logo'

export default props => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      width: 1024,
      height: 512
    }}>
    <Logo
      static
      text
      strokeWidth={4}
      size={512}
      {...props}
    />
  </div>
)
