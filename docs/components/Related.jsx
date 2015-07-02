
import React from 'react'
import { Section } from '../..'

class Related extends React.Component {

  render () {
    return (
      <Section>
        <h3>Related</h3>
        <ul className='list-reset'>
          <li>
            <a href='//www.basscss.com'
              className='bold color-inherit'>
              Basscss
            </a>
          </li>
          <li>
            <a href='//www.jxnblk.com/react-geomicons'
              className='bold color-inherit'>
              React Geomicons
            </a>
          </li>
        </ul>
      </Section>
    )
  }

}

export default Related

