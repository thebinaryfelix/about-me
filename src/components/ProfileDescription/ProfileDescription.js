import { Box, Link, Typography } from '@material-ui/core'
import React from 'react'
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'
import useStyles from './ProfileDescription.styles'

const ProfileDescription = () => {
  const classes = useStyles()

  return (
    <Box p={5} maxWidth={350} textAlign="right" className={classes.root}>
      <Box
        width={1}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box mr={1}>
          <Link href="https://github.com/thebinaryfelix" target="_blank">
            <GithubIcon className={classes.githubIcon} />
          </Link>
        </Box>
        <Box>
          <Link href="https://www.linkedin.com/in/mateusfelix/" target="_blank">
            <LinkedinIcon className={classes.linkedinIcon} />
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
