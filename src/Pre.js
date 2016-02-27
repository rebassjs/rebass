
import React from 'react'
import theme from './theme'
// highlight?

/**
 * Pre element for displaying code examples
 */

const Pre = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyles = rebass ? rebass.Pre : {}
  const { monospace, scale, colors } = config

  return (
    <pre
      {...props}
      className='Pre'
      style={{
        fontFamily: monospace,
        paddingLeft: scale[2],
        marginBottom: scale[2],
        borderLeft: `4px solid ${colors.gray}`,
        overflowX: 'scroll',
        ...customStyles,
        ...style
      }} />
  )
}

Pre.contextTypes = {
  rebass: React.PropTypes.object
}

export default Pre

