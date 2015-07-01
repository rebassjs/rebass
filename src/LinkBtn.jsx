
import React from 'react'
import cx from 'classnames'

class LinkBtn extends React.Component {

  render () {
    return (
      <a {...this.props}
        className={cx('btn', {
          'btn-primary': !this.props.outline,
          'btn-outline': this.props.outline,
        })}>
        {this.props.children}
      </a>
    )
  }

}

LinkBtn.propTypes = {
  outline: React.PropTypes.bool
}

export default LinkBtn

