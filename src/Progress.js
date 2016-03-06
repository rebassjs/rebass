
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Progress element
 */

const Progress = ({ value, ...props }, { rebass }) => {
  const { scale } = { ...config, ...rebass }

  const css = `
    .Progress_progress::-webkit-progress-bar {
      background-color: rgba(0, 0, 0, .125);
    }
    .Progress_progress::-webkit-progress-value {
      background-color: currentcolor;
    }
    .Progress_progress::-moz-progress-bar {
      background-color: currentcolor;
    }
  `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

  const sx = {
    root: {
      marginBottom: scale[2],
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 0, 0, .125)',
      borderRadius: 9999
    },
    progress: {
      display: 'block',
      width: '100%',
      height: 8,
      overflow: 'hidden',
      border: 0,
      WebkitAppearance: 'none',
      appearance: 'none'
    }
  }

  return (
    <Base
      {...props}
      className='Progress'
      baseStyle={sx.root}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <progress
        {...props}
        className='Progress_progress'
        value={value}
        children={value}
        style={sx.progress} />
    </Base>
  )
}

Progress.propTypes = {
  /** Value for progress bar */
  value: React.PropTypes.number,
  /** Bar color - can either be a key from the config colors object or any color value */
  color: React.PropTypes.string
}

Progress.defaultProps = {
  color: 'primary'
}

Progress.contextTypes = {
  rebass: React.PropTypes.object
}

export default Progress
