import { render, screen } from '@testing-library/react'
import React from 'react'
import Footer from '../Footer'

describe('Footer', () => {
  test('should have correct text', () => {
    render(<Footer />)
    expect(screen.getByText('© 2020')).toBeInTheDocument()
  })
})
