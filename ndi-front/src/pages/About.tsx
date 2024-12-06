import React from 'react';
import { Box, Typography, Avatar, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import GitHubCalendar from 'react-github-calendar';


const StyledContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
}));

const About: React.FC = () => {

    const theme = useTheme();

    const contributors = [
        { name: 'Arthur Macdonald', github: 'Roirtur', role: 'Seul contributeur' },
    ];

    const participationData = {
        labels: ['Arthur Macdonald'],
        datasets: [
            {
                label: 'Contributions',
                data: [100],
                backgroundColor: [theme.palette.text.secondary],
            },
        ],
    };

    return (
        <StyledContainer>
            <Typography variant="h2" gutterBottom textAlign="center">
                Crédits
            </Typography>
            <Typography variant="h6" color="textSecondary" textAlign="center" mb={4}>
                Découvrez les personnes ayant contribué à ce projet. (Beaucoup de monde oui)
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {contributors.map((contributor, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box textAlign="center">
                            <Avatar
                                alt={contributor.name}
                                src={`https://github.com/${contributor.github}.png`}
                                sx={{ width: 100, height: 100, margin: '0 auto' }}
                            />
                            <Typography variant="h6" mt={2}>
                                {contributor.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                {contributor.role}
                            </Typography>
                            <Link href={`https://github.com/${contributor.github}`} target="_blank" rel="noopener" color={theme.palette.text.primary}>
                                @{contributor.github}
                            </Link>
                        </Box>

                        <Box width={"100%"} height={200} display={"flex"} alignContent={"center"} justifyContent={"center"} mt={3}>
                            <Bar data={participationData} />
                        </Box>
                        <Box width={"100%"} height={200} display={"flex"} alignContent={"center"} justifyContent={"center"} mt={3}>
                            <GitHubCalendar username={contributor.github} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </StyledContainer>
    );
};

export default About;