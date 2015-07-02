
import React from 'react'

class Col extends React.Component {

  render () {
    let { xs, sm, md, lg } = this.props
    let c = []

    if (xs) {
      c.push('col')
    } else if (sm) {
      c.push('sm-col')
    } else if (md) {
      c.push('md-col')
    } else if (lg) {
      c.push('lg-col')
    }

    if (xs) {
      c.push('col-' + xs)
    }
    if (sm) {
      c.push('sm-col-' + sm)
    }
    if (md) {
      c.push('md-col-' + md)
    }
    if (lg) {
      c.push('lg-col-' + lg)
    }
    c.push('px2')

    return (
      <div className={c.join(' ')}>
        {this.props.children}
      </div>
    )
  }

}

export default Col

