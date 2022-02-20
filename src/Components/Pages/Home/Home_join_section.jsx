import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../../Image/leaf1(1).png";
import triangle from "../../../Image/triangle.png";
import leaf from "../../../Image/leaf2 (1).png";
import appImg3 from "../../../Image/app3.png";
import appImg4 from "../../../Image/app4.png";
import { Link } from "react-router-dom";
import { FaGooglePlay } from "react-icons/fa";

const Home_join_section = () => {
  return (
    <>
      <Container fluid className="Home_join_section">
        <Container>
          <Row className="pt-100">
            <Col>
              <div className="">
                <div className="img_1">
                  <img className="img-fluid " src={appImg3} alt="" />
                </div>
                <div className="img_2">
                  <img className="img-fluid " src={appImg4} alt="" />
                </div>
              </div>
            </Col>
            <Col>
              <div className="wrap">
                <h2 className="fs-60 fw-bold ">Join free for 7days</h2>
                <p>
                  Mufty chimney pot a blinding shot posh A bit of how's your
                  father barney don't get.
                </p>
              </div>
              <div className="mt-30">
                <Link className="theme-primary-bg my-btn-primary d-inline-block ">
                  <div className="d-flex align-items-center">
                    <FaGooglePlay className="mr-10 fs-25" />
                    <span className="btn-two">
                      <span className="fs-13">Get on the </span> <br />
                      <span className="fs-18">Google Play</span>
                    </span>
                  </div>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="imgShape">
          <div className="Home_join_section_Img_1">
            <img className=" " src={img1} alt="" />
          </div>
          <div className="Home_join_section_triangle">
            <img className=" " src={triangle} alt="" />
          </div>
          <div className="Home_join_section_Img_2">
            <img className=" " src={leaf} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home_join_section;
