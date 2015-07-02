
import React from 'react'

class Arrow extends React.Component {

  render() {
    let styles = {
      arrow: {
        width: 0,
        height: 0,
        marginLeft: '.1875em',
        verticalAlign: 'middle',
        borderRight: '.3125em solid transparent',
        borderLeft: '.3125em solid transparent'
      }
    }

    if (!this.props.up) {
      styles.arrow.borderTop = '.4375em solid'
    } else if (this.props.up) {
      styles.arrow.borderBottom = '.4375em solid'
    }

    return <span className='inline-block' style={styles.arrow} />
  }

}

Arrow.propTypes = {
  up: React.PropTypes.bool
}

export default Arrow

