
import React from 'react'
import cx from 'classnames'
import colors from './colors'

class Button extends React.Component {

  render () {
    let color = this.props.color
    let outline = this.props.outline
    return (
      <button {...this.props}
        className={cx('btn',
          color ? (
            outline ? color : 'bg-' + color
          ) : false,
          {
          'btn-primary': !outline,
          'btn-outline': outline,
        })}>
        {this.props.children}
      </button>
    )
  }

}

Button.propTypes = {
  color: React.PropTypes.oneOf(colors),
  outline: React.PropTypes.bool
}

export default Button

