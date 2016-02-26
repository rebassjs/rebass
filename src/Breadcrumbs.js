
import React from 'react'
import theme from './theme'

/**
 * Breadcrumb navigation links
 */

const Breadcrumbs = ({ links, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const breadcrumbsStyle = {
    ...theme.Breadcrumbs,
    ...(rebass ? rebass.Breadcrumbs : {}),
    ...style
  }
  const { fontSizes } = config

  const sx = {
    root: {
      fontSize: fontSizes[5],
      display: 'flex',
      alignItems: 'center',
      ...breadcrumbsStyle
    },
    spacer: {
      marginLeft: '.5em',
      marginRight: '.5em'
    }
  }

  return (
    <div
      {...props}
      className='Breadcrumbs'
      style={sx.root}>
      {links.map((link, i) => (
        <div key={i}>
          <a {...link}
            style={{
              color: 'inherit',
              textDecoration: i === links.length - 1 ? 'none' : null
            }} />
          {i < links.length - 1 &&
            <span style={sx.spacer}>/</span>
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

