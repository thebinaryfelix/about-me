const fs = require('fs')
const path = require('path')

const { ENVIRONMENT = 'dev' } = process.env
process.env.GATSBY_ENV = ENVIRONMENT

const dotenvFile = `.env.${ENVIRONMENT}`

if (fs.existsSync(dotenvFile)) {
  // eslint-disable-next-line global-require
  require('dotenv').config({
    path: dotenvFile,
  })
}

const siteUrl = process.env.GATSBY_SITE_URL

module.exports = {
  siteMetadata: {
    title: `Mateus Felix`,
    description: `Personal branding website`,
    author: `@thebinaryfelix - Mateus Felix`,
    image: `/assets/images/socialBanner.jpg`,
    siteUrl,
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
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
