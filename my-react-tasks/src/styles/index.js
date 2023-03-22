import { createTheme, styled } from '@mui/material';
import 'typeface-montserrat';

export const Colors = {
  primary: "#00adb5",
  secondary: "#00c7c0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
};

const drawerWidth = 240;

const overrides = {
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    success: {
      main: Colors.success,
    },
    info: {
      main: Colors.info,
    },
    warning: {
      main: Colors.warning,
    },
    error: {
      main: Colors.danger,
    },
    background: {
      default: Colors.body_bg,
      paper: Colors.white,
      black: Colors.black,
      gray: Colors.dark,
      muted: Colors.muted,
      darkgrey: Colors.shaft,
    },
    text: {
      primary: Colors.inverse,
      secondary: Colors.light,
      disabled: Colors.dove_gray,
      hint: Colors.muted,
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontSize: '48px',
      fontWeight: 'bold',
      lineHeight: '56px',
    },
    h2: {
      fontSize: '36px',
      fontWeight: 'bold',
      lineHeight: '44px',
    },
    h3: {
      fontSize: '24px',
      fontWeight: 'bold',
      lineHeight: '32px',
    },
    h4: {
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: '24px',
    },
    h5: {
      fontSize: '16px',
      fontWeight: 'bold',
      lineHeight: '24px',
    },
    body1: {
      fontSize: '18px',
      lineHeight: '24px',
      color: Colors.white
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    subtitle1: {
      fontSize: '18px',
      lineHeight: '24px',

    },
    subtitle2: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    caption: {
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: drawerWidth,
          backgroundColor: Colors.primary,
          padding: 20,
        },
      },
      variants: [
        {
          props: { variant: 'styled' },
          style: {
            '& .MuiDrawer-paper': {
              backgroundColor: Colors.secondary,
            },
          },
        },
      ],
    },
  },
};

const StyledDrawer = styled('div')({
  '& .MuiDrawer-paper': {
    backgroundColor: Colors.secondary,
  },
});

const theme = createTheme(overrides);

export { overrides, StyledDrawer}
export default theme;




