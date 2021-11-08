import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';


const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop:'-200px'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1,p:5,height:'51vh'}}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <img
         style={{width:400,marginTop:'-120px'}}              
         src={doctor} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex',justifyContent:'flex-start',textAlign:'left', alignItems: 'center'}}>
        <Box>
        <Typography variant='h6' sx={{mb :2 }} style={{color:'#66c0c2'}}>
             Appointment           
          </Typography>
          <Typography variant='h4' sx={{mb :2 }} style={{color:'white'}}>
             Make An Appointment<br />Today           
          </Typography>
          <Typography variant='p'  sx={{mb :2 }} style={{color:'white'}}>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, tenetur. Aut esse debitis accusamus totam, ex ab animi voluptates ad natus, unde sapiente libero? Reprehenderit ea repudiandae molestias sed enim.          
          </Typography> <br/>
          <Button style={{backgroundColor:'#11d0dc'}} variant="contained">Learn More</Button>                
        </Box>
        </Grid>
      </Grid>
    </Box>
    );
};

export default AppointmentBanner;