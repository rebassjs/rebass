
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
    colors = Object.assign(this.colors, colors)
    this.set({ colors })
  }

  reset () {
    this.set(defaults)
  }
}

const createConfig = () => new Config(defaults)

const config = createConfig()

export default config

export const colors = config.colors
export const scale = config.scale
export const typeScale = config.typeScale
export const button = config.button
export const borderRadius = config.borderRadius

