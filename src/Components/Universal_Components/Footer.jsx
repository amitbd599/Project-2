import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsFacebook,
  BsFillEnvelopeFill,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <Container className="  ">
        <Row className="pt-100">
          <Col md={3}>
            <div className="wrap">
              <h2 className="text-light fw-bold mb-20">Our Address</h2>

              <p className="theme-primary-color">
                {" "}
                <BsFillEnvelopeFill /> info@example.com
              </p>
              <p className="text-light mt-15">
                Lavaca Street, Suite 24, Road Apt New York, USA
              </p>
              <div className="social_icon">
                <ul className="mt-20">
                  <li>
                    <a href="#">
                      {" "}
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <BsLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <BsInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <BsYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="wrap secondPart">
              <h2 className="text-light fw-bold mb-20">Company</h2>
              <div className="linkId">
                <ul>
                  <li>
                    <a href="#">Feature</a>
                  </li>
                  <li>
                    <a href="#">Dashboard & Tool</a>
                  </li>
                  <li>
                    <a href="#">Our Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Our Portfolio</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Get In Touch</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="wrap secondPart">
              <h2 className="text-light fw-bold mb-20">Service</h2>
              <div className="linkId">
                <ul>
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Our Portfolio</a>
                  </li>
                  <li>
                    <a href="#">WordPress</a>
                  </li>
                  <li>
                    <a href="#">Online Marketing</a>
                  </li>
                  <li>
                    <a href="#">Content</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col md={3} className="Newsletter">
            <div className="wrap">
              <h2 className="text-light fw-bold mb-20">Newsletter</h2>
              <p className="text-light mt-15 text-justify">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur architecto doloribus labore. Autem, perspiciatis. Repudiandae eligendi excepturi facere, earum adipisci labore, dolores est debitis iure eum ut. Architecto tempora.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="wrap">
              <hr />
              <br />
              <div className="text text-center">
                <p className="text-light">© 2022 Saspik - All Rights Reserved Design by <a href="#" className="theme-primary-color">AmitJS</a></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
