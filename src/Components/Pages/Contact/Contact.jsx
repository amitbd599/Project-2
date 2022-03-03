import React from 'react';
import Header from '../../Universal_Components/Header';
import Page_Info from '../../Universal_Components/Page_Info';
import Contact_From from './Contact_From';

const Contact = () => {
    return (
        <>
        {/* Header section */}

        <Header></Header>

        {/* Page info */}

        <Page_Info name="Contact"></Page_Info>

        {/* Contact from data*/}

        <Contact_From></Contact_From>

        
            
        </>
    );
};

export default Contact;