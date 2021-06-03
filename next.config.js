const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

// module.exports = withImages()

module.exports = withPlugins([
    withImages,
    {
        trailingSlash: true,
    }

])
