import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import manImg1 from '../../../Image/man1.jpg'
import manImg2 from '../../../Image/man2.jpg'
import manImg3 from '../../../Image/man3.jpg'

const Home_Team = () => {
    return (
        <>
            <Container className='Home_Team'>
                <Row className='mt-150'>
                    <Col>
                    <div className="wrap">
                        <h2 className=' fw-bold theme-primary-text-color'>MEET OUR TEAM</h2>
                        <h2 className='fs-30 fw-bold mt-20'>Meet The Team</h2>
                    </div>
                    </Col>
                </Row>
                <Row className='mt-80'>
                    <Col>
                        <div className="myCardTeam">
                            <div className="imageTeam">
                                <img className='img-fluid' src={manImg1} alt="" />
                                <div className="overlayImg"></div>
                                <ul className='absolute'>
                                    <li><a href="#"><BsFacebook/></a></li>
                                    <li><a href="#"><BsTwitter/></a></li>
                                    <li><a href="#"><BsLinkedin/></a></li>
                                    <li><a href="#"><BsYoutube/></a></li>
                                </ul>
                            </div>
                            <div className="textTeam mt-15 ml-20">
                                <h2 className='fs-25 fw-bold'>Dylan Meringue</h2>
                                <p className='text-muted'>Project Manager</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="myCardTeam">
                            <div className="imageTeam">
                                <img className='img-fluid' src={manImg2} alt="" />
                                <div className="overlayImg"></div>
                                <ul className='absolute'>
                                    <li><a href="#"><BsFacebook/></a></li>
                                    <li><a href="#"><BsTwitter/></a></li>
                                    <li><a href="#"><BsLinkedin/></a></li>
                                    <li><a href="#"><BsYoutube/></a></li>
                                </ul>
                            </div>
                            <div className="textTeam mt-15 ml-20">
                                <h2 className='fs-25 fw-bold'>Dylan Meringue</h2>
                                <p className='text-muted'>Project Manager</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="myCardTeam">
                            <div className="imageTeam">
                                <img className='img-fluid' src={manImg3} alt="" />
                                <div className="overlayImg"></div>
                                <ul className='absolute'>
                                    <li><a href="#"><BsFacebook/></a></li>
                                    <li><a href="#"><BsTwitter/></a></li>
                                    <li><a href="#"><BsLinkedin/></a></li>
                                    <li><a href="#"><BsYoutube/></a></li>
                                </ul>
                            </div>
                            <div className="textTeam mt-15 ml-20">
                                <h2 className='fs-25 fw-bold'>Dylan Meringue</h2>
                                <p className='text-muted'>Project Manager</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home_Team;