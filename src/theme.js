import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ED45AE', // Orange for buttons and highlights
    },
    secondary: {
      main: '#333333', // Dark grey for text
    },
    background: {
      default: '#0C0C0C', // Dark background
      paper: '#E1E9E5', // Light grey for cards and sections
    },
    text: {
      primary: '#E1E9E5', // White for primary text
      secondary: '#E1E9E5', // White for secondary text
    },
  },
  typography: {
    fontFamily: 'Rubik, sans-serif',
    textTransform:'capitalize' ,
    h1: {
      fontSize: '2.5rem', // Main title font size
      fontWeight: 700,
      color: '#E1E9E5',
    },
    title: {
      fontSize: '4.5rem', // Main title font size
      fontWeight: 700,
      color: '#E1E9E5',
    },
    h2: {
      fontSize: '1.5rem', // Subtitle font size
      fontWeight: 600,
      color: '#E1E9E5',
    },
    h3: {
      fontSize: '1.25rem', // Section headers font size
      fontWeight: 600,
      color: '#E1E9E5',
    },
    body1: {
      fontSize: '1rem', // Default body text size
      fontWeight: 400,
      color: '#E1E9E5',
    },
    body2: {
      fontSize: '0.875rem', // Smaller body text
      fontWeight: 400,
      color: '#E1E9E5',
    },
    body3: {
      fontSize: '0.575rem', // Smaller body text
      fontWeight: 400,
      color: '#E1E9E5',
    },
    button: {
      fontSize: '1rem', // Button text size
      fontWeight: 600,
      textTransform: 'none', // Disable uppercase transformation
      color: '#E1E9E5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0', // Rounded corners for buttons
          padding: '10px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for cards
          padding: '20px',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: '20px',
          paddingBottom: '20px',
        },
      },
    },
  },
});

export default theme;
