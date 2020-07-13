/* eslint-disable no-underscore-dangle */
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { withProviders } from 'utils'
import { useStaticQuery } from 'gatsby'
import nodesFixtures from '../__fixtures__/projectsNodes'
import BaseComponent from '../Projects'

const Projects = withProviders(BaseComponent)

describe('Profile', () => {
  test('show correct social links', async () => {
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

    const animatedProjects = screen.getAllByTestId(/projects-animated-div/)

    animatedProjects.forEach(project => {
      expect(project.style._values).toEqual({
        opacity: '0',
      })
    })

    await waitFor(() => {
      animatedProjects.forEach(project => {
        expect(project.style._values).toEqual({
          opacity: '1',
        })
      })
    })
  })
})
