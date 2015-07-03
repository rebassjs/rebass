
import React from 'react'
import cx from 'classnames'

class MenuItem extends React.Component {

  render () {
    let label = this.props.children || this.props.label
    let className = cx('MenuItem btn block', {
      'p0 py1': !this.props.compact && this.props.flush,
      'p0': this.props.compact && this.props.flush
    })
    let style = {}
    if (this.props.compact) {
      style.paddingTop = 4
      style.paddingBottom = 4
      style.paddingLeft = this.props.flush ? 0 : 8
      style.paddingRight = this.props.flush ? 0 : 8
    }

    return (
      <a {...this.props}
        className={className}
        style={style}>
        {label}
      </a>
    )
  }

}

MenuItem.propTypes = {
  flush: React.PropTypes.bool,
  compact: React.PropTypes.bool
}

export default MenuItem

