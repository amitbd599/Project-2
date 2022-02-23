import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../../Image/18-1.png";
import img2 from "../../../Image/19-1.png";
import img3 from "../../../Image/20-1.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const About_OurService = () => {
  return (
    <Container className="About_OurService">
      <Row>
        <Col className="mt-120">
          <div className="wrap text-center ">
            <h3 className="fs-20 fw-bold theme-primary-color">OUR SERVICE</h3>
            <h2 className="fs-40 fw-bold mt-20">Why you choose Our plugin</h2>
          </div>
        </Col>
      </Row>
      <Row className="mt-100">
        <Col md={4}>
          <div className="myCardItem">
            <div className="wrap">
              <div className="">
                <img className="text-center" src={img2} alt="" />
              </div>
              <h2 className="fs-25 mt-40 theme-primary-color-hover">New sharing made for people</h2>
              <p className="fs-15 text-muted mt-15">
                The full monty twit cracking goal Jeffrey lurgy chinwag bobby
                vagabond David, I don't want no agro what a load.!
              </p>
              <div className="mt-25">
              <Link className="theme-primary-bg my-btn-primary">
                    <FaArrowRight /> <span>Learn More</span>
                  </Link>
              </div>
              
             
            </div>
            <div className="svgFile">
            <svg class="layer" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="349px" height="270px">
                <path fill-rule="evenodd" fill="rgb(253, 248, 248)" d="M-0.000,269.999 L-0.000,-0.001 L370.000,-0.001 C370.000,-0.001 347.889,107.879 188.862,112.181 C35.160,116.338 -0.000,269.999 -0.000,269.999 Z"></path>
            </svg>
              </div>
            
          </div>
          
        </Col>
        <Col md={4}>
          <div className="myCardItem">
            <div className="wrap">
              <div className="">
                <img className="text-center" src={img3} alt="" />
              </div>
              <h2 className="fs-25 mt-40 theme-primary-color-hover">One integrated solution Manage</h2>
              <p className="fs-15 text-muted mt-15">
                The full monty twit cracking goal Jeffrey lurgy chinwag bobby
                vagabond David, I don't want no agro what a load.!
              </p>
              <div className="mt-25">
              <Link className="theme-primary-bg my-btn-primary">
                    <FaArrowRight /> <span>Learn More</span>
                  </Link>
              </div>
            </div>
            <div className="svgFile">
            <svg class="layer" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="349px" height="270px">
                <path fill-rule="evenodd" fill="rgb(253, 248, 248)" d="M-0.000,269.999 L-0.000,-0.001 L370.000,-0.001 C370.000,-0.001 347.889,107.879 188.862,112.181 C35.160,116.338 -0.000,269.999 -0.000,269.999 Z"></path>
            </svg>
              </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="myCardItem">
            <div className="wrap">
              <div className="">
                <img className="text-center" src={img1} alt="" />
              </div>
              <h2 className="fs-25 mt-40 theme-primary-color-hover">
                Thousand of features and Custom option.
              </h2>
              <p className="fs-15 text-muted mt-15">
                The full monty twit cracking goal Jeffrey lurgy chinwag bobby
                vagabond David, I don't want no agro what a load.!
              </p>
              <div className="mt-25">
              <Link className="theme-primary-bg my-btn-primary">
                    <FaArrowRight /> <span>Learn More</span>
                  </Link>
              </div>
            </div>
            <div className="svgFile">
            <svg class="layer" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="349px" height="270px">
                <path fill-rule="evenodd" fill="rgb(253, 248, 248)" d="M-0.000,269.999 L-0.000,-0.001 L370.000,-0.001 C370.000,-0.001 347.889,107.879 188.862,112.181 C35.160,116.338 -0.000,269.999 -0.000,269.999 Z"></path>
            </svg>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About_OurService;
