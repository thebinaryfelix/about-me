import { Box, Container, Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import yellowRoad from './images/background.svg'
import profilePic from './images/profilePic.jpg'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import useStyles from './Home.styles'

const Home = () => {
  const classes = useStyles()

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <img
            alt=""
            width="100%"
            src={yellowRoad}
            className={classes.background}
          />
        </Grid>
        <Grid item container justify="center" xs={12}>
          <Grid item className={classes.profilePicContainer} xs={7}>
            <img alt="" src={profilePic} className={classes.profilePic} />
          </Grid>
          <Grid item container className={classes.personNameContainer} xs={12}>
            <Grid item xs={6}>
              <Typography variant="h3" align="right" color="secondary">
                Mateus Félix
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justify="flex-end"
            className={classes.profileDescription}
            xs={12}
          >
            <Grid item xs={8}>
              <Box
                width={1}
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Box mr={2}>
                  <Link
                    href="https://github.com/thebinaryfelix"
                    target="_blank"
                  >
                    <GithubIcon className={classes.githubIcon} />
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="https://www.linkedin.com/in/mateusfelix/"
                    target="_blank"
                  >
                    <LinkedinIcon className={classes.linkedinIcon} />
                  </Link>
                </Box>
              </Box>
              <Box my={2}>
                <Typography variant="h4" color="secondary">
                  Web Developer
                </Typography>
              </Box>
              <Typography variant="h5" component="p" color="secondary">
                I build web applications and contribute to open-source projects
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
