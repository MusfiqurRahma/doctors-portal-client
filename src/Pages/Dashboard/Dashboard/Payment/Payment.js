import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm/CheckoutForm';


const stripePromise =loadStripe('pk_test_51JwKFACJo2X6Dye8vl3cCixoBnRnsDag5Nv4nb817m69g5AFgIDcZmhlYEZuCMJuOdls72YR0Z714YgsVldlYOBB00wRNwLR8J')

const Payment = () => {

    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(` https://whispering-harbor-44995.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data=>setAppointment(data))
     },[appointmentId])
    return (
        <div>
            <h2>Please pay for:{appointment.patientName}
            for{appointment.serviceName}</h2>
            <h4>Pay:$ {appointment?.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
            <CheckoutForm
             appointment={appointment}/>
            </Elements>}
        </div>
    );
};

export default Payment;