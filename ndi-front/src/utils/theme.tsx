import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#071952',
        },
        secondary: {
            main: '#86B6F6',
        },
        background: {
            default: '#e2ecff',
            paper: '#7AB2D3'
        },
        text: {
            primary: '#201E43',
            secondary: '#071952',
        }
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#032D39',
        },
        secondary: {
            main: '#0D4848',
        },
        background: {
            paper: '#071932',
            default: '#082540',
        },
        text: {
            primary: '#fff',
            secondary: '#86B6F6'
        }
    },
});