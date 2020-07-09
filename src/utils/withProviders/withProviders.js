import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Router } from '@reach/router'
import React from 'react'
import theme from '../../theme'

const withProviders = Component => props => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Router>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component path="/" {...props} />
      </Router>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default withProviders
