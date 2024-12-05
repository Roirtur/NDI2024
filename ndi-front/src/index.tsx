import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/stickyComponents/NavBar';
import Footer from './Components/stickyComponents/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import TMP from './pages/Temp';
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
            <Route path="/home" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/about" element={<TMP />} />
          </Routes>
          <Footer />
        </Box>
      </Router>
    </ThemeContextProvider>
  </React.StrictMode >
);
