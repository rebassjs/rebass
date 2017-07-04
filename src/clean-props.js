import { removeProps } from 'styled-system'

const clean = props => {
  const rebassProps = removeProps(props)
  const next = {}

  for (let key in rebassProps) {
    if (dict[key]) continue
    next[key] = rebassProps[key]
  }

  return next
}

const dict = {
  active: true,
  ratio: true,
  bold: true,
  caps: true,
  size: true,
  left: true,
  center: true,
  right: true,
  justify: true,
  top: true,
  right: true,
  bottom: true,
  left: true,
  z: true,
  backgroundImage: true,
}

export default clean
