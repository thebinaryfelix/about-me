import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import theme from 'gatsby-theme-material-ui-top-layout/theme'

const withProviders = Component => props => (
  <ThemeProvider theme={theme}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...props} />
  </ThemeProvider>
)

export default withProviders
