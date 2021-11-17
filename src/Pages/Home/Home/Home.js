import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import ShortContact from '../ShortContact/ShortContact';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <ShortContact></ShortContact>
            <Services></Services>           
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;