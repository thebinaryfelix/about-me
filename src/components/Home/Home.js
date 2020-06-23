import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import profilePic from './images/profilePic.jpg'
import useStyles from './Home.styles'
import ProfileDescription from '../ProfileDescription'

const Home = () => {
  const classes = useStyles()

  return (
    <Container style={{ padding: 0 }}>
      <Grid container className={classes.root}>
        <Grid item container justify="center" xs={12}>
          <Grid item className={classes.profilePicContainer} xs={7} sm={4}>
            <img alt="" src={profilePic} className={classes.profilePic} />
          </Grid>
          <Grid item container className={classes.personNameContainer} xs={12}>
            <Grid item xs={12}>
              <Typography variant="h1" align="center" color="secondary">
                Mateus Félix
              </Typography>
            </Grid>
          </Grid>
          <ProfileDescription />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
