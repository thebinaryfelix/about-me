import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'
import { Box, Grid, Link, Paper, Typography } from '@material-ui/core'
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
  const transitions = useTransition(repos, item => item.name, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    trail: 100,
  })

  return (
    <StyledGrid container spacing={3} justify="space-evenly">
      <Grid item xs={12}>
        <Typography variant="h2" color="primary" align="center">
          Projects
        </Typography>
      </Grid>
      {transitions.map(({ item: { name, description, url }, key, props }) => (
        <Grid key={key} item xs={12} sm={6} md={4}>
          <animated.div
            data-testid={`projects-animated-div-${key}`}
            style={props}
          >
            <RepositoryCard
              style={props}
              name={name}
              description={description}
              url={url}
            />
          </animated.div>
        </Grid>
      ))}
    </StyledGrid>
  )
}

export default Projects
