
import React from 'react'
import cx from 'classnames'

class FlexItem extends React.Component {

  render () {
    return (
      <div className={cx({
        'flex-auto': this.props.auto,
        'flex-none': !this.props.auto,
        'px2': this.props.pad
        })}>
        {this.props.children}
      </div>
    )
  }

}

FlexItem.propTypes = {
  auto: React.PropTypes.bool,
  pad: React.PropTypes.bool
}

FlexItem.defaultProps = {
  pad: true
}

export default FlexItem

