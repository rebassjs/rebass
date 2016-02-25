
import React from 'react'

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
`

/**
 * Progress element that inherits color
 */

const Progress = ({ value, style, ...props }) => (
  <div className='Progress'>
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

Progress.propTypes = {
  /** Value for progress bar */
  value: React.PropTypes.number
}

export default Progress
