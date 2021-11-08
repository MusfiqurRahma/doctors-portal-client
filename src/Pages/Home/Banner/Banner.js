import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography,Box} from '@mui/material';

const bannerBg = {
  background: `url(${bg})`,
  height: '500px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center top',
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height:'400px',
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{...verticalCenter,textAlign:'left'}}>
         <Box>
           <Typography variant='h3'>
             Your New Smile <br /> Starts Here         
             </Typography>
              <Typography variant='h6' sx={{my:4, fontSize: 16,color:'GrayText',fontWeight:200}}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iure voluptatum pariatur ullam sapiente, itaque odio praesentium doloribus nihil! Dicta ab rem quaerat exercitationem consequuntur enim explicabo voluptatum voluptate quis?        
               </Typography>
               <Button  style={{backgroundColor:'#11d0dc'}} variant="contained">GET APPOINTMENT</Button>                              
             </Box>
            </Grid>  
            <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{width:'400px'}} src={chair} alt="" />
           </Grid>
            </Grid>
      </Container>
    );
};

export default Banner;