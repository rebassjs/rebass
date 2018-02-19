import React from 'react'
import { withRouter } from 'react-router-dom'

// used to scroll react-router pages to top on navigation
class ScrollTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollTop)
