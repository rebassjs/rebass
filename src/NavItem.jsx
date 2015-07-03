
import React from 'react'
import cx from 'classnames'

class NavItem extends React.Component {

  render () {
    let label = this.props.children || this.props.label
    return (
      <a {...this.props}
        className={cx('NavItem btn', {
          'p0 py1': this.props.flush
        })}>
        {label}
      </a>
    )
  }

}

NavItem.propTypes = {
  flush: React.PropTypes.bool
}

export default NavItem

