
import React from 'react'
import theme from './theme'

/**
 * Progress element
 */

const Progress = ({ value, color, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const progressConfig = { ...theme.Progress, ...rebass.Progress }

  const css = `
    .Progress-progress::-webkit-progress-bar {
      background-color: rgba(0, 0, 0, .125);
    }
    .Progress-progress::-webkit-progress-value {
      background-color: ${color || progressConfig.color};
    }
    .Progress-progress::-moz-progress-bar {
      background-color: ${color || progressConfig.color};
    }
  `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

  return (
    <div className='Progress' style={style}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <progress
        {...props}
        className='Progress-progress'
        value={value}
        children={value}
        style={{
          display: 'block',
          width: '100%',
          height: 8,
          overflow: 'hidden',
          backgroundColor: 'rgba(0, 0, 0, .125)',
          border: 0,
          borderRadius: 9999,
          WebkitAppearance: 'none',
          appearance: 'none'
        }} />
    </div>
  )
}

Progress.propTypes = {
  /** Value for progress bar */
  value: React.PropTypes.number,
  /** Color of progress bar */
  color: React.PropTypes.string
}

Progress.contextTypes = {
  rebass: React.PropTypes.object
}

export default Progress
