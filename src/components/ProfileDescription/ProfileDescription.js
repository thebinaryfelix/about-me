import { Box, Link, Typography } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'
import GithubIcon from '@material-ui/icons/GitHub'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import useStyles from './ProfileDescription.styles'

const ProfileDescription = () => {
  const classes = useStyles()

  return (
    <Box
      p={{ xs: 5, sm: 7 }}
      maxWidth={{ xs: 350, sm: 500 }}
      textAlign="right"
      className={classes.root}
    >
      <Box
        width={1}
        mb={{ sm: 2 }}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box mr={1}>
          <Link href="https://github.com/thebinaryfelix" target="_blank">
            <GithubIcon
              className={clsx([classes.iconColor, classes.githubIcon])}
            />
          </Link>
        </Box>
        <Box>
          <Link href="https://www.linkedin.com/in/mateusfelix/" target="_blank">
            <LinkedinIcon
              className={clsx([classes.iconColor, classes.linkedinIcon])}
            />
          </Link>
        </Box>
      </Box>
      <Box my={1}>
        <Typography variant="h4" color="secondary">
          Web Developer
        </Typography>
      </Box>
      <Typography variant="h5" component="p" color="secondary">
        I build web applications and contribute to open-source projects
      </Typography>
    </Box>
  )
}

export default ProfileDescription
