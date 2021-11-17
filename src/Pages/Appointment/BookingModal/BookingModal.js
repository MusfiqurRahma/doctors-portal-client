import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ openBookingModal, handleClose, booking, date,setBookingSuccess }) => {
    const { user } = useAuth();
    const { name, time, price } = booking;

  
  const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
  
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  }

    const handleBookingSubmit = e => {
         // collect data
      const appointment = {
        ...bookingInfo,
        price,
        time,
        serviceName: name,
        date:date.toLocaleDateString()
      }
        // send to the server
      fetch('https://whispering-harbor-44995.herokuapp.com/appointments', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(appointment)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            handleClose()
            setBookingSuccess(true)
          }
        });
        e.preventDefault()   
    } 
    return (
        <Modal
        open={openBookingModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {name}
          </Typography>
            <form onSubmit={handleBookingSubmit}>
            <TextField
             label='Time'          
             sx={{width:'100%',m:1}}          
             disabled          
             id="outlined-size-small"
             defaultValue={time}
             size="small"
             />      
            <TextField
             label='Your Name'          
             sx={{width:'100%',m:1}}                
             id="outlined-size-small"
             defaultValue={user.displayName}
             size="small"
             name='patientName'
             onBlur={handleOnBlur} 
             />      
            <TextField
             label='Phone Number'
             sx={{width:'100%',m:1}}                 
             id="outlined-size-small"
             defaultValue='Phone Number'
             size="small"
             name="phone"
             onBlur={handleOnBlur} 
             />      
             <TextField
             label='Email'           
             sx={{width:'100%',m:1}}                
             id="outlined-size-small"
             defaultValue={user.email}
             size="small"
             name=" email"
             onBlur={handleOnBlur}  
             />      
             <TextField
             label='Date'
             disabled           
             sx={{width:'100%',m:1}}               
             id="outlined-size-small"
             defaultValue={date.toDateString()}
             size="small"
            />
            <Button type="submit" variant="contained">Send</Button>        
         </form>   
        </Box>
      </Modal>
    );
};
export default BookingModal;