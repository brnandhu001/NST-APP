// src/theme.js
import { createTheme } from '@mui/material/styles';


const palette= {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    sidebar: {
      mainBackground: '#051226', // Sidebar background color
      textColor:'#FFFFFF',
    },
  }

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif',
    fontSize:22,
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {  
          alignItems:"center",
          color: palette?.sidebar?.textColor,
          backgroundColor:palette?.sidebar?.mainBackground, // Apply your custom background color here
        },
      },
    },
  },
});

export default theme;
