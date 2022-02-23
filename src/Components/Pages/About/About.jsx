import React from 'react';
import Footer from '../../Universal_Components/Footer';
import Header from '../../Universal_Components/Header';
import Page_Info from '../../Universal_Components/Page_Info';
import Home_Patners from '../Home/Home_Patners';
import Home_Team from '../Home/Home_Team';
import About_BusinessHistory from './About_BusinessHistory';
import About_CountZone from './About_CountZone';
import About_OurService from './About_OurService';
import About_OverFlow from './About_OverFlow';
import About_Testimonial from './About_Testimonial';

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

        {/* Count Zone */}

        <About_CountZone></About_CountZone>

        {/* Testimoinal Zone */}

        <About_Testimonial></About_Testimonial>

        {/* Team */}

        <Home_Team></Home_Team>

        {/* Company Logo */}

        <Home_Patners></Home_Patners>

        {/* Overflow */}

        <About_OverFlow></About_OverFlow>

        {/* Footer */}

        <Footer></Footer>
            
        </>
    );
};

export default About;