import { Box, Breadcrumbs, Container, Typography } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../Footer'

const breadcrumbs = [
  { label: 'Mateus Félix', path: '/' },
  { label: 'about me', path: '/' },
]

const Navigation = () => (
  <Box p={3} display="flex" alignItems="center" justifyContent="space-between">
    <Breadcrumbs>
      {breadcrumbs.map(item => (
        <Typography key={item.label} color="secondary" variant="subtitle1">
          {item.label}
        </Typography>
      ))}
    </Breadcrumbs>
  </Box>
)

const Layout = ({ children }) => (
  <Container style={{ padding: 0 }}>
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Navigation />
      {children}
      <Footer />
    </Box>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
