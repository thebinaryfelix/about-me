import { render, waitFor } from '@testing-library/react'
import { withProviders } from 'utils'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import BaseComponent from '../Meta'

const Meta = withProviders(BaseComponent)

const siteMetadataMock = {
  defaultDescription: 'test description',
  defaultImage: 'test image',
  defaultTitle: 'test title | Mateus Felix',
}

describe('Meta', () => {
  beforeAll(() => {
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: siteMetadataMock,
      },
    }))
  })

  test('should have a title', async () => {
    render(<Meta />)
    await waitFor(() =>
      expect(document.title).toBe(siteMetadataMock.defaultTitle),
    )
  })
})
