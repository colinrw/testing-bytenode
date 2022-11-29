module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './electron/main.ts',
  output: {
    publicPath: '',
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: require('./rules.webpack'),
  }
}