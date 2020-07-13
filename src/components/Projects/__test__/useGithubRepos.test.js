import { useStaticQuery } from 'gatsby'
import nodesFixtures from '../__fixtures__/projectsNodes'
import useGithubRepos from '../useGithubRepos'

describe('useGithubRepos', () => {
  useStaticQuery.mockReturnValue({
    github: {
      user: {
        pinnedItems: {
          nodes: nodesFixtures,
        },
      },
    },
  })
  test('should return formated repository names', () => {
    const repos = useGithubRepos()

    expect(repos[0].name).toBe('Project Name 1')
    expect(repos[1].name).toBe('Project Name 2')
    expect(repos[2].name).toBe('Project3')
  })
})
