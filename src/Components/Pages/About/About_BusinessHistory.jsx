import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import imgSing from '../../../Image/sing-1.png'
import girlImg from '../../../Image/1-2-1.jpg'

const About_BusinessHistory = () => {
  return (
    <>
      <Container className="About_BusinessHistory">
        <Row>
          <Col md={6} className="mt-100">
            <div className="wrap relative">
              <h3 className="fs-20 fw-bold theme-primary-color ">OUR HISTORY</h3>
              <h2 className="fs-40 fw-bold mt-20">A wide range of business and Saas services</h2>
              <p className="mt-20 fs-15 text-muted">Why I say old chap that is spiffing, bite your arm off geeza blag pukka bleeder A bit of how's your father bugger all mate gutted mate, cheesed off hunky-dory gosh morish get stuffed mate lemon squeezy. Bodge barmy bugger no biggie bleeding bits and bobs my good sir, spend a penny faff about are you taking the piss what a plonker bobby bevvy, chancer Eaton me old mucker don't get shirty with me is.</p>

              <h3 className="fs-25 fw-bold mt-30">Max Conversion</h3>
              <div className="mt-15 ">
                  <img src={imgSing} alt="" srcset="" />
              </div>
              
            </div>
          </Col>
          <Col md={6} className="text-end">
              <img src={girlImg} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About_BusinessHistory;
