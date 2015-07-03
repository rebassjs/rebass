
import React from 'react'
import cx from 'classnames'
import colors from './colors'

class LinkBtn extends React.Component {

  render () {
    let color = false
    let btnClass = false
    if (this.props.color) {
      if (this.props.outline) {
        color = this.props.color
      } else {
        color = 'bg-' + this.props.color
      }
    }
    if (this.props.outline) {
      btnClass = 'btn-outline'
    } else {
      btnClass = 'btn-primary'
    }

    return (
      <a {...this.props}
        className={cx('btn', color, btnClass)}>
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

