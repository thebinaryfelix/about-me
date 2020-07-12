import {
  AppBar,
  Box,
  Breadcrumbs,
  Container,
  Typography,
} from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Footer from '../Footer'

const breadcrumbs = [
  { label: 'Mateus Félix', path: '/' },
  { label: 'about me', path: '/' },
]

const StyledNav = styled(AppBar)`
  ${({ theme }) => `
    height: 48px;
    padding-left: ${theme.spacing(3)}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color #ffffffff;
  `}
`

const StyledContainer = styled(Container)`
  padding: 0;
`

const BackgroundBox = styled(Box)`
  background: linear-gradient(45deg, #a356be, #570076);
`

const Layout = ({ children }) => (
  <BackgroundBox>
    <StyledNav>
      <Breadcrumbs role="navigation">
        {breadcrumbs.map(item => (
          <Typography key={item.label} color="secondary" variant="subtitle1">
            {item.label}
          </Typography>
        ))}
      </Breadcrumbs>
    </StyledNav>
    <StyledContainer>
      <Box
        pt={{ xs: 12, sm: 15 }}
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        {children}
        <Footer />
      </Box>
    </StyledContainer>
  </BackgroundBox>
)

Layout.propTypes = {
  children: PropTypes.node,
}

Layout.defaultProps = {
  children: null,
}

export default Layout
