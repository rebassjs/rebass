
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import LinkBlock from './LinkBlock'

/**
 * Subcomponent for use in SequenceMap
 */

const SequenceMapStep = ({
  width,
  first,
  active,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}, { rebass }) => {
  const { scale, colors } = theme

  const cx = classnames('SequenceMapStep', className)

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
      paddingRight: scale[1],
      ...style
    },
    dot: {
      position: 'relative',
      zIndex: 1,
      display: 'inline-block',
      width: scale[2],
      height: scale[2],
      marginBottom: scale[1],
      borderRadius: 99999,
      backgroundColor: 'currentcolor',
      ...subComponentStyles.dot
    },
    line: {
      position: 'absolute',
      top: scale[2] / 2,
      transform: 'translate(-50%, -50%)',
      left: 0,
      right: 0,
      height: 4,
      backgroundColor: 'currentcolor',
      ...subComponentStyles.line
    },
    label: {
      ...subComponentStyles.label
    },
    active: {
      color: colors.primary,
      ...subComponentStyles.active
    }
  }

  return (
    <LinkBlock
      className={cx}
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

SequenceMapStep.propTypes = {
  /** Width of step */
  width: React.PropTypes.string,
  /** Removes line from first step */
  first: React.PropTypes.bool,
  /** Sets primary color on active step */
  active: React.PropTypes.bool
}

SequenceMapStep._name = 'SequenceMapStep'

export default withRebass(SequenceMapStep)

