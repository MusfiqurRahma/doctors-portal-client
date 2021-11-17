import { Alert, AlertTitle, Container, Grid, Typography } from '@mui/material';
import React, { useState }  from 'react';
import Booking from '../Booking/Booking';

const bookings    = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '7:00 PM - 10:00 PM',
        price:20,
        space:5
    },
    {
        id: 2,
        name: 'Cosmetics Dentistry',
        time: '3:00 PM - 10:00 PM',
        price:23,
        space:8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '4:00 PM - 10:00 PM',
        price:28,
        space:10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '4:00 PM - 9:00 PM',
        price:23,
        space:12
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '4:00 PM - 10:00 PM',
        price:25,
        space:15
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '3:00 PM - 10:00 PM',
        price:18,
        space:10
    }
]
const AppointmentAvailable = ({ date }) => {
     
const [bookingSuccess,setBookingSuccess] =useState(false)

    return (
        <Container>
            <Typography variant='h4' sx={{ color: '#12d1da', fontWeight: 500, mb: 4, mt: 2 }} >Appointment Available on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">
             <AlertTitle>Congratulations!!!</AlertTitle>
             <strong>Booked Appointment Successfully </strong>
            </Alert>}
            <Grid container spacing={2}>
        {
            bookings.map(booking => <Booking
            id={booking.id}
            booking={booking}
            date={date}
            setBookingSuccess={setBookingSuccess}    
            >
            </Booking>)
        }      
        </Grid>
        </Container>
    );
};
export default AppointmentAvailable;