module.exports = {
    publicPath: '/',
    devServer: {
        proxy: {
            '/today': {
                target: 'https://open.tophub.today',
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite: {     
                    '^/today': ''   // 即用 '/api'表示'http://localhost:3000/api'
                }
            }
        }
    }

}