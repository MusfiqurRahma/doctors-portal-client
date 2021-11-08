import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png';


const contactBanner = {
    background: `url(${bg}),linear-gradient(#3A4256,#3A4256)`,
    backgroundColor:'#3f465a',
    backgroundBlendMode:'overlay',
    height:'80vh'
}

const Contact = () => {
    return (
        <div style={contactBanner}>
            <div style={{ padding:'20px'}}>
            <Typography variant='h6' sx={{color:'#5bb6b9'}}>Contact Us</Typography>
            <Typography variant='h4' sx={{color:'#fff',mb:4}}>Always Connect With Us</Typography>
           </div>
            <Box>
               <TextField
                 sx={{ m: 1,width:'40%',backgroundColor:'#fff', borderRadius:'5px'}}       
                  placeholder='Email Address'
                  id="outlined-size-small"
                defaultValue="Email"
              size="small"
            /> <br />
              <TextField
                 sx={{ m: 1, width: '40%', backgroundColor: '#fff',borderRadius:'5px' }}
                 required    
                 placeholder='Subject*'
               id="outlined-size-small"
             defaultValue="Subject*"
           size="small"
        /> <br />
              <TextField
                required
                    sx={{ m: 1, width: '40%', backgroundColor: '#fff', borderRadius:'5px'}}
                 placeholder='Your Message'
                id="outlined-size-small"
               defaultValue="Your Message"
             size="small"
                />
            </Box>
          <Button variant="contained" sx={{backgroundColor:'#11d0dc',padding:'5px 50px'}}>Submit</Button>  
        </div>
    );
};
export default Contact;