
import Color from 'color'
import config from '../config'

function getForegroundColor (backgroundColor) {
  const { colors } = config

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      console.log(`arguments[${i}]`, arguments[i])
      if (typeof arguments[i] === 'object' && arguments[i].backgroundColor) {
        backgroundColor = arguments[i].backgroundColor
      }
    }
  }

  try {
    const color = Color(backgroundColor).dark() ? colors.white : colors.black
    console.log(color)
    return color
  } catch (e) {
    return null
  }
}

export default getForegroundColor

