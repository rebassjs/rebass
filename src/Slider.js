
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Label from './Label'

/**
 * Stylized range input with label
 */

const Slider = ({
  label,
  name,
  fill,
  hideLabel,
  horizontal,
  baseRef,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, colors } = theme

  const max = props.max || 100
  const min = props.min || 0
  const percent = (props.value - min) / (max - min) * 100

  const {
    color,
    backgroundColor,
    ...rootStyle
  } = style

  const css = `
    .Slider_input::-webkit-slider-thumb {
      width: 24px;
      height: 24px;
      background-color: currentcolor;
      border: 0;
      border-radius: 999px;
      -webkit-appearance: none;
    }
    .Slider_input::-moz-range-thumb {
      width: 24px;
      height: 24px;
      background-color: currentcolor;
      border: 0;
      border-radius: 999px;
    }
  `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

  const backgroundImage = fill ? `linear-gradient(90deg, currentcolor, currentcolor ${percent}%, transparent ${percent}%)` : null

  const cx = classnames('Slider', className)
  const { height } = { height: 6, ...subComponentStyles.input }

  const sx = {
    root: {
      display: horizontal ? 'flex' : null,
      alignItems: horizontal ? 'center' : null,
      paddingBottom: scale[2],
      ...rootStyle
    },
    label: {
      minWidth: horizontal ? 96 : null,
      paddingRight: horizontal ? scale[1] : null,
      ...subComponentStyles.label
    },
    input: {
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      flex: horizontal ? '1 1 auto' : null,
      margin: 0,
      marginTop: scale[2] - height / 2,
      marginBottom: scale[2] - height / 2,
      cursor: 'pointer',
      color: color || 'inherit',
      backgroundColor: backgroundColor || colors.gray,
      backgroundImage,
      backgroundClip: 'content-box',
      height,
      borderRadius: 999,
      WebkitAppearance: 'none',
      appearance: 'none',
      ...subComponentStyles.input
    }
  }

  return (
    <div
      className={cx}
      style={sx.root}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Label
        htmlFor={name}
        hide={hideLabel}
        style={sx.label}
        children={label} />
      <input
        {...props}
        ref={baseRef}
        type='range'
        name={name}
        className='Slider_input'
        style={sx.input} />
    </div>
  )
}

Slider.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Adds a fill color to the track - requires client-side JavaScript */
  fill: React.PropTypes.bool,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool,
  /** Displays label to the left */
  horizontal: React.PropTypes.bool,
  /** Adds a ref to the input element */
  baseRef: React.PropTypes.func
}

Slider._name = 'Slider'

export default withRebass(Slider)

