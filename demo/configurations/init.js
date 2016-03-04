
import Rebass, { config } from '../../src'

const componentConfigs = {}

Object.keys(Rebass).forEach(key => {
  componentConfigs[key] = {}
})

const init = {
  ...config,
  ...componentConfigs
}

export default init
