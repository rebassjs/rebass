
import React from 'react'
import cx from 'classnames'

class Media extends React.Component {

  render () {
    return (
      <div className='overflow-hidden mb2 mxn1'>
        {this.props.children}
      </div>
    )
  }

}

class MediaImg extends React.Component {

  render () {
    let children = React.Children.map(this.props.children, function(child) {
      let c = React.cloneElement(child, { style: { maxWidth: 'none' } })
      return c
    })
    return (
      <div className={cx('table-cell', 'px1', {
          'align-middle': this.props.middle,
          'align-bottom': this.props.bottom,
          'align-top': (!this.props.middle && !this.props.bottom)
        })}>
        {children}
      </div>
    )
  }

}

MediaImg.propTypes = {
  middle: React.PropTypes.bool,
  bottom: React.PropTypes.bool,
}

class MediaBody extends React.Component {

  render () {
    return (
      <div className={cx('table-cell', 'px1', 'col-12', {
          'align-middle': this.props.middle,
          'align-bottom': this.props.bottom,
          'align-top': (!this.props.middle && !this.props.bottom)
        })}>
        {this.props.children}
      </div>
    )
  }

}

MediaBody.propTypes = {
  middle: React.PropTypes.bool,
  bottom: React.PropTypes.bool,
}


export default { Media, MediaImg, MediaBody }

