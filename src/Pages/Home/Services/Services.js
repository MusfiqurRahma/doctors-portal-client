import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import img1 from '../../../images/fluoride.png';
import img2 from '../../../images/cavity.png';
import img3 from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, deleniti quaerat, atque ducimus deserunt porro ullam totam exercitationem adipisci sapiente eveniet! Numquam amet obcaecati vel, illum animi quaerat quisquam odio.',
        img: img1
    },
    {
        name: 'Cavity Filling',
        description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, deleniti quaerat, atque ducimus deserunt porro ullam totam exercitationem adipisci sapiente eveniet! Numquam amet obcaecati vel, illum animi quaerat quisquam odio.',
        img: img2
    },
    {
        name: 'Teeth Whitening',
        description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, deleniti quaerat, atque ducimus deserunt porro ullam totam exercitationem adipisci sapiente eveniet! Numquam amet obcaecati vel, illum animi quaerat quisquam odio.',
        img: img3
    },
    
];


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{ fontWeight: 600, color:'#11d0dc'}} variant="h6" component="div">
          OUR SERVICES
        </Typography>       
        <Typography sx={{ fontWeight: 'bold',my:5}} variant="h4" component="div">
          Services We Provide
        </Typography>       
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
           services.map(service => <Service
           key={service.name}
           service={service}
           >                           
           </Service>)
         }
        </Grid>
        </Container>
      </Box>
    );
};
export default Services;