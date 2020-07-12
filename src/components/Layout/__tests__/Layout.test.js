import { screen, render } from '@testing-library/react'
import { withProviders } from 'utils'
import React from 'react'
import BaseComponent from '../Layout'

const Layout = withProviders(BaseComponent)

describe('Layout', () => {
  test('should have 2 list items', () => {
    render(<Layout />)
    const listItems = screen.getAllByRole('listitem')

    expect(listItems.length).toBe(2)
    expect(screen.getByText('Mateus Félix')).toBeInTheDocument()
    expect(screen.getByText('about me')).toBeInTheDocument()
  })
})
