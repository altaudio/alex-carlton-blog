const path = require('path')

const aliases = [
  { alias: 'core', filePath: 'components/core' },
  { alias: 'composed', filePath: 'components/composed' },
]

module.exports = {
  webpack: config => {
    aliases.forEach(({ alias, filePath }) => config.resolve.alias[alias] = path.join(__dirname, filePath))

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}
