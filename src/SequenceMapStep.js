
import React from 'react'
import LinkBlock from './LinkBlock'
import config from './config'

/**
 * Subcomponent for use in SequenceMap
 */

const SequenceMapStep = ({
  width,
  first,
  active,
  children,
  ...props
}, { rebass }) => {
  const { scale, colors } = { ...config, ...rebass }

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
      _className='SequenceMap_Step'
      style={{
        ...sx.link,
        ...(active ? sx.active : {})
      }}
      {...props}>
      <div style={sx.dot} />
      {!first && <div style={sx.line} />}
      <div style={sx.label}>
        {children}
      </div>
    </LinkBlock>
  )
}

SequenceMapStep.contextTypes = {
  rebass: React.PropTypes.object
}

SequenceMapStep.propTypes = {
  /** Width of step */
  width: React.PropTypes.string,
  /** Removes line from first step */
  first: React.PropTypes.bool,
  /** Sets primary color on active step */
  active: React.PropTypes.bool
}

export default SequenceMapStep

