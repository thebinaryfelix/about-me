import { Grid, Typography } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import React from 'react'
import Img from 'gatsby-image'
import ProfileDescription from 'components/ProfileDescription'

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

const NameContainer = styled(Grid)`
  ${({ theme }) => `
    margin: ${theme.spacing(5, 0)};

    ${[theme.breakpoints.up('sm')]} {
      margin-top: ${theme.spacing(10)}px;
    }
  `}
`

const Home = () => {
  const imgData = useStaticQuery(query)

  return (
    <Grid container>
      <Grid item container justify="center" xs={12}>
        <Grid item xs={5} md={3}>
          <Img
            alt=""
            title="Profile image"
            style={{ borderRadius: '50%' }}
            fluid={imgData.profileImage.childImageSharp.fluid}
          />
        </Grid>
        <NameContainer item xs={12}>
          <Typography
            variant="h1"
            align="center"
            color="secondary"
            style={{ fontWeight: 'bold' }}
          >
            Mateus Félix
          </Typography>
        </NameContainer>
        <Grid item container justify="center" xs={12}>
          <ProfileDescription />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
