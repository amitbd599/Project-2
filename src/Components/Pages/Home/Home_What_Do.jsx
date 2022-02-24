/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Home_Card_items from "./Home_Card_items";
import cardImg1 from "../../../Image/cardSheap1.png";
import cardImg2 from "../../../Image/cardSheap2.png";
import cardImg3 from "../../../Image/cardSheap3.png";

const Home_What_Do = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="what-we-do-text mb-100">
            <div className="wrap text-center" data-aos="fade-up">
              <h4 className="theme-primary-color font-weight-bold">WHAT WE DO</h4>
              <h2>How can we Help You</h2>
            </div>
          </Col>
        </Row>
        <Row data-aos="fade-up">
          
            <Home_Card_items
              img={cardImg1}
              title="Fully Secured"
              text="Compile organize,validate &submit claimsto be processed for fuel tax recovery"
            ></Home_Card_items>
            <Home_Card_items
              img={cardImg2}
              title="Easy to Edit"
              text="Compile organize,validate &submit claimsto be processed for fuel tax recovery"
            ></Home_Card_items>
            <Home_Card_items
              img={cardImg3}
              title="Design & Branding"
              text="Compile organize,validate &submit claimsto be processed for fuel tax recovery"
            ></Home_Card_items>
         
        </Row>
      </Container>
    </>
  );
};

export default Home_What_Do;
