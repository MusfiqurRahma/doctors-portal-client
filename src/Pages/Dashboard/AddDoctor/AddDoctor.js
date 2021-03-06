import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        
     fetch(' https://whispering-harbor-44995.herokuapp.com/doctors', {
        method: 'POST',
        body: formData
     })
       .then(res => res.json())
         .then(data => {
             if (data.insertedId) {
                 setSuccess('Doctors added successfully')
           }
      })
       .catch(error => {
         console.error('Error:', error);
      });
    }

    return (
        <div>
            <h2>Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    onChange={e=>setName(e.target.value)}
                    required
                    label="Name"
                    variant="standard" /> <br/>
                <TextField
                    sx={{ width: '50%' }}
                    onChange={e=>setEmail(e.target.value)}
                    required
                    label="Email"
                    variant="standard" />  <br/>
                <Input
                    sx={{ width: '50%' }}
                    onChange={e=>setImage(e.target.files[0])}
                    accept="image/*"
                    type="file" /> <br/> <br/>
                <Button                    
                    type="submit"
                    variant="contained">
                    Add Doctor
                  </Button>
            </form>
            {
                success && <p style={{color:'green'}}>{success}</p>
            }
        </div>
    );
};

export default AddDoctor;