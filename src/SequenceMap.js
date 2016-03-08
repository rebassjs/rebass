
import React from 'react'
import Base from './Base'
import LinkBlock from './LinkBlock'
import config from './config'

/**
 * Sequence map pattern for use in multi-step forms
 */

const SequenceMap = ({
  steps,
  active,
  ...props
}, { rebass }) => {
  const { fontSizes, bold, scale, colors } = { ...config, ...rebass }

  const sx = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    fontSize: fontSizes[5],
    fontWeight: bold,
    color: colors.gray
  }

  return (
    <Base
      {...props}
      className='SequenceMap'
      baseStyle={sx}>
      {steps.map((step, i) => (
        <SequenceMap.Step
          key={i}
          width={`${100 / steps.length}%`}
          active={i <= active}
          {...step} />
      ))}
    </Base>
  )
}

SequenceMap.contextTypes = {
  rebass: React.PropTypes.object
}

SequenceMap.propTypes = {
  /** Array of links for each step in the sequence */
  steps: React.PropTypes.array,
  /** Index of current step */
  active: React.PropTypes.number
}

SequenceMap.defaultProps = {
  steps: []
}

// Subcomponent
export const Step = ({
  width,
  active,
  children,
  ...props
}, { rebass }) => {
  const { fontSizes, bold, scale, colors } = { ...config, ...rebass }

  const sx = {
    link: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      lineHeight: 1.25,
      flex: `1 1 ${width}`,
      paddingLeft: scale[1],
      paddingRight: scale[1]
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
      transform: 'translate(-50%, -50%)',
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
    <LinkBlock
      style={{
        ...sx.link,
        ...(active ? sx.active : {})
      }}
      {...props}>
      <div style={sx.dot} />
      {i !== 0 && <div style={sx.line} />}
      <div style={sx.label}>
        {children}
      </div>
    </LinkBlock>
  )
}

SequenceMap.Step = Step

export default SequenceMap

