import { makeStyles } from '@material-ui/styles'
import backgroundXs from './images/backgroundXs.svg'

export default makeStyles(
  theme => {
    const secondaryColor = theme.palette.secondary.main

    return {
      root: {
        backgroundSize: 'contain',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${backgroundXs})`,
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
