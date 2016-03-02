
import React from 'react'
import theme from './theme'
import LinkBlock from './LinkBlock'

/**
 * Sequence map pattern for use in multi-step forms
 */

const SequenceMap = ({
  steps,
  active,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.SequenceMap : {}
  const { fontSizes, bold, scale, colors } = config

  const sx = {
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      fontSize: fontSizes[5],
      fontWeight: bold,
      color: colors.gray,
      ...customStyle,
      ...style
    },
    link: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      lineHeight: 1.25,
      flex: `1 1 ${100 / steps.length}%`,
      paddingLeft: scale[1],
      paddingRight: scale[1],
    },
    dot: {
      position: 'relative',
      zIndex: 1,
      display: 'inline-block',
      width: scale[2],
      height: scale[2],
      marginBottom: scale[1],
      borderRadius: 99999,
      backgroundColor: 'currentcolor'
    },
    line: {
      position: 'absolute',
      top: scale[2] / 2,
      transform: `translate(-50%, -50%)`,
      left: 0,
      right: 0,
      height: 4,
      backgroundColor: 'currentcolor'
    },
    label: {},
    active: {
      color: colors.primary
    }
  }

  return (
    <div
      {...props}
      className='SequenceMap'
      style={sx.root}>
      {steps.map((step, i) => (
        <LinkBlock
          key={i}
          style={{
            ...sx.link,
            ...(i <= active ? sx.active : {})
          }}
          {...step}>
          <div style={sx.dot} />
          {i !== 0 && <div style={sx.line} />}
          <div style={sx.label}>
            {step.children}
          </div>
        </LinkBlock>
      ))}
    </div>
  )
}

SequenceMap.contextTypes = {
  rebass: React.PropTypes.object
}

SequenceMap.propTypes = {
  /** Array of links for each step in the sequence */
  steps: React.PropTypes.array,
  /** Index of current step */
  active: React.PropTypes.number,
}

SequenceMap.defaultProps = {
  steps: []
}

export default SequenceMap

