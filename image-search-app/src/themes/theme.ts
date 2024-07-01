import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
            fontSize: '30px',
            fontWeight: 600,
            lineHeight: '38px',
        },
        h2: {
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '24px',
        },
        h3: {
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '28px',
            color:'#00000',
        },
        body1: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
        },
    },
});

export default theme;