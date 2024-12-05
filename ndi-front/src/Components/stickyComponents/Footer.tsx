import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTheme } from '@mui/material/styles';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: theme.palette.background.paper,
                textAlign: 'center',
            }}
        >
            <Typography variant="body1" color="#eee">
                © {currentYear} Roirtur - Aucun droits réservés.
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Réalisé par Arthur Macdonald pour la nuit de l'info 2024.
            </Typography>
            <Box sx={{ mt: 1 }}>
                <IconButton
                    component={Link}
                    href="https://github.com/Roirtur"
                    target="_blank"
                    rel="noopener"
                    aria-label="GitHub"
                    sx={{ color: '#fff' }}
                >
                    <GitHubIcon />
                </IconButton>
                <IconButton
                    component={Link}
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener"
                    aria-label="LinkedIn"
                    sx={{ color: '#fff' }}
                >
                    <LinkedInIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;