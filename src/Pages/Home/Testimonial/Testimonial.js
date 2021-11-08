import {Card, CardActions, CardContent, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import winsonHary from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';

const Testimonial = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 8,mb:10}}>
        <Typography variant='h6' sx={{color:'#6bcece'}}>
                Testimonial
            </Typography>
            <Typography variant='h4' sx={{color:'#1a2a42',mb:5}}>
                What's Our Patience Says
            </Typography>
       <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <Paper elevation={3}>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero corrupti provident eius quae quas voluptatem tempora perspiciatis molestiae reprehenderit aut beatae, odit a doloribus soluta sed eos, amet recusandae iure ex quos in molestias fugit. Molestias aperiam mollitia sapiente dignissimos.
          <br />
        </Typography>
      </CardContent>
        <CardActions>
         <img width='50px' src={winsonHary} alt="" />                       
         <Typography variant='h6' sx={{color:'#6bcece'}}>Winson Herry</Typography> <br />
         <Typography variant='p'>California</Typography>
      </CardActions>
    </Card>              
    </Paper>
      </Grid>
    <Grid item xs={12} md={4}>
    <Paper elevation={3}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iste officiis praesentium totam repellendus sed minus. Iure aspernatur a quo illo ullam mollitia rem autem, tempora dicta repudiandae deleniti qui doloribus inventore fugiat quaerat suscipit dolor expedita dolorem. Ex, rem!
          <br />
        </Typography>
      </CardContent>
        <CardActions>
       <img width='50px' src={people2} alt="" />                       
       <Typography variant='h6' sx={{color:'#6bcece'}}>Winson Herry</Typography> <br />
       <Typography variant='p'>Los angeles</Typography>
      </CardActions>
    </Card>                  
    </Paper>
      </Grid>
    <Grid item xs={12} md={4}>
    <Paper elevation={3}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a fugiat labore cumque culpa eos ipsam. Animi eius esse asperiores soluta ipsa pariatur, voluptas sapiente tempora earum voluptatibus sunt! Vero tempore sequi dicta delectus iure eaque perspiciatis vel et labore.
          <br />
        </Typography>
      </CardContent>
        <CardActions>
        <img width='50px' src={people3} alt="" />                        
        <Typography variant='h6'sx={{color:'#6bcece'}}>Winson Herry</Typography>
        <Typography variant='p'>Los angeles</Typography>
      </CardActions>
    </Card>                 
    </Paper>             
      </Grid>
      </Grid>
    </Container> 
    );
};
export default Testimonial;

