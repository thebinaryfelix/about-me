import { Box, Typography } from '@material-ui/core'
import React from 'react'

const Footer = () => (
  <Box
    mt={4}
    mb={1}
    width={1}
    display="flex"
    justifyContent="center"
    component="footer"
  >
    <Typography variant="caption" color="primary">
      © 2020
    </Typography>
  </Box>
)

export default Footer
