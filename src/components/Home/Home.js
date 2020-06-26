import { Grid, Typography } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import ProfileDescription from 'components/ProfileDescription'
import useStyles from './Home.styles'

const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "profile.webp" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Home = () => {
  const imgData = useStaticQuery(query)
  const classes = useStyles({})

  return (
    <Grid container className={classes.root}>
      <Grid item container justify="center" xs={12}>
        <Grid item xs={5} md={3}>
          <Img
            alt=""
            title="Profile image"
            style={{ borderRadius: '50%' }}
            fluid={imgData.profileImage.childImageSharp.fluid}
          />
        </Grid>
        <Grid item xs={12} className={classes.nameContainer}>
          <Typography
            variant="h1"
            align="center"
            color="secondary"
            style={{ fontWeight: 'bold' }}
          >
            Mateus Félix
          </Typography>
        </Grid>
        <Grid item container justify="center" xs={12}>
          <ProfileDescription />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
