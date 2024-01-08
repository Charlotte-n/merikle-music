const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
const CracoCSSModules = require('craco-css-modules')

module.exports = {
  plugins: [{ plugin: CracoCSSModules }],

  webpack: {
    alias: {
      '@': resolve('src')
    },
    resolve: {
      alias: {
        react: path.resolve(
          __dirname,
          './node_modules/components-lib/node_modules/react'
        ),
        'react-dom': path.resolve(
          __dirname,
          './node_modules/components-lib/node_modules/react-dom'
        )
      }
    }
  }
}
