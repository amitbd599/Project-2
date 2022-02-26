import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Subscriber = () => {
    return (
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
    );
};

export default Subscriber;