import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import dot from "../../../Image/dot.png";
import ball from "../../../Image/ball.png";
import shape from "../../../Image/triangle.png";
import mobileLogo from "../../../Image/mockup-1.png";
import leftFlower from "../../../Image/leaf1.png";
import rightFlower from "../../../Image/leaf2.png";
import { Link, useLocation } from "react-router-dom";
import { BsBookHalf } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home_heroSection = () => {
 useEffect(()=>{
  AOS.init({
    duration:"1000",
    once: false,
    throttleDelay: 99
  });
 },[])
  return (
    <>
      <Container className="heroSection pt-50">
        <Row>
          <Col md={6}>
            <div className="wrap">
              <div className="introBar">
                <p className="theme-primary-bg text-theme-shape font-weight-bold text-light">
                  Appel
                </p>
                <p className=" ms-3">Best Mobile Exoland Apps</p>
              </div>
              <div className="heading-text" >
                <p className="text-1">Best Mobile</p> <br />
                <p className="text-2">
                  <span className="theme-primary-color">App</span> Showcase
                </p>
              </div>
              <div className="bannner-bg">
                <div>
                  <img className="ball" src={ball} alt="" />
                  <img className="shape" src={shape} alt="" />
                </div>
              </div>
              <p className="text-muted mt-50">
                Why I say old chap that is spiffing bits and bobs chimney pot
                cracking goal bamboozled.!
              </p>
              <div className="d-flex" data-aos="fade-up">
                <div className="mt-30">
                  <Link className="theme-primary-bg my-btn-primary pt-30">
                    <BsBookHalf /> <span className="ms-">Get Started</span>
                  </Link>
                </div>
                <div className="mt-30 ms-3">
                  <Link className="theme-primary-bg my-btn-primary pt-30">
                    <BsYoutube /> <span>Watch</span>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="imageSection">
              <img className="img-fluid" src={mobileLogo} alt="" data-aos="zoom-in" />
              <div className="circle-bg"></div>
              <img className="leftFlower" src={leftFlower} alt="" />
              <img className="rightFlower" src={rightFlower} alt="" />
              <img className="dot" src={dot} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home_heroSection;
