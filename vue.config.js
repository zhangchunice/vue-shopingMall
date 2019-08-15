module.exports = {
  runtimeCompiler: true,
  publicPath: '/',
  // publicPath: 'http://vue.studyit.io/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://news-at.zhihu.com/',
        ws: true,
        changeOrigin: true
      },
      '/weather': {
        target: 'http://v.juhe.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/weather': ''
        }
      }
    }
  }
}
