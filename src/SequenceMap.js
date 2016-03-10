
import React from 'react'
import Base from './Base'
import SequenceMapStep from './SequenceMapStep'
import config from './config'

/**
 * Sequence map pattern for use in multi-step forms
 */

const SequenceMap = ({
  steps,
  active,
  children,
  ...props
}, { rebass }) => {
  const { fontSizes, bold, colors } = { ...config, ...rebass }

  const chx = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      width: `${1 / children.length * 100}%`,
      first: i === 0
    })
  })

  const sx = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    fontSize: fontSizes[5],
    fontWeight: bold,
    color: colors.gray
  }
  const schx = steps.map((step, i) => (
    <SequenceMapStep
      key={i}
      first={i === 0}
      width={`${100 / steps.length}%`}
      active={i <= active}
      {...step} />
  ))

  return (
    <Base
      {...props}
      children={chx || schx}
      className='SequenceMap'
      baseStyle={sx} />
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

SequenceMap.Step = SequenceMapStep

export default SequenceMap

