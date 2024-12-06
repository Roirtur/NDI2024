import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './Components/stickyComponents/NavBar';
import Footer from './Components/stickyComponents/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { ThemeContextProvider } from './Contexts/ThemeContext';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css'; // Import the custom scrollbar CSS

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeContextProvider>
  </React.StrictMode>
);