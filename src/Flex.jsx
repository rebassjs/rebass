
import React from 'react'
import cx from 'classnames'

class Flex extends React.Component {

  render () {
    return (
      <div
        className={cx(
          'flex',
          {
            'flex-wrap': this.props.wrap,
            'flex-center': this.props.center,
            'mxn2': this.props.pad
          }
        )}>
        {this.props.children}
      </div>
    )
  }

}

Flex.propTypes = {
  wrap: React.PropTypes.bool,
  center: React.PropTypes.bool,
  pad: React.PropTypes.bool,
}

Flex.defaultProps = {
  center: true,
  pad: true
}

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

export default { Flex, FlexItem }

