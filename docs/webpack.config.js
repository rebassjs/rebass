const path = require('path')

module.exports = {
  resolve: {
    alias: {
      rebass: path.join(__dirname, '..')
    }
  }
}
module.exports.meta = {
  ignore: true
}
