import { useStaticQuery, graphql } from 'gatsby'

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

const useProfileImg = () => {
  const { profileImage: data } = useStaticQuery(query)
  return data.childImageSharp.fluid
}

export default useProfileImg
