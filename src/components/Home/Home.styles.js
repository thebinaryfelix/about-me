import { makeStyles } from '@material-ui/styles'

export default makeStyles(
  () => ({
    root: {
      position: 'relative',
    },
    background: {
      position: 'absolute',
      margin: 0,
      zIndex: -1,
    },
    profilePicContainer: {
      paddingTop: 10,
    },
    profilePic: {
      minWidth: '167px',
      maxWidth: '100%',
      borderRadius: '50%',
      border: '2px solid transparent',
      backgroundOrigin: 'border-box',
      backgroundClip: 'content-box, border-box',
      backgroundImage:
        'linear-gradient(white, white), linear-gradient(120deg, #D1A603, #F8C404)',
    },
    personNameContainer: {
      marginTop: 40,
    },
  }),
  { name: 'Home' },
)
