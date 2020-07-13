import React from 'react'
import { Box } from '@material-ui/core'
import { Profile, Layout, Meta, Projects } from '../components'

const IndexPage = () => (
  <Layout>
    <Meta title="About | Mateus Felix" />
    {/* Apply padding to handle negative margin on Grids */}
    <Box px={3}>
      <Profile />
      <Projects />
    </Box>
  </Layout>
)

export default IndexPage
