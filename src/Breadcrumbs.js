
import React from 'react'
import theme from './theme'

/**
 * Breadcrumb navigation links
 */

const Breadcrumbs = ({ links, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { fontSizes } = config

  return (
    <div
      {...props}
      className='Breadcrumbs'
      style={{
        fontSize: fontSizes[5],
        display: 'flex',
        alignItems: 'center',
        ...style
      }}>
      {links.map((link, i) => (
        <div key={i}>
          <a {...link}
            style={{
              color: 'inherit',
              textDecoration: i === links.length - 1 ? 'none' : null
            }} />
          {i < links.length - 1 &&
            <span style={{
              marginLeft: '.5em',
              marginRight: '.5em'
            }}>/</span>
          }
        </div>
      ))}
    </div>
  )
}

Breadcrumbs.propTypes = {
  /** Array of link props */
  links: React.PropTypes.array.isRequired
}

Breadcrumbs.defaultProps = {
  links: []
}

Breadcrumbs.contextTypes = {
  rebass: React.PropTypes.object
}

export default Breadcrumbs

