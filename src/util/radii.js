
/**
 * Utility for extracting border radii props from components
 */

const radii = (radius = 2) => props => {
  const {
    rounded,
    pill,
    circle
  } = props || {}

  let borderRadius

  if (rounded === true) {
    borderRadius = radius
  } else if (rounded === false) {
    borderRadius = 0
  }

  if (typeof rounded === 'string') {
    const obj = {
      top: `${radius}px ${radius}px 0 0`,
      right: `0 ${radius}px ${radius}px 0`,
      bottom: `0 0 ${radius}px ${radius}px`,
      left: `${radius}px 0 0 ${radius}px`
    }
    borderRadius = obj[rounded] || null
  }

  if (pill || circle) {
    borderRadius = 99999
  }

  if (typeof borderRadius === 'undefined') {
    return {}
  } else {
    return { borderRadius }
  }
}

export default radii

