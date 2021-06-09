const isDev = process.env.NODE_ENV !== "production";
const withImages = require('next-images')
const withSass = require('sass')

const withPlugins = require('next-compose-plugins');

const repository_name = "desafio-06-interface-com-chakra-ui"

module.exports = withPlugins([
    [withImages, {
        assetPrefix: isDev ? "": `/${repository_name}/`
    }],
    withSass,
    {
        trailingSlash: true,
        basePath: isDev ? "": `/${repository_name}`,
        assetPrefix: isDev ? "": `/${repository_name}/`   
    }
])
