import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking,date,setBookingSuccess }) => {
    const [openBookingModal, setOpenBookingModal] = React.useState(false);
    const handleOpen = () => setOpenBookingModal(true);
    const handleClose = () => setOpenBookingModal(false);
    const { name, time, space } = booking;
    return (          
          <> <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{p:5}} elevation={3}>
                <Typography sx={{ color: '#12d1da', fontWeight:600}} variant="h5" gutterBottom component="div">
                 {name}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
                 {time}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
               {space} Spaces Available
            </Typography>
            <Button onClick={handleOpen} sx={{backgroundColor:'#12d1da'}} variant="contained">BOOK APPOINTMENT</Button>   
            </Paper>
        </Grid>
            <BookingModal
                openBookingModal={openBookingModal}
                handleClose={handleClose}
                booking={booking}
                date={date}
                setBookingSuccess={setBookingSuccess}>
            </BookingModal>
            </>
    );
};

export default Booking;