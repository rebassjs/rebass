
import React from 'react'
import Base from './Base'
import Heading from './Heading'
import Text from './Text'
import config from './config'

/**
 * Main page header with description
 */

const PageHeader = ({
  heading,
  description,
  children,
  ...props
}, { rebass }) => {
  const { scale, borderColor } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      tagName='header'
      className='PageHeader'
      baseStyle={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingTop: scale[3],
        paddingBottom: scale[2],
        marginTop: scale[4],
        marginBottom: scale[4],
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderColor
      }}>
      <div style={{ flex: '1 1 auto' }}>
        <Heading level={1} children={heading} />
        {description && (
          <Text children={description} />
        )}
      </div>
      {children}
    </Base>
  )
}

PageHeader.propTypes = {
  /** Page heading */
  heading: React.PropTypes.string,
  /** Description of page */
  description: React.PropTypes.string
}

PageHeader.contextTypes = {
  rebass: React.PropTypes.object
}

export default PageHeader

