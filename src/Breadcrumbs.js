
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Breadcrumb navigation links
 */

const Breadcrumbs = ({
  links,
  children,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { fontSizes, scale } = config

  const sx = {
    root: {
      fontSize: fontSizes[5],
      display: 'flex',
      marginBottom: scale[2],
      alignItems: 'center'
    },
    spacer: {
      marginLeft: '.5em',
      marginRight: '.5em'
    }
  }

  return (
    <Base
      {...props}
      className='Breadcrumbs'
      baseStyle={sx.root}>
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
    </Base>
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

