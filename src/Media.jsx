
import React from 'react'

class Media extends React.Component {

  render () {
    let middle = this.props.middle
    let bottom = this.props.bottom
    let alignClassName = 'align-top'
    if (this.props.middle) {
      alignClassName = 'align-middle'
    } else if (this.props.bottom) {
      alignClassName = 'align-bottom'
    }
    let images = React.Children.map(this.props.image, function(child) {
      let c = React.cloneElement(child, { style: { maxWidth: 'none' } })
      return c
    })
    return (
      <div className='overflow-hidden mxn1'>
        <div className={[
            'table-cell',
            'px1',
            alignClassName
          ].join(' ')}>
          {images}
        </div>
        <div className={[
            'table-cell',
            'px1',
            'col-12',
            alignClassName
          ].join(' ')}>
            {this.props.children}
          </div>
      </div>
    )
  }

}

Media.propTypes = {
  image: React.PropTypes.element,
  middle: React.PropTypes.bool,
  bottom: React.PropTypes.bool,
}

export default Media

