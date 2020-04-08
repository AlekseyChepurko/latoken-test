const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://openweathermap.org',
            pathRewrite: {
                '^/api': '',
            },
            changeOrigin: true,
        })
    );
    app.use(
        '/weather/api',
        createProxyMiddleware({
            target: 'https://api.openweathermap.org',
            pathRewrite: {
                '^/weather/api': '',
            },
            changeOrigin: true,
        })
    )
};
