import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#B4D4FF',
        },
        secondary: {
            main: '#86B6F6',
        },
        background: {
            default: '#B4D4FF',
            paper: '#176B87'
        },
        text: {
            primary: '#0E0E0E',
            secondary: '#071932',
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