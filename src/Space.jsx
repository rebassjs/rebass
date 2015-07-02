
import React from 'react'

class Space extends React.Component {

  render () {
    let space = [ 0, 8, 16, 32, 64 ]
    let style = {
      width: space[this.props.w]
    }
    return <div className='inline-block' style={style}/>
  }

}

Space.propTypes = {
  w: React.PropTypes.number
}

Space.defaultProps = {
  w: 1
}

export default Space

