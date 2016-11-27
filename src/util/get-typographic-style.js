
const getTypographicStyle = (theme) => ({
  bold,
  center,
  caps
}) => {
  const result = {}

  if (bold) {
    result.fontWeight = theme.bold
  }

  if (center) {
    result.textAlign = 'center'
  }

  if (caps) {
    return {
      ...result,
      ...theme.caps
    }
  }

  return result
}

export default getTypographicStyle

