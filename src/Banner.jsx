
import React from 'react'
import colors from './colors'

class Banner extends React.Component {

  render () {
    let styles = {
      container: {
        textAlign: 'center',
        backgroundImage: this.props.bgImage,
        backgroundPostion: this.props.bgPosition,
        backgroundSize: this.props.bgSize,
      },
      header: {
        minHeight: '1.5em'
      },
      footer: {
        minHeight: '1.5em'
      }
    }
    if (this.props.left) {
      styles.container.textAlign = 'left'
    } else if (this.props.right) {
      styles.container.textAlign = 'right'
    }

    return (
      <div className={[
          'white',
          'bg-' + this.props.bgColor
        ].join(' ')}
        style={styles.container}>
        <div
          className='p2'
          style={styles.header}>
          {this.props.header}
        </div>
        <div className='px3 py4'>
          {this.props.children}
        </div>
        <div
          className='p2'
          style={styles.footer}>
          {this.props.footer}
        </div>
      </div>
    )
  }

}

Banner.propTypes = {
  left: React.PropTypes.bool,
  right: React.PropTypes.bool,
  bgColor: React.PropTypes.oneOf(colors),
  bgImage: React.PropTypes.string,
  bgSize: React.PropTypes.string,
  bgPosition: React.PropTypes.string,
}

Banner.defaultProps = {
  bgColor: 'black',
  bgSize: 'cover',
  bgPosition: 'center'
}

export default Banner

