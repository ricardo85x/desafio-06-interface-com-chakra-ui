const withImages = require('next-images')
const withSass = require('sass')

const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    withImages,
    withSass,
    {
        trailingSlash: true,
    }
])
