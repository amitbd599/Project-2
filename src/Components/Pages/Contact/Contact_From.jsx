import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { ImMail } from "react-icons/im";
import { Link } from "react-router-dom";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Contact_Map from "./Contact_Map";

const Contact_From = () => {
  return (
    <>
      <Container className="contact_Form">
        <Row>
          <Col md={3}>
            <div className="wrap">
              <h3 className="fs-20 fw-bold theme-primary-color">
                Our Location
              </h3>
              <p className="text-muted mt-10">
                Washington Fulton Street, Suite 640 New York, NY 10010
              </p>
              <p className=" mt-10 theme-primary-color">
                {" "}
                <ImMail className="mr-5" /> +1 601 978 2212
              </p>
              <hr />
              <br />

              <h3 className="fs-20 fw-bold theme-primary-color">
                Our Location
              </h3>
              <p className="text-muted mt-10">
                Washington Fulton Street, Suite 640 New York, NY 10010
              </p>
              <p className=" mt-10 theme-primary-color"> admin@amitjs.com</p>
            </div>
          </Col>
          <Col md={9} className="part_2">
            <div className="wrap ml-40">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="name"
                  />
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="email mt-20"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    className="subject  mt-15"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Massage"
                    rows={5}
                    className="w-100"
                  />
                </Form.Group>
                <div className="mb-80 mt-30">
                  <Link className="theme-primary-bg my-btn-primary">SEND</Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="map">
        <Contact_Map></Contact_Map>
      </div>
    </>
  );
};

export default Contact_From;
