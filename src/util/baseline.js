
const baseline = (shift = 0) => (padding) => {
  return {
    paddingTop: `calc(${padding}px + ${shift}em)`,
    paddingBottom: `calc(${padding}px - ${shift}em)`
  }
}

export default baseline

