import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff8c00',
    },
    secondary: {
      main: '#ff6f00',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#fff',
      secondary: '#bdbdbd',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '0.35px',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '0.35px',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
});

export default darkTheme;
