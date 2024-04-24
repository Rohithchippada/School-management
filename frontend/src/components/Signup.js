import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  let [name,setname]=useState()
    let [email,setemail]=useState()
    let [pwd,setpwd]=useState()
    let [cpwd,setcpwd]=useState()

    const navigate = useNavigate()
    

    let handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:3010/signup',{name,email,pwd,cpwd})
      .then(res=>console.log(res))
      .catch(err=>console.log(err))

      navigate('/login')
}

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
        
            onChange={e=>setname(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
       
            onChange={e=>setemail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
           
            onChange={e=>setpwd(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            name="confirmpassword"
           
            onChange={e=>setcpwd(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Typography variant="body2" color="textSecondary" align="center">
            Already have an account?{' '}
            <Link component={Link} to="/login" variant="body2" >
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};


export default SignUp;
