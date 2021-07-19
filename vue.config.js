module.exports = {
  configureWebpack: {
    devServer: {
      proxy: 'http://localhost:4000/'
    }
  }
};
