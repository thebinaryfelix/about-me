import { makeStyles } from '@material-ui/styles'

export default makeStyles(
  theme => ({
    root: {
      minWidth: 320,
      position: 'relative',
    },
    background: {
      position: 'absolute',
      margin: 0,
      zIndex: -1,
    },
    nameContainer: {
      margin: theme.spacing(5, 0),
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
      },
    },
  }),
  { name: 'Home' },
)
