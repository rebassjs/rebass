import React from 'react'
import Logo from './Logo'

export default props => (
  <div
    style={{
      fontFamily: 'system-ui, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      width: 512,
      height: 512,
      borderRadius: 99999
    }}>
    <Logo
      initial
      static
      size={512}
      strokeWidth={6}
      bg='#000'
      {...props}
    />
  </div>
)
