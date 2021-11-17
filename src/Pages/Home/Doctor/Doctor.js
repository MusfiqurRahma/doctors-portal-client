import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, imageBuffer } = doctor;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <img width="200px" height='200px' src={`data:image/png;base64,${imageBuffer}`} alt ="" />
            <h2>{name}</h2>
        </Grid>
    );
};

export default Doctor;