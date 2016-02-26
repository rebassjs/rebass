
import React from 'react'
import theme from './theme'
// highlight?

/**
 * Pre element for displaying code examples
 */

const Pre = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const preConfig = { ...theme.Pre, ...rebass.Pre }

  return (
    <pre
      {...props}
      className='Pre'
      style={{
        ...preConfig,
        ...style
      }} />
  )
}

Pre.contextTypes = {
  rebass: React.PropTypes.object
}

export default Pre

