
import React from 'react'

class ThemeProvider extends React.Component {
  getChildContext () {
    return {
      rebass: this.props.theme
    }
  }

  render () {
    return (
      <div {...this.props} />
    )
  }
}

ThemeProvider.defaultProps = {
  theme: {}
}

ThemeProvider.propTypes = {
  theme: React.PropTypes.object
}

ThemeProvider.childContextTypes = {
  rebass: React.PropTypes.object
}

export default ThemeProvider

