import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles/createTheme';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

interface StyledDotProps {
    theme?: Theme;
    position: 'left' | 'right';
}

const StyledDot = styled('div')<StyledDotProps>(({ theme, position }) => ({
    width: '10px',
    height: '10px',
    backgroundColor: theme?.palette.text.secondary,
    borderRadius: '50%',
    position: 'absolute',
    [position]: '-5px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
}));

interface StyledLineProps {
    theme?: Theme;
    position: 'left' | 'right';
}

const StyledLine = styled('div')<StyledLineProps>(({ theme, position }) => ({
    width: '59%',
    height: '2px',
    backgroundColor: theme?.palette.text.primary,
    position: 'absolute',
    top: '50%',
    [position]: -250,
    transform: 'translateY(-50%)',
    zIndex: 0,
}));

const StyledImage = styled('img')(({ theme }) => ({
    width: '100px',
    height: '100px',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
}));

const organs = [
    {
        name: 'Cerveau',
        image: '/brain.png',
        description: "Le cerveau représente les êtres vivants qui constituent sa \"conscience\". Il est crucial de préserver une grande variété d'espèces pour maintenir l'équilibre des écosystèmes marins et permettre aux générations future de découvrir des formes de vies peu communes.",
    },
    {
        name: 'Poumons',
        image: '/lungs.png',
        description: 'Les poumons illustrent les algues et la photosynthèse marine, qui transforment le CO2 en oxygène, essentielle pour la vie marine et terrestre. En effet, 50% de l\'oxygène que nous respirons provient de l\'océan.',
    },
    {
        name: 'Veines',
        image: '/veins.png',
        description: 'Les veines symbolisent les planctons et les courants marins qui transportent les nutriments et régulent la température à travers le globe, similaires aux veines humaines qui transportent le sang et les nutriments.',
    },
    {
        name: 'Yeux',
        image: '/eyes.png',
        description: "Les yeux représentent la clarté de l'eau et la visibilité sous-marine, essentielle pour la navigation et la survie des espèces marines, tout comme la vision est cruciale pour les humains.",
    },
    {
        name: 'Estomac',
        image: '/stomach.png',
        description: "L'estomac est lié au cycle des nutriments dans l'océan, où les éléments essentiels sont décomposés et redistribués dans les écosystèmes, similaire à la digestion des aliments dans le corps humain.",
    },
];

const OceanBodyModel: React.FC = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <Typography variant="h6" textAlign="center" mb={10} color={theme.palette.text.secondary}>
                Explorez les parallèles entre les organes humains et les océans!
            </Typography>
            {organs.map((organ, index) => (
                <Box key={index} display="flex" alignItems="center" mb={10} position="relative" width={isMobile ? "100vw" : "auto"} justifyContent={isMobile ? "center" : "auto"}>
                    {index % 2 === 0 ? (
                        <>
                            <Paper elevation={3} sx={{ padding: 2, flexGrow: 1, position: 'relative', maxWidth: isMobile ? '50vw' : '30vw', marginRight: isMobile ? 5 : 30 }}>
                                <Typography variant="h6">{organ.name}</Typography>
                                <Typography variant="body1">{organ.description}</Typography>
                                <StyledDot position={"right"} />
                                {!isMobile &&
                                    <StyledLine position="right" />
                                }
                            </Paper>
                            <StyledImage src={organ.image} alt={organ.name} />
                        </>
                    ) : (
                        <>
                            <StyledImage src={organ.image} alt={organ.name} />
                            <Paper elevation={3} sx={{ padding: 2, flexGrow: 1, position: 'relative', maxWidth: isMobile ? '50vw' : '30vw', marginLeft: isMobile ? 5 : 30 }}>
                                <Typography variant="h6">{organ.name}</Typography>
                                <Typography variant="body1">{organ.description}</Typography>
                                <StyledDot position={"left"} />
                                {!isMobile &&
                                    <StyledLine position="left" />
                                }
                            </Paper>
                        </>
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default OceanBodyModel;