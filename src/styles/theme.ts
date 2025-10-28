import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff4a00',
    },
    secondary: {
      main: '#ff4a00',
    },
    background: {
      default: '#fafafa',
      paper: '#f7eae1',
    },
    text: {
      primary: '#252525',
      secondary: '#656565',
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

export default lightTheme;
