
import React from 'react'
import cx from 'classnames'

class Flex extends React.Component {

  render () {
    return (
      <div className={cx({
        'flex-auto': this.props.auto,
        'flex-none': this.props.noshrink,
        'px2': this.props.pad
        })}>
        {this.props.children}
      </div>
    )
  }

}

Flex.propTypes = {
  auto: React.PropTypes.bool,
  noshrink: React.PropTypes.bool,
  pad: React.PropTypes.bool
}

Flex.defaultProps = {
  pad: true
}

export default Flex

