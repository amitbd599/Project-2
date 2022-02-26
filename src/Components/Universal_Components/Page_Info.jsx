import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Page_Info = (props) => {
  const { name } = props;
  console.log(name);
  return (
    <>
      <Container fluid className="Page_Info">
        <Row>
          <Col>
            <div className="shape" data-aos="zoom-in-right">
              <svg
                class="circle"
                data-parallax='{"x" : -200}'
                xmlns="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/1999/xlink"
                width="950px"
                height="950px"
              >
                <path
                  fill-rule="evenodd"
                  stroke="rgba(250, 112, 112, 0.051)"
                  stroke-width="100px"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill="none"
                  d="M450.000,50.000 C670.914,50.000 850.000,229.086 850.000,450.000 C850.000,670.914 670.914,850.000 450.000,850.000 C229.086,850.000 50.000,670.914 50.000,450.000 C50.000,229.086 229.086,50.000 450.000,50.000 Z"
                ></path>
              </svg>
            </div>
            <div className="animationPoint ">
                  <ul>
                      <li className=""></li>
                      <li></li>
                      <li></li>
                  </ul>
              </div>

            <div className="wrap">
              <h2>{name}</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Page_Info;
