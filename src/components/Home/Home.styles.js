import { makeStyles } from '@material-ui/styles'

export default makeStyles(
  theme => {
    const primaryColor = theme.palette.primary.main
    const secondaryColor = theme.palette.secondary.main

    return {
      root: {
        minWidth: 320,
        position: 'relative',
        paddingBottom: theme.spacing(3),
      },
      background: {
        position: 'absolute',
        margin: 0,
        zIndex: -1,
      },
      profilePicContainer: {
        paddingTop: theme.spacing(1),
      },
      profilePic: {
        minWidth: '167px',
        maxWidth: '100%',
        borderRadius: '50%',
        border: `${theme.shape.borderRadius * 0.5}px solid transparent`,
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box',
        backgroundImage: `linear-gradient(white, white), linear-gradient(120deg, ${primaryColor}, ${secondaryColor})`,
      },
      personNameContainer: {
        marginTop: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          marginTop: theme.spacing(10),
        },
      },
    }
  },
  { name: 'Home' },
)
