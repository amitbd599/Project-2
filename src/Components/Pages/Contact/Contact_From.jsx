import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { ImMail } from "react-icons/im";

const Contact_From = () => {
  return (
    <Container className="contact_Form">
      <Row>
        <Col md={3}>
          <div className="wrap">
            <h3 className="fs-20 fw-bold theme-primary-color">Our Location</h3>
            <p className="text-muted mt-10">
              Washington Fulton Street, Suite 640 New York, NY 10010
            </p>
            <p className=" mt-10 theme-primary-color">
              {" "}
              <ImMail className="mr-5" /> +1 601 978 2212
            </p>
            <hr />
            <br />

            <h3 className="fs-20 fw-bold theme-primary-color">Our Location</h3>
            <p className="text-muted mt-10">
              Washington Fulton Street, Suite 640 New York, NY 10010
            </p>
            <p className=" mt-10 theme-primary-color"> admin@amitjs.com</p>
          </div>
        </Col>
        <Col md={9}>
          <div className="wrap">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="name@example.com" />
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact_From;
