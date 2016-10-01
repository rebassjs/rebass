
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Heading from './Heading'
import Text from './Text'

/**
 * Main page header with description
 */

const PageHeader = ({
  heading,
  description,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, borderColor } = theme

  const cx = classnames('PageHeader', className)

  const sx = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      paddingTop: scale[3],
      paddingBottom: scale[2],
      marginTop: scale[4],
      marginBottom: scale[4],
      borderBottomWidth: 2,
      borderBottomStyle: 'solid',
      borderColor,
      ...style
    },
    inner: {
      flex: '1 1 auto',
      ...subComponentStyles.inner
    },
    heading: {
      ...subComponentStyles.Heading
    },
    text: {
      ...subComponentStyles.Text
    }
  }

  return (
    <header
      {...props}
      className={cx}
      style={sx.root}>
      <div style={sx.inner}>
        <Heading
          level={1}
          style={sx.heading}
          children={heading} />
        {description && (
          <Text
            style={sx.text}
            children={description} />
        )}
      </div>
      {children}
    </header>
  )
}

PageHeader.propTypes = {
  /** Page heading */
  heading: React.PropTypes.string,
  /** Description of page */
  description: React.PropTypes.string
}

PageHeader._name = 'PageHeader'

export default withRebass(PageHeader)

