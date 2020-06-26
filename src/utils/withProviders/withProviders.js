import { ThemeProvider } from '@material-ui/core/styles'
import { Router } from '@reach/router'
import React from 'react'
import theme from 'gatsby-theme-material-ui-top-layout/theme'

const withProviders = Component => props => (
  <ThemeProvider theme={theme}>
    <Router>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component path="/" {...props} />
    </Router>
  </ThemeProvider>
)

export default withProviders
