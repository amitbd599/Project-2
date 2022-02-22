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
              <h2 className="fs-25 mt-40 ">New sharing made for people</h2>
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
          </div>
        </Col>
        <Col md={4}>
          <div className="myCardItem">
            <div className="wrap">
              <div className="">
                <img className="text-center" src={img3} alt="" />
              </div>
              <h2 className="fs-25 mt-40">One integrated solution Manage</h2>
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
          </div>
        </Col>
        <Col md={4}>
          <div className="myCardItem">
            <div className="wrap">
              <div className="">
                <img className="text-center" src={img1} alt="" />
              </div>
              <h2 className="fs-25 mt-40">
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
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About_OurService;
