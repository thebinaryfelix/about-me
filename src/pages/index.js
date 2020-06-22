import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import yellowRoad from '../images/background.svg'
import profilePic from '../images/profilePic.jpg'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  background: {
    position: 'absolute',
    margin: 0,
    zIndex: -1,
  },
  profilePicContainer: {
    paddingTop: 10,
  },
  profilePic: {
    minWidth: '167px',
    borderRadius: '50%',
    border: '2px solid transparent',
    backgroundOrigin: 'border-box',
    backgroundClip: 'content-box, border-box',
    backgroundImage:
      'linear-gradient(white, white), linear-gradient(120deg, #D1A603, #F8C404)',
  },
  personNameContainer: {
    marginTop: 40,
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <>
      <div style={{ height: '40px', width: '100%' }} />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <img
            alt=""
            width="100%"
            src={yellowRoad}
            className={classes.background}
          />
        </Grid>
        <Grid item container justify="center" xs={12} >
          <Grid item className={classes.profilePicContainer} xs={7}>
            <img
              alt="imagem de perfil"
              src={profilePic}
              className={classes.profilePic}
            />
          </Grid>
          <Grid item container className={classes.personNameContainer} xs={12}>
            <Grid item xs={6}>
              <Typography variant="h3" align="right">Mateus Félix</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default IndexPage
