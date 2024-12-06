import React from 'react';
import { Box, Typography, Grid, Button, Card, CardContent, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const StyledContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
}));

const Home: React.FC = () => {

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <StyledContainer>
            <Box sx={{
                maxWidth: 1200,
                margin: '0 auto',
                textAlign: 'center',
                [theme.breakpoints.down('sm')]: {
                    padding: theme.spacing(2),
                },
            }}>
                <Box textAlign="center" mb={4} mt={isMobile ? 0 : 5}>
                    <Typography variant="h2" gutterBottom>
                        Et si l’Océan était un corps humain ?
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        Découvrez les fascinantes similitudes entre les systèmes humains et océaniques et pourquoi protéger
                        l’océan revient à protéger la vie elle-même.
                    </Typography>
                </Box>

                {/* Grid Section for Educational Highlights */}
                <Box my={8}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{
                                minHeight: '20vh',
                            }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        🌊 Courants Marins
                                    </Typography>
                                    <Typography color={theme.palette.text.secondary}>
                                        Tel le cœur humain qui pompe le sang dans le corps, les courants marins régulent le climat
                                        mondial et redistribuent sa chaleur.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{
                                minHeight: '20vh',
                            }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        🌿 Photosynthèse
                                    </Typography>
                                    <Typography color={theme.palette.text.secondary}>
                                        Elle est l'organe respiratoire de l'océan, produisant une grande partie de l'oxygène que nous respirons avec nos poumons.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>

                            <Card sx={{
                                minHeight: '20vh',
                            }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        🦠 Plancton
                                    </Typography>
                                    <Typography color={theme.palette.text.secondary}>
                                        Semblable à nos globules rouges, le plancton régule l'oxygène dans l'océan et est essentiel à la vie marine.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/* Call to Action */}
                <Box textAlign="center" mt={8}>
                    <Typography variant="h5" gutterBottom>
                        Prêt(e) à plonger plus profondément ?
                    </Typography>
                    <Typography variant="body1" color="textSecondary" mb={2}>
                        Découvrez comment nos actions collectives peuvent protéger les océans et garantir un avenir durable.
                    </Typography>
                    <Button
                        component={Link}
                        to="/learn"
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                        Explorer les Détails
                    </Button>
                </Box>
            </Box>
        </StyledContainer>
    );
};

export default Home;
