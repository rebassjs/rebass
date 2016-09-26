
import React from 'react'
import { parse, stringify } from 'querystring'

const withParams = Comp => {
  class ParamWrapper extends React.Component {
    state = {}

    push = obj => {
      const str = stringify({ ...this.state, ...obj })
      window.history.pushState(obj, null, '?' + str)
    }

    handlePopstate = e => {
      const obj = parse(window.location.search.replace(/^\?/, ''))
      this.setState(obj)
    }

    componentDidMount () {
      const params = parse(window.location.search.replace(/^\?/, ''))
      this.setState(params)
      window.addEventListener('popstate', this.handlePopstate)
    }

    componentWillUnmount () {
      window.removeEventListener('popstate', this.handlePopstate)
    }

    render () {
      let params = {}
      if (typeof window !== 'undefined') {
        params = parse(window.location.search.replace(/^\?/, ''))
      }

      return (
        <Comp
          {...this.props}
          {...this.state}
          params={params}
          push={this.push}
        />
      )
    }
  }

  return ParamWrapper
}

export default withParams
