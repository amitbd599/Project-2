import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import shape from "../../../Image/ellipse.png";

const About_OverFlow = () => {
  return (
    <Container fluid className="About_OverFlow">
      <Row>
        <Col className="pt-100 pb-100 relative">
          <div className="wrap text-center">
            <h3 className="fs-45 fw-bold text-light">
              We are optimists who <br /> love to work together
            </h3>
            <div className="mt-50">
            <Link className="theme-primary-bg my-btn-primary-outline rounded-pill fw-bold">
              Free Consultation
            </Link>
            </div>
          </div>
          <div className="shape">
            <img src={shape} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About_OverFlow;
