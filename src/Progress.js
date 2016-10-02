
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Progress element
 */

const Progress = ({
  value,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, colors } = theme

  const css = `
    .Progress_progress::-webkit-progress-bar {
      background-color: ${colors.darken};
    }
    .Progress_progress::-webkit-progress-value {
      background-color: currentcolor;
    }
    .Progress_progress::-moz-progress-bar {
      background-color: currentcolor;
    }
  `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

  const cx = classnames('Progress', className)

  const sx = {
    root: {
      marginBottom: scale[2],
      overflow: 'hidden',
      color: colors.primary,
      borderRadius: 9999,
      ...style
    },
    progress: {
      display: 'block',
      width: '100%',
      height: 8,
      overflow: 'hidden',
      border: 0,
      WebkitAppearance: 'none',
      appearance: 'none',
      ...subComponentStyles.progress
    }
  }

  return (
    <div
      className={cx}
      style={sx.root}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <progress
        {...props}
        className='Progress_progress'
        value={value}
        children={value}
        style={sx.progress} />
    </div>
  )
}

Progress.propTypes = {
  /** Value for progress bar */
  value: React.PropTypes.number,
  /** Bar color - can either be a key from the theme colors object or any color value */
  color: React.PropTypes.string
}

Progress._name = 'Progress'

export default withRebass(Progress)

