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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mateus Felix',
        short_name: 'Mateus Felix',
        start_url: '/',
        background_color: '#FFECAE',
        theme_color: '#8800FF',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
  ],
}
