import { Box, Grid, Link, Typography } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Github from '@material-ui/icons/GitHub'
import Linkedin from '@material-ui/icons/LinkedIn'

const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "profile.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

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
    font-size: ${theme.typography.pxToRem(50)};
    ${[theme.breakpoints.up('sm')]} {
      font-size: ${theme.typography.pxToRem(70)};
    }
  `}
`

const LinkedinIcon = styled(StyledIcon)`
  ${({ theme }) => `
    font-size: ${theme.typography.pxToRem(65)};
    ${[theme.breakpoints.up('sm')]} {
      font-size: ${theme.typography.pxToRem(85)};
    }
  `}
`

const Home = () => {
  const imgData = useStaticQuery(query)

  return (
    // Box to handle negative margin on Grid
    <Box py={{ xs: 1, sm: 3 }} px={3}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={5} sm={4} md={3}>
          <StyledImage
            alt=""
            title="Profile image"
            fluid={imgData.profileImage.childImageSharp.fluid}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1" align="center" color="primary">
            Mateus Félix
          </Typography>
        </Grid>
        <Grid
          item
          container
          justify="space-around"
          alignItems="center"
          xs={6}
          sm={5}
          md={4}
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
        <Grid item xs={8} md={5}>
          <Typography variant="h5" align="center" component="p" color="primary">
            I build web applications and contribute to open-source projects
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
