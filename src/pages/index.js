import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import yellowRoad from '../images/background.svg'
import profilePic from '../images/profilePic.jpg'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
  },
  background: {
    margin: 0,
    position: 'absolute',
    zIndex: -1,
  },
  profilePic: {
    minWidth: '167px',
    borderRadius: '50%',
  },
}))

const IndexPage = () => {
  const classes = useStyles()

  return (
    <>
      <div style={{ height: '40px', width: '100%' }} />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <img width="100%" src={yellowRoad} className={classes.background} />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Grid item xs={4}>
            <img src={profilePic} className={classes.profilePic} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default IndexPage
