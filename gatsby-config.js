const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Mateus Felix Web Developer`,
    description: `Profile page for Mateus Felix`,
    author: `@thebinaryfelix - Mateus Felix`,
    siteUrl: `https://thebinaryfelix.me`,
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Comfortaa`,
                variants: [`300`, `400`, `500`],
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Comfortaa'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mateus Felix`,
        short_name: `Mateus Felix`,
        start_url: `/`,
        background_color: `#FFECAE`,
        theme_color: `#8800FF`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },
  ],
}
