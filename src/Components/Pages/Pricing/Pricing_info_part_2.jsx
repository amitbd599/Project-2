import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Pricing_info_part_2 = () => {
  const [active, setActive] = useState(false);
  const pricing_tab_switcher = () => {
    setActive(!active);
  };
  return (
    <>
      <Container className="price_info Pricing_info_part_2 mt-100">
        <Row>
          <Col>
            <div className="wrap text-center">
              <h3 className="fs-20 fw-bold theme-primary-color">
                PRICING PLAN
              </h3>
              <h2 className="fs-40 fw-bold mt-20">
                What’s our monthly pricing subscription
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="toggleBar text-center ">
              <span className={active ? null : "theme-primary-color"}>
                Monthly
              </span>
              <span
                className={
                  active
                    ? "pricing-tab-switcher active"
                    : "pricing-tab-switcher"
                }
                onClick={pricing_tab_switcher}
              ></span>
              <span className={active ? "theme-primary-color" : null}>
                Yearly
              </span>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Priceing Plan */}

      <Container fluid className="Service_Price_plan pricing pricing_part_2 ">
        <Container>
          <Row className="part_2  pb-80">
            <Col md={4} className="pb-50">
              <div className="wrap">
                <div className="">
                  <h2 className="fs-40 fw-bold theme-primary-color">
                    {active ? "$ 50" : "$ 0"}
                  </h2>
                  <h3 className="fs-20 mt-15 fw-bold">BASIC ACCOUNT</h3>
                  <p className="mt-10">
                    {active ? "Only for one year" : "Only for first month"}
                  </p>
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
                <div className="mt-25 ">
                  <Link className="theme-primary-bg my-btn-primary">
                    <FaArrowRight /> <span>Purchase Now</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4} className="pb-50">
              <div className="wrap">
                <div className="">
                  <h2 className="fs-40 fw-bold theme-primary-color">
                    {active ? "$ 350" : "$ 60"}
                  </h2>
                  <h3 className="fs-20 mt-15 fw-bold">STANDART ACCOUNT</h3>
                  <p className="mt-10">
                    {active ? "Only for one year" : "Only for first month"}
                  </p>
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
                <div className="mt-25 ">
                  <Link className="theme-primary-bg my-btn-primary">
                    <FaArrowRight /> <span>Purchase Now</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4} className="pb-50">
              <div className="wrap">
                <div className="">
                  <h2 className="fs-40 fw-bold theme-primary-color">
                    {active ? "$ 750" : "$ 120"}
                  </h2>
                  <h3 className="fs-20 mt-15 fw-bold">PREMIUM ACCOUNT</h3>
                  <p className="mt-10">
                    {active ? "Only for one year" : "Only for first month"}
                  </p>
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
                <div className="mt-25 ">
                  <Link className="theme-primary-bg my-btn-primary">
                    <FaArrowRight /> <span>Purchase Now</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Pricing_info_part_2;
