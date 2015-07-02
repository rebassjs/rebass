
import React from 'react'

class Pad extends React.Component {

  render () {
    let { x, y } = this.props
    let px = '', py = ''
    if (x) {
      px = 'px' + x
    }
    if (y) {
      py = 'py' + y
    }

    return (
      <div className={[px, py].join(' ')}>
        {this.props.children}
      </div>
    )
  }

}

Pad.propTypes = {
  x: React.PropTypes.number,
  y: React.PropTypes.number
}

Pad.defaultProps = {
  x: 0,
  y: 0
}

export default Pad

