
import isDark from './is-dark'

const getColorTheme = (colors) => (theme = 'default', inverted) => {
  const color = colors[theme]

  if (inverted) {
    return {
      color: isDark(color) ? colors.white : colors.black,
      backgroundColor: color,
      borderColor: color
    }
  }

  return {
    color
  }
}

export default getColorTheme

