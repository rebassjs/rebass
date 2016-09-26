
// to do: consider px only
// paddingTop: padding + shift, // * fontSize
// paddingBottom: padding - shift

const baseline = (shift = 0) => (padding) => {
  return {
    paddingTop: `calc(${padding}px + ${shift}em)`,
    paddingBottom: `calc(${padding}px - ${shift}em)`
  }
}

export default baseline

