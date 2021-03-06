/// <reference types="next" />
/// <reference types="next/types/global" />

path = require('path')

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, 'src/'),
    }
    return config
  },
}