import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HelpIcon from '@mui/icons-material/Help';
import { Link, useLocation } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import ThemeToggle from '../ThemesHandlers/ThemeToggleButton';

const NavBar: React.FC = () => {
    const location = useLocation();
    const [value, setValue] = React.useState(location.pathname);
    const theme = useTheme();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '80%',
                    maxWidth: 600,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Box sx={{ ml: 2 }}>
                    <Link to="/home">
                        <img src="/path/to/logo.png" alt="Logo" style={{ height: 40 }} />
                    </Link>
                </Box>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{ flexGrow: 1 }}
                >
                    <BottomNavigationAction
                        value="/home"
                        icon={<HomeIcon sx={{ transition: 'all 0.2s', fontSize: value === '/home' ? 30 : 24, color: value === '/home' ? theme.palette.text.secondary : "#fff" }} />}
                        component={Link}
                        to="/home"
                        sx={{
                            minWidth: 'auto',
                            maxWidth: 56,
                            mr: 4, 
                            transition: 'all 0.2s',
                            '&:hover': {
                                color: theme.palette.primary.main,
                                transform: 'scale(1.1)',
                            },
                        }}
                    />
                    <BottomNavigationAction
                        value="/search"
                        icon={<LightbulbIcon sx={{ transition: 'all 0.2s', fontSize: value === '/search' ? 30 : 24, color: value === '/search' ? theme.palette.text.secondary : "#fff" }} />}
                        component={Link}
                        to="/search"
                        sx={{
                            minWidth: 'auto',
                            maxWidth: 56,
                            mr: 4,
                            transition: 'all 0.2s',
                            '&:hover': {
                                color: theme.palette.primary.main,
                                transform: 'scale(1.1)',
                            },
                        }}
                    />
                    <BottomNavigationAction
                        value="/profile"
                        icon={<HelpIcon sx={{ transition: 'all 0.2s', fontSize: value === '/profile' ? 30 : 24, color: value === '/profile' ? theme.palette.text.secondary : "#fff" }} />}
                        component={Link}
                        to="/profile"
                        sx={{
                            minWidth: 'auto',
                            maxWidth: 56,
                            transition: 'all 0.2s',
                            '&:hover': {
                                color: theme.palette.primary.main,
                                transform: 'scale(1.1)',
                            },
                        }}
                    />
                </BottomNavigation>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                    <ThemeToggle />
                </Box>
            </Box>
        </Box>
    );
};

export default NavBar;