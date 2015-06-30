
import React from 'react'
import cx from 'classnames'
import colorbass from 'colorbass'

class Badge extends React.Component {

  render() {
    classes = cx('h5', 'bold',
      colorbass(this.props.color).primary
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

//Badge.defaultProps = {
//  color: false
//}

export default Badge

