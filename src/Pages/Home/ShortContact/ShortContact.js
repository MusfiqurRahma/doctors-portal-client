import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ShortContact = () => {
    return (
        <Container sx={{ flexGrow: 1,mb:5,display: 'flex',textAlign:'left', alignItems: 'center',color:'white'}}>
        <Grid container spacing={3}>
        <Grid sx={{ bgcolor: '#1cc7c1',p:4}} item xs={12} md={4}>     
        <Typography variant='h6'>
           Opening Hours                
          </Typography>
        <Typography variant='p'>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, aspernatur?               
          </Typography>
        </Grid>
        <Grid sx={{ bgcolor: '#3a4256',p:4 }} item xs={12} md={4}>
        <Typography variant='h6'>
           Visit our location               
          </Typography>
        <Typography variant='p'>
          Brooklyn,Ny 10036,United States            
          </Typography>
        </Grid>
        <Grid sx={{bgcolor:'#1cc7c1',p:4}} item xs={12} md={4}>
        <Typography variant='h6'>
           Contact Us Now              
          </Typography>
        <Typography variant='p'>
           +00017865780978             
          </Typography>
        </Grid>
      </Grid>
    </Container>
    );
};

export default ShortContact;