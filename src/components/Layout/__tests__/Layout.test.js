import { screen, render } from '@testing-library/react'
import React from 'react'
import Layout from '../Layout'

describe('Layout', () => {
  test('should have 2 list items', () => {
    render(<Layout />)
    const listItems = screen.getAllByRole('listitem')

    expect(listItems.length).toBe(2)
    expect(screen.getByText('Mateus Félix')).toBeInTheDocument()
    expect(screen.getByText('about me')).toBeInTheDocument()
  })
})
