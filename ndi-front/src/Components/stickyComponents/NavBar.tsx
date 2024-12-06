import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import HelpIcon from '@mui/icons-material/Help';
import { Link, useLocation } from 'react-router-dom';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import ThemeToggle from '../ThemesHandlers/ThemeToggleButton';

const NavBar: React.FC = () => {
    const theme = useTheme();
    const location = useLocation();
    const [value, setValue] = React.useState(location.pathname);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    React.useEffect(() => {
        setValue(location.pathname);
    }, [location.pathname]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: isMobile ? 0 : 2, position: 'sticky', top: isMobile ? 0 : 10, zIndex: 1000 }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: 600,
                    bgcolor: 'background.paper',
                    borderRadius: isMobile ? 0 : 2,
                    boxShadow: 3,
                    flexDirection: isMobile ? 'column' : 'row',
                    padding: isMobile ? 1 : 0,
                }}
            >
                {!isMobile && (
                    <Box sx={{ ml: 2, display: 'flex', alignItems: 'center', height: '100%' }}>
                        <Link to="/home" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <img src="/wave.png" alt="Logo" style={{ height: 40 }} />
                        </Link>
                    </Box>
                )}
                {isMobile && (
                    <Box sx={{
                        position: "absolute",
                        top: "25%",
                        left: 25,
                    }}>
                        <Link to="/home" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                            <img src="/wave.png" alt="Logo" style={{ height: 40 }} />
                        </Link>
                    </Box>
                )}
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{ flexGrow: 1, flexDirection: 'row' }}
                >
                    <BottomNavigationAction
                        value="/home"
                        icon={<HomeIcon sx={{
                            transition: 'all 0.2s', fontSize: value === '/home' ? 30 : 24, color: value === '/home' ? theme.palette.text.secondary : "#fff",
                            '&:hover': {
                                color: theme.palette.primary.main,
                                transform: 'scale(1.1)',
                            },
                        }} />}
                        component={Link}
                        to="/home"
                        sx={{
                            minWidth: 'auto',
                            maxWidth: 56,
                            mr: 4,
                            transition: 'all 0.2s',
                        }}
                    />
                    <BottomNavigationAction
                        value="/learn"
                        icon={<LightbulbIcon sx={{
                            transition: 'all 0.2s', fontSize: value === '/learn' ? 30 : 24, color: value === '/learn' ? theme.palette.text.secondary : "#fff",
                            '&:hover': {
                                color: theme.palette.primary.main,
                                transform: 'scale(1.1)',
                            },
                        }} />}
                        component={Link}
                        to="/learn"
                        sx={{
                            minWidth: 'auto',
                            maxWidth: 56,
                            mr: 4,
                            transition: 'all 0.2s',
                        }}
                    />
                    <BottomNavigationAction
                        value="/about"
                        icon={<HelpIcon sx={{
                            transition: 'all 0.2s', fontSize: value === '/about' ? 30 : 24, color: value === '/about' ? theme.palette.text.secondary : "#fff",
                            '&:hover': {
                                color: theme.palette.primary.main,
                                transform: 'scale(1.1)',
                            },
                        }} />}
                        component={Link}
                        to="/about"
                        sx={{
                            minWidth: 'auto',
                            maxWidth: 56,
                            transition: 'all 0.2s',
                        }}
                    />
                </BottomNavigation>
                {!isMobile && (
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                        <ThemeToggle />
                    </Box>
                )}
                {isMobile && (
                    <Box sx={{
                        position: "absolute",
                        bottom: "25%",
                        right: 0,

                    }}>
                        <ThemeToggle />
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default NavBar;