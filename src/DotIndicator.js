
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Dot indicator buttons for use in carousels
 */

const DotIndicator = ({
  length,
  active,
  onClick,
  children,
  ...props
}, { rebass }) => {
  const { scale } = { ...config, ...rebass }

  const sx = {
    root: {
      display: 'inline-flex'
    },
    button: {
      fontSize: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: 0,
      width: scale[2],
      height: scale[3],
      color: 'inherit',
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer'
    },
    dot: {
      width: scale[1],
      height: scale[1],
      margin: 'auto',
      backgroundColor: 'currentcolor',
      borderRadius: 99999
    }
  }

  const handleClick = (i) => {
    return (e) => {
      e.preventDefault()
      onClick(i)
    }
  }

  const dots = Array.from({ length }, (a, b) => b)

  return (
    <Base
      {...props}
      className='DotIndicator'
      baseStyle={sx.root}>
      {dots.map((d) => (
        <button
          key={d}
          style={{
            ...sx.button,
            opacity: d !== active ? 0.375 : 0.875
          }}
          onClick={handleClick(d)}>
          <div style={sx.dot} />
        </button>
      ))}
    </Base>
  )
}

DotIndicator.propTypes = {
  /** Number of dot buttons to show */
  length: React.PropTypes.number,
  /** Index of the currently active dot */
  active: React.PropTypes.number,
  /** Click event callback - returns index of clicked button */
  onClick: React.PropTypes.func
}

DotIndicator.defaultProps = {
  onClick: function () {}
}

DotIndicator.contextTypes = {
  rebass: React.PropTypes.object
}

export default DotIndicator

