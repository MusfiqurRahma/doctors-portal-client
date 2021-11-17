import React, { useEffect, useState } from 'react';
import { Grid,Container} from '@mui/material';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    
    useEffect(() => {
        fetch(' https://whispering-harbor-44995.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data=>setDoctors(data))
    },[])

    return (
        <div>
            <h2>Doctors {doctors.length}</h2>
            <Container>
            <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor doctor={doctor}
                        key={doctor._id}>                           
                        </Doctor> )
                    }
                </Grid>
            </Container>
        </div >
    );
};
export default Doctors;