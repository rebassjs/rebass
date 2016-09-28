
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import HeadingLink from './HeadingLink'
import Text from './Text'

/**
 * Header for section elements
 */

const SectionHeader = ({
  heading,
  href,
  description,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, borderColor } = theme

  const cx = classnames('SectionHeader', className)

  const sx = {
    root: {
      display: 'flex',
      alignItems: 'center',
      paddingBottom: scale[1],
      marginTop: scale[3],
      marginBottom: scale[3],
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: borderColor,
      ...style
    },
    inner: {
      flex: '1 1 auto',
      ...subComponentStyles.inner
    },
    Heading: {
      ...subComponentStyles.Heading
    },
    Text: {
      ...subComponentStyles.Text
    }
  }

  href = href || `#${heading || ''}`

  return (
    <header
      {...props}
      className={cx}
      style={sx.root}>
      <div style={sx.inner}>
        <HeadingLink
          href={href}
          style={sx.Heading}
          children={heading} />
        {description && (
          <Text
            style={sx.Text}
            children={description} />
        )}
      </div>
      {children}
    </header>
  )
}

SectionHeader.propTypes = {
  /** Section heading */
  heading: React.PropTypes.string,
  /** Link to section, used in HeadingLink */
  href: React.PropTypes.string,
  /** Description of section */
  description: React.PropTypes.string
}

SectionHeader._name = 'SectionHeader'

export default withRebass(SectionHeader)

