
import React from 'react'
import cx from 'classnames'
import colors from './colors'

class LinkBtn extends React.Component {

  render () {
    let color = false
    if (this.props.color) {
      if (this.props.outline) {
        color = this.props.color
      } else {
        color = 'bg-' + this.props.color
      }
    }
    return (
      <a {...this.props}
        className={cx('btn', color, {
          'btn-primary': !this.props.outline,
          'btn-outline': this.props.outline,
        })}>
        {this.props.children}
      </a>
    )
  }

}

LinkBtn.propTypes = {
  color: React.PropTypes.oneOf(colors),
  outline: React.PropTypes.bool
}

export default LinkBtn

