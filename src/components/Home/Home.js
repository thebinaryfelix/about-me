import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import yellowRoad from './images/background.svg'
import profilePic from './images/profilePic.jpg'
import useStyles from './Home.styles'

const Home = () => {
  const classes = useStyles()

  return (
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
          <img
            alt="imagem de perfil"
            src={profilePic}
            className={classes.profilePic}
          />
        </Grid>
        <Grid item container className={classes.personNameContainer} xs={12}>
          <Grid item xs={6}>
            <Typography variant="h3" align="right" color="secondary">
              Mateus Félix
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
