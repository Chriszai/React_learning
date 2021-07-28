const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api1',{//遇见、api1前缀的请求 则触发代理 
            target:'http://localhost:5000',//请求转发给谁
            changeOrigin:true, // 控制收到的服务器请求头中HOST的值
            pathRewrite:{'^/api1':''} // 重写请求路径（必须重写）
        }),
        proxy('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        }),
    );
}