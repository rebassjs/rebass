
import React from 'react'
import { throttle } from 'lodash'

let win = typeof window !== 'undefined' ? window : false
let el = false

class ScrollFix extends React.Component {

  constructor () {
    super ()
    this.componentDidMount = this.componentDidMount.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.onResize = this.onResize.bind(this)
    this.state = {
      snap: false,
      width: 'auto',
      offsetTop: 0,
      offsetLeft: 0
    }
  }

  onScroll (e) {
    let state = this.state
    let snap = win.scrollY > (state.offsetTop - this.props.offset)
    if (snap) {
      this.setState({ snap: true })
    } else if (state.snap) {
      this.setState({ snap: false })
    }
  }

  onResize (e) {
    let el = React.findDOMNode(this)
    let state = this.state
    if (state.offsetLeft !== el.offsetLeft) {
      console.log('update offsetLeft')
      this.setState({ offsetLeft: el.offsetLeft })
    }
    if (state.width !== el.offsetWidth) {
      console.log('width change', state.width, el.offsetWidth)
    }
  }

  componentDidMount () {
    let el = React.findDOMNode(this)
    this.setState({
      width: el.offsetWidth,
      offsetTop: el.offsetTop,
      offsetLeft: el.offsetLeft
    })
    if (win) {
      win.addEventListener('scroll', throttle(this.onScroll, 100))
      win.addEventListener('resize', throttle(this.onResize, 100))
    }
  }

  componentWillUnmount () {
    if (win) {
      win.removeEventListener('scroll', this.onScroll)
      win.removeEventListener('resize', this.onResize)
    }
  }

  render () {
    let state = this.state
    let styles = {
      outer: {
        width: state.width
      },
      inner: {
        top: this.props.offset,
        left: this.state.offsetLeft,
        bottom: this.props.bottom,
        overflow: 'auto'
      }
    }
    let className = [
      (state.snap ? 'sm-fixed' : '')
    ].join(' ')
    return (
      <div style={styles.outer}>
        <div style={styles.inner}
          className={className}>
          {this.props.children}
        </div>
      </div>
    )
  }

}

ScrollFix.propTypes = {
  offset: React.PropTypes.number,
  bottom: React.PropTypes.number
}

ScrollFix.defaultProps = {
  offset: 16,
  bottom: 0
}

export default ScrollFix

