import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  spacing: 8,
  typography: {
    fontSize: 12,
    fontFamily: ['Comfortaa', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      light: '#fff54f',
      main: '#ffc300',
      dark: '#c79300',
      contrastText: '#000',
    },
    secondary: {
      light: '#c14eff',
      main: '#8800ff',
      dark: '#4b00ca',
      contrastText: '#fff',
    },
    background: {
      default: '#FFFFFF',
    },
  },
})

theme.typography.h1 = {
  fontWeight: 'normal',
  fontSize: '2.0rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '3.9rem',
  },
}

theme.typography.h4 = {
  fontSize: '1.3rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.1rem',
  },
}

theme.typography.h5 = {
  fontSize: '1.0rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
}

export default theme
