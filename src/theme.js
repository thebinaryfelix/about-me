import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  spacing: 8,
  typography: {
    fontSize: 16,
    fontFamily: ['Comfortaa', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      light: '#fff54f',
      main: '#ffffff',
      dark: '#c79300',
      contrastText: '#8800ff',
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
  fontSize: '4.0rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '3.5rem',
  },
}

theme.typography.h2 = {
  fontWeight: 'normal',
  fontSize: '3.4rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.9rem',
  },
}

theme.typography.h3 = {
  fontSize: '2.8rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.3rem',
  },
}

theme.typography.h4 = {
  fontSize: '2.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}

theme.typography.h5 = {
  fontSize: '1.8rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
  },
}

theme.typography.h6 = {
  fontSize: '1.6rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.3rem',
  },
}

theme.typography.subtitle1 = {
  fontSize: '1.0rem',
  fontWeight: 'normal',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}

theme.typography.caption = {
  fontSize: '0.8rem',
}

theme.typography.body1 = {
  fontSize: '1.2rem',
}

export default theme
