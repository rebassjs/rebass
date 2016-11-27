
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Breadcrumb navigation links
 */

const Breadcrumbs = ({
  links,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { fontSizes, scale } = theme

  const cx = classnames('Breadcrumbs', className)

  const sx = {
    root: {
      fontSize: fontSizes[5],
      display: 'flex',
      marginBottom: scale[2],
      alignItems: 'center',
      ...style
    },
    spacer: {
      marginLeft: '.5em',
      marginRight: '.5em',
      ...subComponentStyles.spacer
    }
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx.root}>
      {links.map((link, i) => {
        const linkStyle = {
          color: 'inherit',
          textDecoration: i === links.length - 1 ? 'none' : null
        }

        return (
          <div key={i}>
            <a
              {...link}
              style={linkStyle} />
            {i < links.length - 1 && (
              <span style={sx.spacer}>/</span>
            )}
          </div>
        )
      })}
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

Breadcrumbs._name = 'Breadcrumbs'

export default withRebass(Breadcrumbs)

