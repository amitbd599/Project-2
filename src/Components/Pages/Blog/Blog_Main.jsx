import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Universal_Components/Footer';
import Header from '../../Universal_Components/Header';
import Page_Info from '../../Universal_Components/Page_Info';
import Blog_Data_Load from './Blog_Data_Load';
import Blog_pagination from './Blog_pagination';

const Blog_Main = () => {
    return (
        <>
        {/* Header */}

        <Header></Header>

        {/* Page intro */}

        <Page_Info name="Blog"></Page_Info>

        {/* Blog Data Load */}

        <Blog_Data_Load></Blog_Data_Load>

        {/*  Blog_pagination */}

        <Blog_pagination></Blog_pagination>



        {/* Footer */}

        <Footer></Footer>

        </>
    );
};

export default Blog_Main;