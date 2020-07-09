import { Box, Link, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Github from '@material-ui/icons/GitHub'
import Linkedin from '@material-ui/icons/LinkedIn'
import bgYellow from 'assets/images/background.svg'

const StyledProfileDescription = styled(Box)`
  ${({ theme }) => `
      background-size: contain;
      background-position: right;
      background-repeat: no-repeat;
      background-image: url(${bgYellow});

      ${[theme.breakpoints.up('sm')]} {
        background-size: contain;
      }
    }
  `}
`

const GithubIcon = styled(Github)`
  ${({ theme }) => `
    color: ${theme.palette.secondary.main};
    font-size: ${theme.typography.pxToRem(40)};
    
    ${[theme.breakpoints.up('sm')]} {
      font-size: ${theme.typography.pxToRem(50)};
    }

    transition: ${theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.short,
    })};
    
    &:hover {
      transform: translateY(-5px);
    }
  `}
`

const LinkedinIcon = styled(Linkedin)`
  ${({ theme }) => `
    color: ${theme.palette.secondary.main};
    font-size: ${theme.typography.pxToRem(50)};
    
    ${[theme.breakpoints.up('sm')]} {
      font-size: ${theme.typography.pxToRem(60)};
    }

    transition: ${theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.short,
    })};
    
    &:hover {
      transform: translateY(-5px);
    }
  `}
`

const ProfileDescription = () => {
  return (
    <StyledProfileDescription
      p={{ xs: 5, sm: 7 }}
      maxWidth={{ xs: 350, sm: 500 }}
      textAlign="right"
    >
      <Box
        width={1}
        mb={{ sm: 2 }}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box mr={1}>
          <Link
            href="https://github.com/thebinaryfelix"
            rel="noopener referrer"
            target="_blank"
          >
            <GithubIcon aria-hidden={false} alt="Github profile link" />
          </Link>
        </Box>
        <Box>
          <Link
            href="https://www.linkedin.com/in/mateusfelix/"
            rel="noopener referrer"
            target="_blank"
          >
            <LinkedinIcon aria-hidden={false} alt="Linkedin profile link" />
          </Link>
        </Box>
      </Box>
      <Box my={1}>
        <Typography variant="h4" component="h2" color="secondary">
          Web Developer
        </Typography>
      </Box>
      <Typography variant="h5" component="p" color="secondary">
        I build web applications and contribute to open-source projects
      </Typography>
    </StyledProfileDescription>
  )
}

export default ProfileDescription
