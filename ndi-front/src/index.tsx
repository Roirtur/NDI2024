import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './Components/stickyComponents/NavBar';
import Footer from './Components/stickyComponents/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import TMP from './pages/Temp';
import NotFound from './pages/NotFound';
import { ThemeContextProvider } from './Contexts/ThemeContext';
import { Box } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
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
            <Route path="/about" element={<TMP />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeContextProvider>
  </React.StrictMode >
);
