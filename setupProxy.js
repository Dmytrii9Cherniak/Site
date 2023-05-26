const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/send', {
            target: 'http://localhost:8000',
            changeOrigin: true,
        })
    );
};