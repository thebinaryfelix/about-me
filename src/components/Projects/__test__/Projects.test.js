/* eslint-disable no-underscore-dangle */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { withProviders } from 'utils'
import { useStaticQuery } from 'gatsby'
import nodesFixtures from '../__fixtures__/projectsNodes'
import BaseComponent from '../Projects'

const Projects = withProviders(BaseComponent)

describe('Profile', () => {
  test('render with projects cards hidden', async () => {
    useStaticQuery.mockReturnValue({
      github: {
        user: {
          pinnedItems: {
            nodes: nodesFixtures,
          },
        },
      },
    })

    render(<Projects />)

    const animatedProjects = screen.getAllByTestId(/projects-cards/)

    animatedProjects.forEach(project => {
      expect(project.style._values).toEqual(
        expect.objectContaining({
          opacity: '0',
          visibility: 'hidden',
        }),
      )
    })
  })

  test.todo('show projects cards on scroll')
})
