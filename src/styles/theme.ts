import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f77f00',
    },
    secondary: {
      main: '#ff4a00',
    },
    background: {
      default: '#000814',
      paper: '#001d3d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e5e5e5',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
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
