import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import dentalcare from '../../../images/treatment.png';

const DentalCare = () => {
    return (
        <Container sx={{ flexGrow: 1,mt:10}}>
        <Grid container spacing={2} sx={{display:'flex',textAlign:'left',justifyContent:'flex-start'}}>
          <Grid item xs={12} md={5}>
            <img style={{height:'60%'}} src={dentalcare} alt="" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant='h3' sx={{color:'#213148',mt:10,mb:5}}>
               Exceptional Dental Care,on Your Terms         
            </Typography>
            <Typography variant='h6' sx={{fontSize:'16px',fontWeight:'normal',color:'gray',mb:5}}>
               It's a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using lorem ipsums that it has a more or less normal distribution of letters,as opposed to using  "Content here,content here",making it look like readable English.Many desktop publishing packages and web page.        
             </Typography>
             <Button sx={{backgroundColor:'#15d1c8'}} variant="contained">Learn More</Button>       
          </Grid>
        </Grid>
      </Container>
    );
};
export default DentalCare;