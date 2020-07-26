import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'
import { Box, Grow, Grid, Link, Paper, Typography } from '@material-ui/core'
import useGithubRepos from './useGithubRepos'

const StyledPaper = styled(Paper)`
  ${({ theme }) => `
    min-height: 200px;
    background-color: #a356be;
    padding: ${theme.spacing(3)}px;

    transition: ${theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.short,
    })};
    &:hover {
      transform: translateY(-8px);
    }
  `}
`

const StyledGrid = styled(Grid)`
  ${({ theme }) => `
    margin-top: ${theme.spacing(4)}px;
  `}
`

const RepositoryCard = ({ name, description, url }) => (
  <Link href={url} rel="noopener referrer" target="_blank" underline="none">
    <StyledPaper elevation={3}>
      <Box mb={2}>
        <Typography align="center" variant="h5" component="h3" color="primary">
          <strong>{name}</strong>
        </Typography>
      </Box>
      <Typography align="center" variant="body1" color="primary">
        {description}
      </Typography>
    </StyledPaper>
  </Link>
)

RepositoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

const Projects = () => {
  const repos = useGithubRepos()
  const [grow, setGrow] = useState(false)

  const toggleGrow = isVisible => {
    setGrow(isVisible)
  }

  return (
    <StyledGrid container spacing={3} justify="space-evenly">
      <Grid item xs={12}>
        <Typography variant="h2" color="primary" align="center">
          Personal Projects
        </Typography>
      </Grid>
      <VisibilitySensor
        partialVisibility
        minTopValue={60}
        onChange={toggleGrow}
      >
        <Grid container spacing={3}>
          {repos.map(({ name, description, url }, i) => (
            <Grow key={name} in={grow} timeout={500 + i * 300}>
              <Grid data-testid="projects-cards" item xs={12} sm={6} md={4}>
                <RepositoryCard
                  name={name}
                  description={description}
                  url={url}
                />
              </Grid>
            </Grow>
          ))}
        </Grid>
      </VisibilitySensor>
    </StyledGrid>
  )
}

export default Projects
