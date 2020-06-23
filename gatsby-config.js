module.exports = {
  siteMetadata: {
    title: 'Mateus Felix Web Developer',
    description: 'Profile page for Mateus Felix',
    author: '@thebinaryfelix - Mateus Felix',
  },
  plugins: [
    'gatsby-theme-material-ui',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Comfortaa'],
        },
      },
    },
  ],
}
