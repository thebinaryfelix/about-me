import { Box, Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Github from '@material-ui/icons/GitHub'
import Linkedin from '@material-ui/icons/LinkedIn'
import useProfileImg from './useProfileImg'

const StyledImage = styled(Img)`
  border-radius: 50%;
  border: 4px solid #ffffff;
`

const SocialIcon = ({ className, Icon }) => <Icon className={className} />

SocialIcon.propTypes = {
  className: PropTypes.string.isRequired,
  Icon: PropTypes.object.isRequired,
}

const StyledIcon = styled(SocialIcon)`
  ${({ theme }) => `
    color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.short,
    })};
    &:hover {
      transform: translateY(-8px);
    }
  `}
`

const GithubIcon = styled(StyledIcon)`
  ${({ theme }) => `
    font-size: ${theme.typography.pxToRem(60)};
    ${[theme.breakpoints.down('sm')]} {
      font-size: ${theme.typography.pxToRem(50)};
    }
    ${[theme.breakpoints.down('xs')]} {
      font-size: ${theme.typography.pxToRem(45)};
    }
  `}
`

const LinkedinIcon = styled(StyledIcon)`
  ${({ theme }) => `
    font-size: ${theme.typography.pxToRem(70)};
    ${[theme.breakpoints.down('sm')]} {
      font-size: ${theme.typography.pxToRem(60)};
    }
    ${[theme.breakpoints.down('xs')]} {
      font-size: ${theme.typography.pxToRem(55)};
    }
  `}
`

const Profile = () => {
  const img = useProfileImg()

  return (
    <Box py={{ xs: 1, sm: 3 }}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={6} sm={4} md={3}>
          <StyledImage alt="" ariaHidden="true" fluid={img} />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h2"
            component="h1"
            align="center"
            color="primary"
          >
            Mateus Félix
          </Typography>
        </Grid>
        <Grid
          item
          container
          justify="space-around"
          alignItems="center"
          xs={6}
          sm={4}
          lg={3}
        >
          <Grid item>
            <Link
              href="https://github.com/thebinaryfelix"
              rel="noopener referrer"
              target="_blank"
            >
              <GithubIcon
                Icon={Github}
                aria-hidden={false}
                alt="Github profile link"
              />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://www.linkedin.com/in/mateusfelix/"
              rel="noopener referrer"
              target="_blank"
            >
              <LinkedinIcon
                Icon={Linkedin}
                aria-hidden={false}
                alt="Linkedin profile link"
              />
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align="center"
            variant="h4"
            component="h2"
            color="primary"
          >
            Front-end Developer
          </Typography>
        </Grid>
        <Grid item xs={10} md={5}>
          <Typography variant="h6" align="center" component="p" color="primary">
            I build web applications and contribute to open-source projects
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile
