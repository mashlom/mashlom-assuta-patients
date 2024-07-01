require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { GA_ID } = process.env

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: `חווית מטופל - אסותא אשדוד`,
    description: `חווית מטופל - אסותא אשדוד`,
    author: `@relbns`,
    siteUrl: `https://mashlom.github.io/`,
  },
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
