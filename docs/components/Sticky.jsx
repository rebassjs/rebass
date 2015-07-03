
import React from 'react'
import { throttle } from 'lodash'

let win = typeof window !== 'undefined' ? window : false
let el = false

class Sticky extends React.Component {

  constructor () {
    super ()
    this.componentDidMount = this.componentDidMount.bind(this)
    this.onScroll = throttle(this.onScroll.bind(this), 50)
    this.onResize = throttle(this.onResize.bind(this), 50)
    this.state = {
      snap: false,
      scrollBy: false,
      width: 'auto',
      height: 'auto',
      top: 0,
      offsetTop: 0,
      offsetLeft: 0
    }
  }

  onScroll (e) {
    let state = this.state
    let props = this.props
    let snap = win.scrollY > state.offsetTop
    if (win.scrollY > state.offsetTop + props.height - win.innerHeight) {
      let top = props.height - win.innerHeight
      this.setState({
        scrollBy: true,
        top: top
      })
    } else {
      this.setState({
        scrollBy: false,
        top: 0
      })
    }
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
      this.setState({ offsetLeft: el.offsetLeft })
    }
    if (state.width !== el.offsetWidth) {
      console.log('width change', state.width, el.offsetWidth)
      this.setState({ width: el.offsetWidth, height: el.offsetHeight })
    }
  }

  componentDidMount () {
    let el = React.findDOMNode(this)
    if (win) {
      this.setState({
        width: el.offsetWidth,
        height: el.offsetHeight,
        offsetTop: el.offsetTop,
        offsetLeft: el.offsetLeft
      }, this.onScroll)
      win.addEventListener('scroll', this.onScroll)
      win.addEventListener('resize', this.onResize)
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
    let props = this.props
    let styles = {
      outer: {
        position: 'relative',
        width: state.width,
        minHeight: state.height
      },
      inner: {
        top: state.top,
        left: state.scrollBy ? 0 : state.offsetLeft,
        width: state.width,
        bottom: state.scrollBy ? 'auto' : 0,
        overflow: 'auto'
      }
    }
    let className = ''
    if (state.snap && !state.scrollBy) {
      className = 'sm-fixed'
    } else if (state.snap && state.scrollBy) {
      className = 'sm-absolute'
    }

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

Sticky.propTypes = {
  pad: React.PropTypes.number,
  height: React.PropTypes.number,
  bottom: React.PropTypes.number
}

Sticky.defaultProps = {
  pad: 0,
  height: Infinity,
  bottom: 0
}

export default Sticky

