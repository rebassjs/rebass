
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import SequenceMapStep from './SequenceMapStep'

/**
 * Sequence map pattern for use in multi-step forms
 */

const SequenceMap = ({
  steps,
  active,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { fontSizes, bold, colors } = theme

  const cx = classnames('SequenceMap', className)

  const sx = {
    root: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      fontSize: fontSizes[5],
      fontWeight: bold,
      color: colors.gray,
      ...style
    },
    step: {
      ...subComponentStyles.step
    }
  }

  const chx = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      width: `${1 / children.length * 100}%`,
      first: i === 0,
      style: sx.step
    })
  })

  const schx = steps.map((step, i) => (
    <SequenceMapStep
      key={i}
      first={i === 0}
      width={`${100 / steps.length}%`}
      active={i <= active}
      style={sx.step}
      {...step} />
  ))

  return (
    <div
      {...props}
      children={chx || schx}
      className={cx}
      style={sx.root} />
  )
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

SequenceMap.Step = SequenceMapStep

SequenceMap._name = 'SequenceMap'

export default withRebass(SequenceMap)

