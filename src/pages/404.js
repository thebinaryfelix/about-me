import React from 'react'
import styled from 'styled-components'
import yellowWarningIcon from 'assets/images/yellowWarningIcon'
import { Link } from '@reach/router'
import { Grid, Typography } from '@material-ui/core'
import { Meta } from '../components'

const WarningIcon = styled(yellowWarningIcon)`
  ${({ theme }) => `
        height: 160px;
        width: 160px;
        ${[theme.breakpoints.down('sm')]} {
            height: 100px;
            width: 100px;
        }
    `}
`

const StyledGrid = styled(Grid)`
  margin-top: calc(50vh - 300px);
  padding
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const LinkItem = styled(Grid)`
  width: fit-content;
`

const IndexPage = () => (
  <>
    <Meta title="404 | Mateus Felix" />
    <StyledGrid
      container
      spacing={5}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <WarningIcon />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="p">
          The page you are looking for does not exist
        </Typography>
      </Grid>
      <LinkItem item>
        <StyledLink to="/">
          <Typography variant="h4" component="p">
            Back to Home
          </Typography>
        </StyledLink>
      </LinkItem>
    </StyledGrid>
  </>
)

export default IndexPage
