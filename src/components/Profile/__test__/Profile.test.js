import React from 'react'
import { render, screen } from '@testing-library/react'
import { withProviders } from 'utils'
import { useStaticQuery } from 'gatsby'
import BaseComponent from '../Profile'

const fluidObject = {
  aspectRatio: 1,
  src: 'src-test',
  srcSet: 'srcSet-test',
  sizes: 'sizes-test',
}

const Profile = withProviders(BaseComponent)

describe('Profile', () => {
  test('show correct social links', () => {
    useStaticQuery.mockReturnValue({
      profileImage: {
        childImageSharp: {
          fluid: { ...fluidObject },
        },
      },
    })

    render(<Profile />)

    const socialLinks = screen.getAllByRole('link')
    expect(socialLinks[0].href).toBe('https://github.com/thebinaryfelix')
    expect(socialLinks[1].href).toBe('https://www.linkedin.com/in/mateusfelix/')

    const image = screen.getByRole('img')
    expect(image.sizes).toBe(fluidObject.sizes)
    expect(image.srcset).toBe(fluidObject.srcSet)
    expect(image.src).toBe(`http://localhost/${fluidObject.src}`)
  })
})
