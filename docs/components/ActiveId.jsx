
import React from 'react'
import { throttle } from 'lodash'

let win = typeof window !== 'undefined' ? window : false
let els = []

class ActiveId extends React.Component {

  constructor () {
    super ()
    this.onScroll = this.onScroll.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  onScroll () {
    let active = false
    let top = win.scrollY
    let bottom = win.scrollY + win.innerHeight
    els.forEach(function(el, i) {
      let next = els[i+1] || false
      //if (next && next.offsetTop > bottom) {
      //  active = el.id
      //} else if (next && next.offsetTop < bottom) {
      //  active = next.id
      //  console.log('next el', next.id)
      //} else if (!next && el.offsetTop > top) {
      //  active = el.id
      //}
    })
    console.log(active)
    this.updateId(active)
  }

  handleScroll (e) {
    throttle(this.onScroll, 100)
  }

  updateId (id) {
    console.log('updateId', id)
  }

  componentDidMount () {
    if (win) {
      let nodes = document.querySelectorAll('[id]')
      for (var i = 0; i < nodes.length; i++) {
        els.push(nodes[i])
      }
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

