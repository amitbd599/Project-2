import React from 'react';
import Header from '../../Universal_Components/Header';
import Page_Info from '../../Universal_Components/Page_Info';
import About_BusinessHistory from './About_BusinessHistory';
import About_OurService from './About_OurService';

const About = () => {
    return (
        <>
        {/* Header Section */}

        <Header></Header>

        {/* Page info */}

        <Page_Info name="About Us"></Page_Info>

        {/* Business History Section */}

        <About_BusinessHistory></About_BusinessHistory>

        {/* Our Service */}

        <About_OurService></About_OurService>
            
        </>
    );
};

export default About;