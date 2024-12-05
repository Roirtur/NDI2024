// src/pages/NotFound.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFound: React.FC = () => {
    return (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">Page Not Found</Typography>
        </Box>
    );
};

export default NotFound;