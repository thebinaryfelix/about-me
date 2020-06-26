const React = require('react')

const gatsby = jest.requireActual('gatsby')

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
  Link: jest.fn().mockImplementation((
    {
      // invalid props for an <a> tag
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }, // import other valid props
  ) =>
    React.createElement('a', {
      ...rest,
      href: to,
    }),
  ),
}
