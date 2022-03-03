import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../../Universal_Components/Header';
import Page_Info from '../../Universal_Components/Page_Info';
import img from '../../../Image/error.png'
import Footer from '../../Universal_Components/Footer';

const Error = () => {
    return (
        <>
        {/* Header section */}
            <Header></Header>

            {/* Page info */}

            <Page_Info name="Error!"></Page_Info>

            {/* Error page info */}

                <Container className='error'>
                    <Row>

                        <Col>
                            <div className="wrap text-center mb-190">
                                <img src={img} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Footer */}
                <Footer></Footer>

        </>
    );
};

export default Error;