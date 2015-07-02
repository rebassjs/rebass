
import React from 'react'

class Card extends React.Component {

  render () {
    return (
      <div className='mb3 border rounded'>
        {this.props.image}
        <div className='p1'>
          {this.props.children}
        </div>
      </div>
    )
  }

}

Card.propTypes = {
  image: React.PropTypes.element
}

export default Card

