import { Box, Grid, Typography } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { useBreakpoint } from 'utils'
import ProfileDescription from 'components/ProfileDescription'
import useStyles from './Home.styles'

const imgSizes = {
  xs: 200,
  sm: 250,
  md: 300,
  lg: 300,
  xl: 300,
}

const query = graphql`
  query {
    imgOrigin: file(relativePath: { eq: "profilePic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Home = () => {
  const profilePic = useStaticQuery(query)

  const breakpoint = useBreakpoint()
  const [profileImageWidth, setProfileImageWidth] = useState(
    imgSizes[breakpoint],
  )
  const classes = useStyles({
    profileImageWidth,
    imgSrc: profilePic.imgOrigin.childImageSharp.fluid.src,
  })

  useEffect(() => {
    setProfileImageWidth(imgSizes[breakpoint] || profileImageWidth)
  }, [breakpoint])

  return (
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
  )
}

export default Home
