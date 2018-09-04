const path = require('path');
module.exports = {
    components: 'src/components/**/*.{js,jsx}',
    webpackConfig: require('./config/webpack.config.guide.js'),
    showSidebar: false,
    previewDelay: 1000,
    theme: {
        maxWidth: '100%'
    }
}   