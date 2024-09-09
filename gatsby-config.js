require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { GA_ID } = process.env

// const isPreview = process.env.GATSBY_ACTIVE_ENV === 'preview'

const pathPrefix = '/'

// if (isPreview) {
//   // For PR previews, we need to use a dynamic path prefix
//   // This will be set by the GitHub Actions workflow
//   pathPrefix = process.env.PR_PATH || '/preview'
// }

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: pathPrefix,
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`autoprefixer`)(),
        ],
      },
    },
    GA_ID && {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          GA_ID,
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
  ].filter(Boolean), // Filter out falsy values
}
