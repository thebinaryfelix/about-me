/* eslint-disable import/prefer-default-export, react/prop-types */
const React = require('react')
const TopLayout = require('./TopLayout').default

exports.wrapRootElement = ({ element }) => <TopLayout>{element}</TopLayout>
