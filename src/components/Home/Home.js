import { Box, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './Home.styles'
import ProfileDescription from '../ProfileDescription'

const profileImageWidth = 200

const Home = () => {
  const classes = useStyles({ profileImageWidth })

  return (
    <Container style={{ padding: 0 }}>
      <Grid container className={classes.root}>
        <Grid item container justify="center" xs={12}>
          <Box
            width={profileImageWidth}
            height={profileImageWidth}
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            className={classes.profilePicContainer}
          />
          <Grid item className={classes.personNameContainer} xs={12}>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                align="center"
                color="secondary"
                style={{ fontWeight: 'bold' }}
              >
                Mateus Félix
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify="center" xs={12}>
            <ProfileDescription />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
