
import React from 'react'
import cx from 'classnames'
import colors from './colors'

class Message extends React.Component {

  render () {
    let color = this.props.color
    let outline = this.props.outline
    return (
      <div {...this.props}
        className={cx('bold',
          'p2',
          outline ? color : 'bg-' + color,
          'white',
          'rounded',
          {
          'border': outline,
        })}>
        {this.props.children}
      </div>
    )
  }

}

Message.propTypes = {
  color: React.PropTypes.oneOf(colors),
  outline: React.PropTypes.bool
}

Message.defaultProps = {
  color: 'blue'
}

export default Message

