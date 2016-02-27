
import React from 'react'
import theme from './theme'

/**
 * Progress element
 */

const Progress = ({ value, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Progress : {}
  const { scale, colors } = config

  const css = `
    .Progress-progress::-webkit-progress-bar {
      background-color: rgba(0, 0, 0, .125);
    }
    .Progress-progress::-webkit-progress-value {
      background-color: currentcolor;
    }
    .Progress-progress::-moz-progress-bar {
      background-color: currentcolor;
    }
  `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

  const { margin, ...otherStyle } = { ...customStyle, ...style }

  const sx = {
    root: {
      marginBottom: scale[2],
      margin
    },
    progress: {
      display: 'block',
      width: '100%',
      height: 8,
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 0, 0, .125)',
      border: 0,
      borderRadius: 9999,
      WebkitAppearance: 'none',
      appearance: 'none',
      color: colors.blue,
      ...otherStyle
    }
  }

  return (
    <div className='Progress' style={sx.root}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <progress
        {...props}
        className='Progress-progress'
        value={value}
        children={value}
        style={sx.progress} />
    </div>
  )
}

Progress.propTypes = {
  /** Value for progress bar */
  value: React.PropTypes.number
}

Progress.contextTypes = {
  rebass: React.PropTypes.object
}

export default Progress
