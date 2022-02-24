import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";
import test_1 from "../../../Image/test_1.jpg";
import test_2 from "../../../Image/test_2.jpg";
import test_3 from "../../../Image/test_3.jpg";
import quote from "../../../Image/quote.png";

const About_Testimonial = () => {
  return (
    <Container fluid className="About_Testimonial mt-100">
      <Row>
        <Col className="part_1 mt-120" data-aos="fade-up">
          <div className="wrap text-center">
            <h3 className="fs-20 fw-bold theme-primary-color ">TESTIMONIAL</h3>
            <h2 className="fs-30 fw-bold mt-20">
              What our client say about us
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="pt-80 pb-80">
        <Marquee gradient={false} pauseOnClick={true} play={false}>
          <div className="testimonialSlider">
            <div className="wrap">
              <div className="d-flex">
                <img src={test_1} className="rounded-circle mr-20" alt="" />
                <div className="mt-10">
                  <h3 className="fw-bold">Kilka Ena</h3>
                  <p>Web Developer ReactJS</p>
                </div>
              </div>
              <p className="mt-30 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente doloribus, illo impedit quis deserunt exercitationem
                rem nesciunt dicta. Accusantium totam reiciendis dicta laborum,
                voluptates laudantium beatae dolore adipisci! Ex, magni dolores.
                Quisquam at, rem quod necessitatibus eos maiores, neque earum
                amet
              </p>
              <div className="ratePoint">
                <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
              <div className="quote">
                <img src={quote} alt="" />
              </div>
            </div>
          </div>

          <div className="testimonialSlider">
            <div className="wrap">
              <div className="d-flex">
                <img src={test_2} className="rounded-circle mr-20" alt="" />
                <div className="mt-10">
                  <h3 className="fw-bold">Ankl Dono</h3>
                  <p>Software Developer </p>
                </div>
              </div>
              <p className="mt-30 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente doloribus, illo impedit quis deserunt exercitationem
                rem nesciunt dicta. Accusantium totam reiciendis dicta laborum,
                voluptates laudantium beatae dolore adipisci! Ex, magni dolores.
                Quisquam at, rem quod necessitatibus eos maiores, neque earum
                amet
              </p>
              <div className="ratePoint">
                <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
            <div className="quote">
              <img src={quote} alt="" />
            </div>
          </div>

          <div className="testimonialSlider">
            <div className="wrap">
              <div className="d-flex">
                <img src={test_3} className="rounded-circle mr-20" alt="" />
                <div className="mt-10">
                  <h3 className="fw-bold">Alex Jon</h3>
                  <p>Game Developer </p>
                </div>
              </div>
              <p className="mt-30 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente doloribus, illo impedit quis deserunt exercitationem
                rem nesciunt dicta. Accusantium totam reiciendis dicta laborum,
                voluptates laudantium beatae dolore adipisci! Ex, magni dolores.
                Quisquam at, rem quod necessitatibus eos maiores, neque earum
                amet
              </p>
              <div className="ratePoint">
                <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
              <div className="quote">
                <img src={quote} alt="" />
              </div>
            </div>
          </div>
        </Marquee>
      </Row>
    </Container>
  );
};

export default About_Testimonial;
