
import React from 'react'
import cx from 'classnames'
import colors from './colors'

class Badge extends React.Component {

  render() {
    let classes = cx(
      'h5',
      'bold',
      'px1',
      'inline-block',
      'rounded',
      'white',
      'bg-' + this.props.color
    )

    return (
      <span className={classes}>
        {this.props.children}
      </span>
    )
  }

}

Badge.propTypes = {
  color: React.PropTypes.oneOf(colors)
}

Badge.defaultProps = {
  color: 'blue'
}

export default Badge

