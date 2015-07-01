
import React from 'react'
import cx from 'classnames'

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
  color: React.PropTypes.string
}

Progress.defaultProps = {
  color: 'blue'
}

export default Progress

