import React from 'react'
import Logo from './Logo'

const photo = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'

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
