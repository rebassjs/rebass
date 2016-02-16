
import defaults from './defaults'

class Config {
  constructor(init) {
    Object.assign(this, init)
  }

  set (obj) {
    if (typeof obj !== 'object') {
      return false
    }
    Object.assign(this, obj)
  }

  get (key) {
    return this[key]
  }

  setColors (colors) {
    Object.assign(this.colors, colors)
  }

  reset () {
  }
}

const createConfig = () => new Config(defaults)

const config = createConfig()

export default config

