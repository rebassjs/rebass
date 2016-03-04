
import React from 'react'
import Base from './Base'
import HeadingLink from './HeadingLink'
import Text from './Text'
import theme from './theme'

/**
 * Header for section elements
 */

const SectionHeader = ({
  heading,
  href,
  description,
  children,
  ...props
}, { rebass }) => {

  const config = { ...theme, ...rebass }
  const { scale, borderColor } = config

  return (
    <Base
      {...props}
      tagName='header'
      className='SectionHeader'
      baseStyle={{
        display: 'flex',
        alignItems: 'center',
        paddingBottom: scale[1],
        marginTop: scale[3],
        marginBottom: scale[3],
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: borderColor,
      }}>
      <div style={{
          flex: '1 1 auto'
        }}>
        <HeadingLink href={href || `#${heading || ''}`} children={heading} />
        {description &&
          <Text children={description} />
        }
      </div>
      {children}
    </Base>
  )
}

SectionHeader.propTypes = {
  /** Section heading */
  heading: React.PropTypes.string,
  /** Link to section, used in HeadingLink */
  href: React.PropTypes.string,
  /** Description of section */
  description: React.PropTypes.string,
}

SectionHeader.contextTypes = {
  rebass: React.PropTypes.object
}

export default SectionHeader

