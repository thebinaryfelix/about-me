import { render, screen } from '@testing-library/react'
import { withProviders } from 'utils'
import React from 'react'
import BaseComponent from '../ProfileDescription'

const ProfileDescription = withProviders(BaseComponent)

describe('ProfileDescription', () => {
  test('should have LinkedIn and GitHub links', () => {
    render(<ProfileDescription />)
    const links = screen.getAllByRole('link')

    expect(links.length).toBe(2)
    expect(links[0].href).toMatch('https://github.com/thebinaryfelix')
    expect(links[1].href).toMatch('https://www.linkedin.com/in/mateusfelix/')
  })
})
