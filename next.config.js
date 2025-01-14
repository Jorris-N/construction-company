/** @type {import('next').NextConfig} */
const webpack = require ('webpack');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

      config.plugins.push(new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }))
      return config;
    }
}
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   webpack:(config, {buildId, dev, isServer, defaultLoaders, webpack})=>{
//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         $: "jquery",
//         jQuery: "jquery",
//         "window.jQuery": "jquery",
//       })
//     );
//     return config;
//   }
// }

// module.exports = nextConfig
