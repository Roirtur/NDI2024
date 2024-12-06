import React, { useEffect } from 'react';
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

    useEffect(() => {
        setValue(location.pathname);
    }, [location.pathname]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, position: 'sticky', top: 10, zIndex: 1000 }}>
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
                <Box sx={{ ml: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
                    <Link to="/home" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <img src="/wave.png" alt="Logo" style={{ height: 40 }} />
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
                        value="/learn"
                        icon={<LightbulbIcon sx={{ transition: 'all 0.2s', fontSize: value === '/learn' ? 30 : 24, color: value === '/learn' ? theme.palette.text.secondary : "#fff" }} />}
                        component={Link}
                        to="/learn"
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
                        value="/about"
                        icon={<HelpIcon sx={{ transition: 'all 0.2s', fontSize: value === '/about' ? 30 : 24, color: value === '/about' ? theme.palette.text.secondary : "#fff" }} />}
                        component={Link}
                        to="/about"
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