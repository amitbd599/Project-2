import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import img_1 from "../../../Image/logo/17-1.png";
import img_2 from "../../../Image/logo/18-1.png";
import img_3 from "../../../Image/logo/19-1.png";
import img_4 from "../../../Image/logo/20-1.png";
import img_5 from "../../../Image/logo/21-1.png";
import img_6 from "../../../Image/logo/22-1.png";
import img_7 from "../../../Image/logo/23-1.png";
import img_8 from "../../../Image/logo/24-1.png";
import img_9 from "../../../Image/logo/25-1.png";
import img_10 from "../../../Image/logo/app1-1.png";

const Home_Patners = () => {
  return (
    <>
      <Container className="Home_Patner mb-150">
        <Row className="mt-150">
          <Col md={6}>
            <div className="wrap" data-aos="fade-up">
              <h2 className=" fw-bold theme-primary-text-color">OUR CLIENTS</h2>
              <h2 className="fs-30 fw-bold mt-20">Our Partners</h2>
              <p className="fs-15 text-muted">
                Mufty chimney pot a blinding shot posh A bit of how's your
                father barney don't get shirty with me, nice one it's all gone.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-50">
          <Col>
            <Marquee gradient={false}>
              <img src={img_1} alt="" />
              <img src={img_2} alt="" />
              <img src={img_3} alt="" />
              <img src={img_4} alt="" />
              <img src={img_5} alt="" />
              <img src={img_6} alt="" />
              <img src={img_7} alt="" />
              <img src={img_8} alt="" />
              <img src={img_9} alt="" />
              <img src={img_10} alt="" />
            </Marquee>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home_Patners;
