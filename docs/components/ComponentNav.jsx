
import React from 'react'
import { MenuItem } from '../..'

class ComponentNav extends React.Component {

  render () {
    let components = this.props.components
    let activeSection = this.props.activeSection

    return (
      <ul className='list-reset mt2'>
        {components.map(function(comp, i) {
          let active = comp.name === activeSection
          let styles = {
            li: {
              borderLeftWidth: 4,
              borderLeftStyle: 'solid',
              borderLeftColor: active ? 'rgba(0,0,0,.25)' : 'transparent'
            }
          }

          return (
            <li key={i} style={styles.li}>
              <MenuItem 
                href={'#' + comp.name}
                label={comp.name}
                compact />
            </li>
          )
        })}
      </ul>
    )
  }

}

export default ComponentNav

