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

const Meta = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(querySeo)

  const {
    defaultDescription,
    defaultImage,
    defaultTitle,
    siteUrl,
  } = site.siteMetadata

  const seoProps = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seoProps.title} titleTemplate="%s | Mateus Felix">
      <meta name="description" content={seoProps.description} />
      <meta name="image" content={seoProps.image} />
      {article ? <meta property="og:type" content="article" /> : null}

      {Object.keys(seoProps).map(key =>
        seoProps[key] ? (
          <meta key={key} property={`og:${key}`} content={seoProps[key]} />
        ) : null,
      )}
    </Helmet>
  )
}

export default Meta

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

Meta.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}
