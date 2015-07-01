
import React from 'react'
import cx from 'classnames'

class Flex extends React.Component {

  render () {
    let flex = 'flex'
    let align = 'flex-center'
    let { top, bottom, sm, md, lg } = this.props
    if (top) {
      align = 'flex-start'
    } else if (bottom) {
      align = 'flex-end'
    }
    if (sm) {
      flex = 'sm-flex'
    } else if (md) {
      flex = 'md-flex'
    } else if (lg) {
      flex = 'lg-flex'
    }
    return (
      <div
        className={cx(
          flex,
          align,
          {
            'flex-wrap': this.props.wrap,
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
  sm: React.PropTypes.bool,
  md: React.PropTypes.bool,
  lg: React.PropTypes.bool,
  top: React.PropTypes.bool,
  bottom: React.PropTypes.bool,
  center: React.PropTypes.bool,
  pad: React.PropTypes.bool,
}

Flex.defaultProps = {
  top: false,
  bottom: false,
  center: true,
  pad: true
}

export default Flex

