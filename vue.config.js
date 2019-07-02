// vue.config.js
module.exports = {
  // 选项...
  publicPath: './',
  devServer: {
    open: true,
    proxy: {
      '/upload': {
        target: 'http://127.0.0.1:8081/upload',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/upload': '/upload'
        // }
      }
    }
  }
}