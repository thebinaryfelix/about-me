import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

const querySeo = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
      }
    }
  }
`

const Meta = ({ title, description }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(querySeo)

  const { defaultDescription, defaultTitle, siteUrl } = site.siteMetadata

  const seoProps = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/socialBanner.webp`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seoProps.title}>
      <meta name="description" content={seoProps.description} />
      {Object.keys(seoProps).map(key => (
        <meta key={key} property={`og:${key}`} content={seoProps[key]} />
      ))}
    </Helmet>
  )
}

export default Meta

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

Meta.defaultProps = {
  title: null,
  description: null,
}
