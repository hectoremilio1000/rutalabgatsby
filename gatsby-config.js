module.exports = {
    plugins: [
        
          `gatsby-plugin-sharp`,
          `gatsby-transformer-sharp`,
          {
            resolve: `gatsby-plugin-theme-ui`,
            options: {
              prismPreset: 'night-owl',
              preset: '@theme-ui/preset-funk',
            },
          },
          {
            resolve: `gatsby-plugin-s3`,
            options: {
              bucketName: "www.rutalab.com",
            },
          },
          `gatsby-plugin-postcss`
    ]
}