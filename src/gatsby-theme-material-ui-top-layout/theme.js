import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
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
