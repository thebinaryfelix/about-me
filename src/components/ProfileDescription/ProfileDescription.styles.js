import { makeStyles } from '@material-ui/styles'
import backgroundXs from './images/backgroundXs.svg'
import backgroundSm from './images/backgroundSm.svg'

export default makeStyles(
  theme => {
    const secondaryColor = theme.palette.secondary.main

    return {
      root: {
        maxWidth: 330,
        margin: theme.spacing(2),
        padding: theme.spacing(3),
        textAlign: 'right',
        backgroundSize: 'contain',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${backgroundXs})`,
        [theme.breakpoints.up('sm')]: {
          backgroundImage: `url(${backgroundSm})`,
        },
      },
      githubIcon: {
        fontSize: theme.typography.pxToRem(40),
        color: secondaryColor,
      },
      linkedinIcon: {
        fontSize: theme.typography.pxToRem(50),
        color: secondaryColor,
      },
    }
  },
  { name: 'ProfileDescription' },
)
