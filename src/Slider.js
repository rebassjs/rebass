
import React from 'react'
import Label from './Label'
import Base from './Base'
import config from './config'

/**
 * Stylized range input with label
 */

const Slider = ({
  label,
  name,
  fill,
  hideLabel,
  children,
  style,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  ...props
}, { rebass }) => {
  const { scale } = { ...config, ...rebass }

  const max = props.max || 100
  const min = props.min || 0
  const percent = (props.value - min) / (max - min) * 100

  const rootProps = {
    style,
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py
  }

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

  const sx = {
    root: {
      paddingBottom: scale[2]
    },
    input: {
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      margin: 0,
      marginTop: scale[1],
      cursor: 'pointer',
      color: 'inherit',
      backgroundColor: `rgba(0, 0, 0, ${1 / 8})`,
      backgroundImage,
      backgroundClip: 'content-box',
      height: 6,
      borderRadius: 999,
      WebkitAppearance: 'none',
      appearance: 'none'
    }
  }

  return (
    <Base
      {...rootProps}
      className='Slider'
      baseStyle={sx.root}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <input
        {...props}
        type='range'
        name={name}
        className='Slider_input'
        style={sx.input} />
    </Base>
  )
}

Slider.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Adds a fill color to the track - requires client-side JavaScript*/
  fill: React.PropTypes.bool,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool
}

Slider.contextTypes = {
  rebass: React.PropTypes.object
}

export default Slider

