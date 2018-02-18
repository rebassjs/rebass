import React from 'react'
import { Provider, Banner } from '../src'
import Logo from './Logo'

const photo = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'

const Card = props => (
  <Provider>
    <Banner
      bg='black'
      style={{
        width: 768,
        minHeight: 0,
        height: 576
      }}>
      <Logo
        size={512}
        static
      />
    </Banner>
  </Provider>
)

export default Card
