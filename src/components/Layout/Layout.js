import { Container } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <Container style={{ padding: 0 }}>
      {children}
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
