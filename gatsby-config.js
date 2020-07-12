/* eslint-disable global-require */
const fs = require('fs')
const path = require('path')

const { ENVIRONMENT = 'dev' } = process.env
process.env.GATSBY_ENV = ENVIRONMENT

const dotenvFiles = [`.env.${ENVIRONMENT}`, '.env']

dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv-expand')(
      require('dotenv').config({
        path: dotenvFile,
      }),
    )
  }
})

const siteUrl = process.env.GATSBY_SITE_URL

module.exports = {
  siteMetadata: {
    title: `Mateus Felix`,
    description: `Web Developer`,
    author: `Mateus Felix`,
    siteUrl,
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [`Comfortaa:300,600,700`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-minify`,
      options: {
        removeComments: true,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-top-layout`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mateus Felix`,
        short_name: `Mateus Felix`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#8800FF`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
  ],
}
