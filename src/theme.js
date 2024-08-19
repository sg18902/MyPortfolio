import { createTheme } from '@mui/material/styles';

// Light mode palette
const lightPalette = {
    mode: 'light',
    primary: {
        main: '#71C9CE', // You can pick one color as the main primary color
    },
    secondary: {
        main: '#A6E3E9', // Secondary color
    },
    background: {
        default: '#E3FDFD', // Page background color
        paper: '#CBF1F5', // Cards, Paper, etc.
    },
    text: {
        primary: '#1B262C', // Text color
        secondary: '#0F4C75',
    },
};

// Dark mode palette
const darkPalette = {
    mode: 'dark',
    primary: {
        main: '#000000',
    },
    secondary: {
        main: '#28282B',
    },
    background: {
        default: '#161414',
        paper: '#28282B',
    },
    text: {
        primary: '#ffffff',
        secondary: '#3282B8',
    },
};

const lightTheme = createTheme({
    palette: lightPalette,
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

const darkTheme = createTheme({
    palette: darkPalette,
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

export { lightTheme, darkTheme };
