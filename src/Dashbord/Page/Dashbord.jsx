import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dashbord_Header from "./Dashbord_Header";
import "../../Dashbord/Dashbord.css";

const Dashbord = () => {
  return (
    <div className="Dashbord">
      <>
        <Row>
          <Col className="headerSection" md={2}>
            <Dashbord_Header></Dashbord_Header>
          </Col>
          <Col className="" md={10}></Col>
        </Row>
      </>
    </div>
  );
};

export default Dashbord;
