import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../../Universal_Components/Header";
import Page_Info from "../../Universal_Components/Page_Info";
import imgFile from "../../../Image/1-3-1.jpg";
import AOS from "aos";
import { Link } from "react-router-dom";
import { BsCheckCircleFill, BsXCircleFill, BsYoutube } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import Carousel from "react-elastic-carousel";
import Footer from "../../Universal_Components/Footer";

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
      offset: "200",
    });
  }, []);
  return (
    <>
      {/* Header Section */}
      <Header></Header>

      {/* Page Info */}
      <Page_Info name="Services"></Page_Info>

      {/* Service Info */}

      <Container className="Service_part_1">
        <Row className="part_1">
          <Col md={6}>
            <div className="wrap">
              <img src={imgFile} alt="" />
              <div className="shape">
                <Link to={"/"}>
                  <BsYoutube />
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="wrap textFile">
              <h3 className="fs-20 fw-bold theme-primary-color">OUR SERVICE</h3>
              <h2 className="fs-40 fw-bold mt-20">
                We Offer the Best Business Solutions
              </h2>
              <p className="mt-20 fs-15 text-muted" data-aos="fade-up">
                Why I say old chap that is spiffing, bite your arm off geeza
                blag pukka bleeder A bit of how's your father bugger all mate
                gutted mate, cheesed off hunky-dory gosh morish get stuffed mate
                lemon squeezy. Bodge barmy bugger no biggie bleeding bits and
                bobs my good sir, spend a penny.!
              </p>
              <div className="mt-25" data-aos="fade-up">
                <Link className="theme-primary-bg my-btn-primary">
                  <FaArrowRight /> <span>Learn More</span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="part_2">
          <Col className="text-center mt-150 " data-aos="fade-up">
            <h3 className="fs-20 fw-bold theme-primary-color">OUR SERVICE</h3>
            <h2 className="fs-40 fw-bold mt-20">
              We Offer the Best Business Solutions
            </h2>
          </Col>
        </Row>
        <Row className="part_3">
          <Col md={4} className="mt-80" data-aos="fade-right">
            <div className="wrap ">
              <img
                className="w-25"
                src="https://i.ibb.co/KzDsk5S/image.png"
                alt=""
              />
              <h2 className="fs-20 fw-bold mt-10">App Development</h2>
              <p className="text-muted mt-15 fs-15">
                The full monty do one nancy boy say gutted mate cockup Why at
                public school.!
              </p>
            </div>
          </Col>
          <Col md={4} className="mt-80">
            <div className="wrap">
              <img
                className="w-25"
                src="https://i.ibb.co/V21bFj9/image.png"
                alt=""
              />
              <h2 className="fs-20 fw-bold mt-10">Customer Support</h2>
              <p className="text-muted mt-15 fs-15">
                The full monty do one nancy boy say gutted mate cockup Why at
                public school.!
              </p>
            </div>
          </Col>
          <Col md={4} className="mt-80">
            <div className="wrap" data-aos="fade-left">
              <img
                className="w-25"
                src="https://i.ibb.co/2hx3kkh/image.png"
                alt=""
              />
              <h2 className="fs-20 fw-bold mt-10">Customization</h2>
              <p className="text-muted mt-15 fs-15">
                The full monty do one nancy boy say gutted mate cockup Why at
                public school.!
              </p>
            </div>
          </Col>
          <Col md={4} className="mt-80">
            <div className="wrap" data-aos="fade-right">
              <img
                className="w-25"
                src="https://i.ibb.co/DKtSjyR/image.png"
                alt=""
              />
              <h2 className="fs-20 fw-bold mt-10">Cloud Data Saved</h2>
              <p className="text-muted mt-15 fs-15">
                The full monty do one nancy boy say gutted mate cockup Why at
                public school.!
              </p>
            </div>
          </Col>
          <Col md={4} className="mt-80">
            <div className="wrap">
              <img
                className="w-25"
                src="https://i.ibb.co/2qRq3Gp/image.png"
                alt=""
              />
              <h2 className="fs-20 fw-bold mt-10">App Development</h2>
              <p className="text-muted mt-15 fs-15">
                The full monty do one nancy boy say gutted mate cockup Why at
                public school.!
              </p>
            </div>
          </Col>
          <Col md={4} className="mt-80">
            <div className="wrap" data-aos="fade-left">
              <img
                className="w-25"
                src="https://i.ibb.co/yRgJvVT/image.png"
                alt=""
              />
              <h2 className="fs-20 fw-bold mt-10">App Development</h2>
              <p className="text-muted mt-15 fs-15">
                The full monty do one nancy boy say gutted mate cockup Why at
                public school.!
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Priceing Plan */}

      <Container fluid className="Service_Price_plan mt-100 ">
        <Container>
          <Row className="text-center part_1 pt-100">
            <Col data-aos="fade-up">
              <h3 className="fs-20 fw-bold theme-primary-color">
                PRICING PLAN
              </h3>
              <h2 className="fs-40 fw-bold mt-20">
                No Hidden Charges! Choose your Plan.
              </h2>
            </Col>
          </Row>

          <Row className="part_2 mt-130 pb-80">
            <Col md={4} className="pb-50">
              <div className="wrap">
                <div className="text-center">
                  <h2 className="fs-40 fw-bold theme-primary-color">$ 0</h2>
                  <h3 className="fs-20 mt-15 fw-bold">BASIC ACCOUNT</h3>
                  <p className="mt-10">Only for first month</p>
                </div>
                <br />

                <hr />

                <div className="listItem">
                  <p>
                    {" "}
                    <BsCheckCircleFill className="right" /> Limited Acess
                    Library
                  </p>
                  <p>
                    {" "}
                    <BsCheckCircleFill className="right" /> Single User
                  </p>
                  <p>
                    {" "}
                    <BsXCircleFill className="wrong" /> eCommerce Store
                  </p>
                  <p>
                    {" "}
                    <BsXCircleFill className="wrong" />
                    Hotline Support 24/7
                  </p>
                  <p>
                    {" "}
                    <BsXCircleFill className="wrong" />
                    Updates Version
                  </p>
                </div>
                <div className="mt-25 text-center">
                  <Link className="theme-primary-bg my-btn-primary">
                    <FaArrowRight /> <span>Purchase Now</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4} className="pb-50">
              <div className="wrap">
                <div className="text-center">
                  <h2 className="fs-40 fw-bold theme-primary-color">$ 20</h2>
                  <h3 className="fs-20 mt-15 fw-bold">BASIC ACCOUNT</h3>
                  <p className="mt-10">Only for first month</p>
                </div>
                <br />

                <hr />

                <div className="listItem">
                  <p>
                    {" "}
                    <BsCheckCircleFill className="right" /> Limited Acess
                    Library
                  </p>
                  <p>
                    {" "}
                    <BsCheckCircleFill className="right" /> Single User
                  </p>
                  <p>
                    {" "}
                    <BsCheckCircleFill className="right" /> eCommerce Store
                  </p>
                  <p>
                    {" "}
                    <BsCheckCircleFill className="right" /> Hotline Support 24/7
                  </p>
                  <p>
                    {" "}
                    <BsXCircleFill className="wrong" /> Updates Version
                  </p>
                </div>
                <div className="mt-25 text-center">
                  <Link className="theme-primary-bg my-btn-primary">
                    <FaArrowRight /> <span>Purchase Now</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4} className="pb-50">
              <div className="wrap">
                <div className="text-center">
                  <h2 className="fs-40 fw-bold theme-primary-color">$ 30</h2>
                  <h3 className="fs-20 mt-15 fw-bold">BASIC ACCOUNT</h3>
                  <p className="mt-10">Only for first month</p>
                </div>
                <br />

                <hr />

                <div className="listItem">
                  <p>
                    {" "}
                    <BsCheckCircleFill className="right" /> Limited Acess
                    Library
                  </p>
                  <p>
                    {" "}
                    <BsCheckCircleFill className="right" /> Single User
                  </p>
                  <p>
                    {" "}
                    <BsCheckCircleFill className="right" /> eCommerce Store
                  </p>
                  <p>
                    <BsCheckCircleFill className="right" /> Hotline Support 24/7
                  </p>
                  <p>
                    {" "}
                    <BsCheckCircleFill className="right" /> Updates Version
                  </p>
                </div>
                <div className="mt-25 text-center">
                  <Link className="theme-primary-bg my-btn-primary">
                    <FaArrowRight /> <span>Purchase Now</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* TESTIMONIAL */}

      <Container className="mt-100 testimonial">
        <Row>
          <Col data-aos="fade-up">
            <div className="wrap text-center mb-50">
              <h3 className=" fw-bold theme-primary-text-color">TESTIMONIAL</h3>
              <h2 className="fs-30 fw-bold mt-20">
                Mas de 3.400 en pixsaas para mejorar la gestion de ya sus
                asesorias{" "}
                <span className="theme-primary-color"> confian despachos </span>{" "}
                profesionales.
              </h2>
            </div>
          </Col>
        </Row>

        <Row className="mt-80 part_2">
          <Col>
            <Carousel itemsToShow={1}>
              <div className="slider">
                <div className="wrap d-flex">
                  <div className="relative imgSection">
                    <img src="https://i.ibb.co/8PnBBRt/image.png" alt="" />
                    <img
                      className="ImgFile d-none "
                      src="https://i.ibb.co/LrbTpv7/image.png"
                      alt=""
                    />
                  </div>
                  <div className="text ml-40 mt-15">
                    <h4 className="fs-25 fw-bold ">Alex Mola</h4>
                    <p className="mt-10 text-muted">Web Developer</p>
                    <p className="mt-10 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum incidunt obcaecati, dignissimos veritatis delectus
                      dolores magni soluta ipsa voluptates qui.
                    </p>
                  </div>
                </div>
              </div>
              <div className="slider">
                <div className="wrap d-flex">
                  <div className="relative imgSection">
                    <img src="https://i.ibb.co/JdS4wTS/image.png" alt="" />
                    <img
                      className="ImgFile"
                      src="https://i.ibb.co/LrbTpv7/image.png"
                      alt=""
                    />
                  </div>
                  <div className="text ml-40 mt-15">
                    <h4 className="fs-25 fw-bold ">Amit Biswas</h4>
                    <p className="mt-10 text-muted">React Developer</p>
                    <p className="mt-10 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum incidunt obcaecati, dignissimos veritatis delectus
                      dolores magni soluta ipsa voluptates qui.
                    </p>
                  </div>
                </div>
              </div>
              <div className="slider">
                <div className="wrap d-flex">
                  <div className="relative imgSection">
                    <img src="https://i.ibb.co/ww1CVfS/image.png" alt="" />
                    <img
                      className="ImgFile"
                      src="https://i.ibb.co/LrbTpv7/image.png"
                      alt=""
                    />
                  </div>
                  <div className="text ml-40 mt-15">
                    <h4 className="fs-25 fw-bold ">Moni Das</h4>
                    <p className="mt-10 text-muted">Web Developer</p>
                    <p className="mt-10 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eum incidunt obcaecati, dignissimos veritatis delectus
                      dolores magni soluta ipsa voluptates qui.
                    </p>
                  </div>
                </div>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>

      {/* Subscriber */}

      <Container fluid className="subscriber">
        <Container>
          <Row>
            <Col className="text-center wrap">
              <h2 className="fs-40 fw-bold text-light">Comprueba ahora como pixsaas trabaja para tu asesoria</h2>
              <p className="mt-20 fs-15 text-light">
                Solicita una demo personalizada para descubrir como pixsaas
                puede ayudarte a mejorar la gestion de los clientes de tu
                despacho profesional.
              </p>
              <Form className="mt-50">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control className="formControl" type="email" placeholder="name@example.com" />
                  <Link to={'/'} type='button' className="my-btn-primary fw-bold">Subscribe Now</Link>
                </Form.Group>
              </Form>
              <div className="shape" data-aos="zoom-in-down" >
              <svg class="circle"  data-parallax="{&quot;x&quot; : -200}" xmlns="http://www.w3.org/1999/xlink" width="950px" height="950px"><path fill-rule="evenodd" stroke="#dddddd14" stroke-width="100px" stroke-linecap="butt" stroke-linejoin="miter" fill="none" d="M450.000,50.000 C670.914,50.000 850.000,229.086 850.000,450.000 C850.000,670.914 670.914,850.000 450.000,850.000 C229.086,850.000 50.000,670.914 50.000,450.000 C50.000,229.086 229.086,50.000 450.000,50.000 Z"></path></svg>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default Service;
