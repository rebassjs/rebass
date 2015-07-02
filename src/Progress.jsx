
import React from 'react'
import cx from 'classnames'
import colors from './colors'

class Progress extends React.Component {

  render () {
    return (
      <progress {...this.props}
        className={cx('progress', this.props.color)}>
        {this.props.value}
      </progress>
    )
  }

}

Progress.propTypes = {
  color: React.PropTypes.oneOf(colors)
}

Progress.defaultProps = {
  color: 'blue'
}

export default Progress

