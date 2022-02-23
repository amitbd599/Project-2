import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const About_CountZone = () => {
  return (
    <Container className="About_CountZone">
      <Row>
        <Col className="part_1 mt-120">
          <div className="wrap text-center">
            <h3 className="fs-20 fw-bold theme-primary-color ">FUN FACTS</h3>
            <h2 className="fs-30 fw-bold mt-20">
              We Always try to Understand <br /> Users expectation
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="mt-100">
        <Col md={3}>
          <div className="wrap text-center">
            <h2 className="fs-50 fw-bold color_1">
              <CountUp delay={2} end={600} /> K
            </h2>
            <p className="fs-20 text-muted mt-10">Total Download</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="wrap text-center">
            <h2 className="fs-50 fw-bold color_2">
              <CountUp delay={2} end={1050} /> K
            </h2>
            <p className="fs-20 text-muted mt-10">Active Accounts</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="wrap text-center">
            <h2 className="fs-50 fw-bold color_3">
              <CountUp delay={2} end={960} /> K
            </h2>
            <p className="fs-20 text-muted mt-10">Awards</p>
          </div>
        </Col>
        <Col md={3}>
          <div className="wrap text-center">
            <h2 className="fs-50 fw-bold color_4">
              <CountUp delay={2} end={1020} /> K
            </h2>
            <p className="fs-20 text-muted mt-10">Positive Reviews</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-80 text-center">
          <Link className="theme-primary-bg my-btn-primary">
            <FaArrowRight /> <span>See All Review</span>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default About_CountZone;
