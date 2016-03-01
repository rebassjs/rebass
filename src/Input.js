
import React from 'react'
import Label from './Label'
import theme from './theme'
import margins from './util/margins'

/**
 * Input element with label
 */

const Input = ({
  label,
  name,
  type,
  hideLabel,
  rounded,
  children,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Input : {}
  const { scale, borderRadius, borderColor } = config

  const radii = {
    top: `${borderRadius}px ${borderRadius}px 0 0`,
    right: `0 ${borderRadius}px ${borderRadius}px 0`,
    bottom: `0 0 ${borderRadius}px ${borderRadius}px`,
    left: `${borderRadius}px 0 0 ${borderRadius}px`,
  }

  const sx = {
    root: {
      marginBottom: scale[2],
      ...customStyle,
      ...style,
      ...margins(props, scale)
    },
    input: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      height: scale[3],
      paddingLeft: scale[1],
      paddingRight: scale[1],
      margin: 0,
      color: 'inherit',
      backgroundColor: 'rgba(255, 255, 255, .25)',
      borderRadius: rounded ? (radii[rounded] || borderRadius) : 0,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor
    }
  }

  return (
    <div className='Input'
      style={sx.root}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <input
        {...props}
        type={type}
        name={name}
        style={sx.input} />
    </div>
  )
}

Input.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Form element type */
  type: React.PropTypes.string,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool,
  /** Controls the border radius for creating grouped elements */
  rounded: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left'
    ])
  ])
}

Input.defaultProps = {
  type: 'text',
  rounded: true
}

Input.contextTypes = {
  rebass: React.PropTypes.object
}

export default Input

