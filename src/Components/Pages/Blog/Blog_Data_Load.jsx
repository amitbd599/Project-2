import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blog_Data_Load = () => {
  return (
    <Container className="Blog_Data_Load">
      <Row>
        <Col md={8} className="BlogSection mb-50">
          <div className="wrap">
            <div className="imageFile">
                <img src='https://saaspik-wp.pixelsigns.art/wp-content/uploads/2019/08/blog-post1-1-750x450.jpg' alt="" />
                
              
              <p className="time fs-15 text-muted mt-10">
                <Link to={"/"} className="text-muted">AUGUST 24, 2019</Link> |{" "}
                <Link to={"/"} className="text-muted">No Comment</Link> | 
                <Link to={"/"} className="text-muted">APP & SAAS, WEB DESIGN</Link> | 
              </p>
              <h2 className="fs-30 fw-bold mt-10">
                Best Saaspik Tips You Will Read This Year
              </h2>
              <p className="">
                So I said knackered do one ummm I'm telling up the kyver arse
                over tit smashing lurgy lost the plot, owt to do with me
                plastered easy peasy
              </p>
              <div className="mt-30">
              <Link className="theme-primary-bg my-btn-primary">
                Sign Up Free
              </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default Blog_Data_Load;
