module.exports = {
  runtimeCompiler: true,
  publicPath: '/',
  // publicPath: 'http://vue.studyit.io/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://news-at.zhihu.com/',
        // target: 'http://www.liulongbin.top:3005/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
