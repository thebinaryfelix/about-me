import { makeStyles } from '@material-ui/styles'
import background from 'assets/images/background.svg'

export default makeStyles(
  theme => {
    const secondaryColor = theme.palette.secondary.main

    return {
      root: {
        backgroundSize: 'contain',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${background})`,
        [theme.breakpoints.up('sm')]: {
          backgroundSize: 'contain',
        },
      },
      iconColor: {
        color: secondaryColor,
      },
      githubIcon: {
        fontSize: theme.typography.pxToRem(40),
        [theme.breakpoints.up('sm')]: {
          fontSize: theme.typography.pxToRem(50),
        },
      },
      linkedinIcon: {
        fontSize: theme.typography.pxToRem(50),
        [theme.breakpoints.up('sm')]: {
          fontSize: theme.typography.pxToRem(60),
        },
      },
    }
  },
  { name: 'ProfileDescription' },
)
