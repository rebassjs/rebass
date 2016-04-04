/**
 * Utility for merge class name from props from components
 */

function merge (props, className) {
  return [props, className].join(' ').trim()
}

export default merge

