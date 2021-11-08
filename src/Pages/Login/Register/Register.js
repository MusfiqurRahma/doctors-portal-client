import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink ,useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {registerUser,loading,user,authError}=useAuth()
    
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);       
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match!! Please try again!');
            return
        }
        registerUser(loginData.email,loginData.password,loginData.name,history);
        e.preventDefault();
    }
    return (
        <Container>
        <Grid container spacing={2}>
          <Grid sx={{mt:10}} item xs={12} md={6}>
           <Typography variant="body1" gutterBottom>
               Register Here
                </Typography>
                    {
                        !loading ? <form onSubmit={handleLoginSubmit}>
                        <TextField
                            name='name'
                            onBlur={handleOnBlur}
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            variant="standard" />    
                        <TextField
                            name='email'
                            onChange={handleOnBlur}
                            sx={{width:'75%',m:1}}
                            id="standard-basic"
                            type='Email'    
                            label="Your Email"
                            variant="standard" />
                        <TextField
                            name='password'
                            onChange={handleOnBlur}
                            sx={{width:'75%',m:1}}
                            id="standard-basic"
                            label="Your Password"
                            type='password'
                            variant="standard" />
                        <TextField
                            name='password2'
                            onChange={handleOnBlur}
                            sx={{width:'75%',m:1}}
                            id="standard-basic"
                            label="Re-Type Your Password"
                            type='password'
                            variant="standard" />
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{width:'75%',m:1}}
                            >Register</Button>
                    <NavLink
                        style={{textDecoration:'none'}}
                        to='/login'>
                        <Button variant="text">ALready Registered.?...Please Login</Button>
                    </NavLink>
                    </form> :
                    <CircularProgress />
                    }
                    {user?.email && <Alert severity="success">
                      <AlertTitle>Congratulations!!! </AlertTitle>
                       <strong>Account Successfully Created...</strong>
                    </Alert>}
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
          </Grid>
        <Grid item xs={12} md={6}>
          <img style={{width:'100%'}} src={login} alt="" />
        </Grid>
        </Grid>
    </Container>
    );
};
export default Register;