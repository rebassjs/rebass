
import React from 'react'
import cx from 'classnames'

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
  color: React.PropTypes.string
}

Badge.defaultProps = {
  color: 'blue'
}

export default Badge

