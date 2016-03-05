
import React from 'react'
import Label from './Label'
import Base from './Base'
import config from './config'

/**
 * Input type range with label
 */

const Slider = ({
  label,
  name,
  hideLabel,
  children,
  ...props
}, { rebass }) => {
  const { scale, colors } = { ...config, ...rebass }

  const max = props.max || 100
  const min = props.min || 0
  const ratio = (max - min) / max
  const p = ((props.value) / max) * ratio * 100
  console.log(
    'max', props.max,
    'min', props.min,
    'ratio', ratio,
    'p', p,
  )

  const css = `
    .Slider-input::-webkit-slider-thumb {
      width: 24px;
      height: 24px;
      margin-top: -11px;
      background-color: currentcolor;
      border: 0;
      border-radius: 999px;
      -webkit-appearance: none;
    }
    .Slider-input::-moz-range-thumb {
      width: 24px;
      height: 24px;
      margin-top: -11px;
      background-color: currentcolor;
      border: 0;
      border-radius: 999px;
      -webkit-appearance: none;
    }
    .Slider-input::-webkit-slider-runnable-track {
      height: 4px;
      border-radius: 2px;
    }
    .Slider-input::-moz-range-track {
      height: 4px;
      border-radius: 2px;
    }
  `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

  // const p = props.value * 100
  // const backgroundImage = `linear-gradient(90deg, currentcolor, currentcolor ${p}%, transparent ${p}%)`

  return (
    <Base
      {...props}
      className='Slider'
      baseStyle={{
        marginBottom: scale[2],
        color: colors.primary
      }}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <input
        {...props}
        type='range'
        name={name}
        className='Slider-input'
        style={{
          boxSizing: 'border-box',
          display: 'block',
          width: '100%',
          margin: 0,
          marginTop: 12,
          cursor: 'pointer',
          color: 'inherit',
          backgroundColor: `rgba(0, 0, 0, ${1/8})`,

          backgroundImage: `linear-gradient(90deg, currentcolor, currentcolor ${p}%, transparent ${p}%)`,
          backgroundClip: 'content-box',
          height: 6,
          borderRadius: 999,

          // backgroundColor: `rgba(0, 0, 0, ${3/16})`,
          WebkitAppearance: 'none',
          appearance: 'none',
        }} />
    </Base>
  )
}

Slider.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool
}

Slider.contextTypes = {
  rebass: React.PropTypes.object
}

export default Slider

