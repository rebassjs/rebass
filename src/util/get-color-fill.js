
import isDark from './is-dark'

const getColorFill = (colors) => (fill = 'default') => {
  const color = colors[fill] || colors.default

  return {
    color: isDark(color) ? colors.white : colors.black,
    backgroundColor: color,
    borderColor: color
  }
}

export default getColorFill

