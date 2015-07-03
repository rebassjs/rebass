
import React from 'react'
import { debounce, throttle } from 'lodash'

let win = typeof window !== 'undefined' ? window : false
let els = []

class ActiveId extends React.Component {

  constructor () {
    super ()
    this.onScroll = debounce(this.onScroll.bind(this), 20)
  }

  onScroll () {
    let active = false
    let winHeight = win.innerHeight
    els.forEach(function(el, i) {
      let rect = el.getBoundingClientRect()
      if (rect.height && rect.top > -1 && rect.top < (winHeight/2)) {
        active = el.id
      }
    })
    // Handle when none are in viewport
    if (!active) {
      els.forEach(function(el, i) {
        let rect = el.getBoundingClientRect()
        if (rect.height && rect.top < winHeight) {
          active = el.id
        }
      })
    }
    if (active) {
      this.props.update(active)
    }
  }

  componentDidMount () {
    if (win) {
      let nodes = document.querySelectorAll('[id]')
      for (var i = 0; i < nodes.length; i++) {
        els.push(nodes[i])
      }
      this.onScroll()
      win.addEventListener('scroll', this.onScroll)
    }
  }

  componentWillUnmount () {
    if (win) {
      win.removeEventListener('scroll', this.onScroll)
    }
  }

  render () {
    let update = this.props.update
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

}

export default ActiveId

