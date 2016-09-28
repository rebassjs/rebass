
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Media object with vertical alignment using flexbox
 */

const Media = ({
  img,
  right,
  align,
  imgWidth,
  imgHeight,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale } = theme

  const alignment = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end'
  }

  const alignItems = alignment[align]

  const cx = classnames('Media', className)

  const sx = {
    root: {
      display: 'flex',
      marginBottom: scale[2],
      alignItems,
      ...style
    },
    image: {
      flex: 'none',
      maxWidth: 'none',
      marginRight: right ? 0 : scale[2],
      marginLeft: right ? scale[2] : 0,
      order: right ? 9999 : null,
      ...subComponentStyles.image
    },
    body: {
      ...subComponentStyles.body
    }
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx.root}>
      <img
        src={img}
        width={imgWidth}
        height={imgHeight}
        style={sx.image} />
      <div
        style={sx.body}
        children={children} />
    </div>
  )
}

Media.propTypes = {
  /** Image source */
  img: React.PropTypes.string,
  /** Displays image to the right */
  right: React.PropTypes.bool,
  /** Vertical alignment */
  align: React.PropTypes.oneOf(['top', 'center', 'bottom'])
}

Media._name = 'Media'

export default withRebass(Media)

