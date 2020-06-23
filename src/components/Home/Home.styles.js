import { makeStyles } from '@material-ui/styles'
import profilePic from './images/profilePic.jpg'

const profileImgBorder = 5

export default makeStyles(
  theme => {
    const primaryColor = theme.palette.primary.main
    const secondaryColor = theme.palette.secondary.main

    return {
      '@keyframes spin': {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(720deg)',
        },
      },
      root: {
        minWidth: 320,
        position: 'relative',
      },
      background: {
        position: 'absolute',
        margin: 0,
        zIndex: -1,
      },
      profilePicContainer: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${profilePic})`,
        '&:before': {
          zIndex: -1,
          content: '""',
          position: 'absolute',
          width: ({ profileImageWidth }) =>
            profileImageWidth + profileImgBorder,
          height: ({ profileImageWidth }) =>
            profileImageWidth + profileImgBorder,
          borderRadius: '50%',
          animation: '$spin linear 3s infinite',
          backgroundOrigin: 'border-box',
          backgroundImage: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`,
        },
      },
      personNameContainer: {
        margin: theme.spacing(5, 0),
        [theme.breakpoints.up('sm')]: {
          marginTop: theme.spacing(10),
        },
      },
    }
  },
  { name: 'Home' },
)
