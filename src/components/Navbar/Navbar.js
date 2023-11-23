import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Typography, Container, IconButton, Toolbar } from '@mui/material';
import ResumeBuilderIcon from '@mui/icons-material/AccountTree';
import ResumeTemplatesIcon from '@mui/icons-material/LibraryBooks';
import MyResumesIcon from '@mui/icons-material/Assignment';
import AboutUsIcon from '@mui/icons-material/Info';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="static" className="navbar" sx={{ backgroundColor: 'white' }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" className="logo" component={Link} to="/" sx={{ color: 'blue' }}>
          <IconButton component={Link} to="/" sx={{ marginRight: 1 }}>
            <ResumeBuilderIcon fontSize="large" />
          </IconButton>
          <strong>ResumeBuilder.io</strong>
        </Typography>
        <Toolbar className="nav-links">
          <NavLink to="/templates" className="icons" icon={<ResumeTemplatesIcon />} text="Resume Templates" location={location} />
          <NavLink to="/my-resumes" icon={<MyResumesIcon />} text="My Resumes" location={location} />
          <NavLink to="/about-us" icon={<AboutUsIcon />} text="About Us" location={location} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const NavLink = ({ to, icon, text, location }) => {
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`} sx={{ color: 'black', '&:hover': { color: 'blue' } }}>
      {icon}
      <strong>{text}</strong>
    </Link>
  );
};

export default Navbar;
