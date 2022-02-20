import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import imgSection from "../../../Image/app1-1.png";
import imgSection2 from "../../../Image/app2-1.png";
import { BsArrowRight } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home_section_part_1 = () => {
  return (
    <>
      <Container className="Home_section_part_1">
        <Row className="mt-200">
          <Col md={6}>
            <div className="app-download-image text-center">
              <img src={imgSection} alt="" />
            </div>
          </Col>

          <Col md={6}>
            <div className="wrap mt-10">
              <h2 className="fs-35 fw-bold ">
                Quickly query and receive credit
              </h2>
              <p className="fs-15 text-muted mt-20">
                Mufty chimney pot a blinding shot posh A bit of how's your
                father barney
                <br />
                don't get shirty with me, nice one it's all gone.
              </p>
              <div>
                <ul className="mt-20">
                  <li>
                    {" "}
                    <BsArrowRight className="theme-primary-color" /> Quick
                    Access
                  </li>
                  <li>
                    {" "}
                    <BsArrowRight className="theme-primary-color" /> Easy setup
                    process
                  </li>
                  <li>
                    {" "}
                    <BsArrowRight className="theme-primary-color" /> Live call
                    support
                  </li>
                </ul>
                <div className="mt-40">
                  <Link className="theme-primary-bg my-btn-primary d-inline-block">
                    <div className="d-flex align-items-center">
                      <FaGooglePlay className="mr-10 fs-25" />
                      <span className="btn-two">
                        <span className="fs-13">Get on the </span> <br />
                        <span className="fs-18">Google Play</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>


        <Row className="mt-150">
          <Col>
            <div className="wrap mt-10">
              <h2 className="fs-35 fw-bold ">Set your own targets.</h2>
              <p className="fs-15 text-muted mt-20">
                Mufty chimney pot a blinding shot posh A bit of how's your
                father barney don't get shirty with me, nice one it's all gone.
                <br />
                don't get shirty with me, nice one it's all gone.
              </p>
              <div>
                <ul className="mt-20">
                  <li>
                    {" "}
                    <BsArrowRight className="theme-primary-color" /> Quick
                    Access
                  </li>
                  <li>
                    {" "}
                    <BsArrowRight className="theme-primary-color" /> Easy setup
                    process
                  </li>
                  <li>
                    {" "}
                    <BsArrowRight className="theme-primary-color" /> Live call
                    support
                  </li>
                </ul>
                <div className="mt-40">
                  <Link className="theme-primary-bg my-btn-primary d-inline-block">
                    <div className="d-flex align-items-center">
                      <FaGooglePlay className="mr-10 fs-25" />
                      <span className="btn-two">
                        <span className="fs-13">Get on the </span> <br />
                        <span className="fs-18">Google Play</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="app-download-image text-center">
              <img src={imgSection2} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home_section_part_1;
