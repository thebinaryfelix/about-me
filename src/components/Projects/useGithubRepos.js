import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    github {
      user(login: "thebinaryfelix") {
        pinnedItems(first: 6) {
          nodes {
            ... on GitHub_Repository {
              name
              url
              description
            }
          }
        }
      }
    }
  }
`

const normalizeRepoName = name =>
  name
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

const useGithubRepos = () => {
  const { github: data } = useStaticQuery(query)

  return data.user.pinnedItems.nodes.map(repoInfo => ({
    ...repoInfo,
    name: normalizeRepoName(repoInfo.name),
  }))
}

export default useGithubRepos
