import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
    const {loginUser,loading,user,signInWithGoogle,authError}=useAuth()
    const [loginData, setLoginData] = useState({});


    const history = useHistory();
    const location = useLocation();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);       
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password,location, history)
        e.preventDefault()
        
    }
    const handleGoogleSign = () => {
        signInWithGoogle(location, history)
        
    }

    return (
        <Container>
            <Grid container spacing={2}>
              <Grid sx={{mt:10}} item xs={12} md={6}>
               <Typography variant="body1" gutterBottom>
                   Login
                    </Typography>
                    {!loading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            name='email'
                            onBlur={handleOnBlur}
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard" />
                        <TextField
                            name='password'
                            onBlur={handleOnBlur}
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type='password'
                            variant="standard" />
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{ width: '75%', m: 1 }}
                        >Sign In</Button>
                    </form>}
                    {loading && <CircularProgress />}
                    <NavLink
                        style={{textDecoration:'none'}}
                        to='/register'>
                        <Button variant="text">New User?....Please Register</Button>
                    </NavLink>
                    {user?.email && <Alert severity="success">
                      <AlertTitle>Congratulations!!! </AlertTitle>
                       <strong>Successfully Logged in</strong>
                    </Alert>}
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                    <p>-------------OR--------------</p>
                    <Button onClick={handleGoogleSign} variant="contained">Google Sign in</Button>
              </Grid>
            <Grid item xs={12} md={6}>
              <img style={{width:'100%'}} src={login} alt="" />
            </Grid>
            </Grid>
        </Container>
    );
};

export default Login;