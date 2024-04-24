

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const handleLogout = async () => {
    try {
      await axios.post('/logout'); // Replace with your logout endpoint
      // Redirect or handle logout state
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          School Management System
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/admin">
          Admin
        </Button>
        <Button color="inherit" component={Link} to="/teacher">
          Teacher
        </Button>
        <Button color="inherit" component={Link} to="/student">
          Student
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
