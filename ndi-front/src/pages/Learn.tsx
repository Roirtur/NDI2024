import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import OceanBodyModel from '../Components/OceanBodyModel';

const StyledContainer = styled(Box)`
    max-width: 800px;
    margin: auto;
`;

const Learn: React.FC = () => {
    return (
        <StyledContainer>
            <Box my={6}>
                <Typography variant="h4" gutterBottom textAlign="center">
                    Explorez les Parallèles
                </Typography>
                <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
                    Cliquez sur différentes parties du corps humain pour explorer leur rôle dans l’océan.
                </Typography>
                <OceanBodyModel />
            </Box>
        </StyledContainer>
    );
};

export default Learn;