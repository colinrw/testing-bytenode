module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    publicPath: '../',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: require('./rules.webpack'),
  },
}