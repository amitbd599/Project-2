import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookSquare, FaLinkedin, FaShareAlt, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Page_Info from "../../Universal_Components/Page_Info";
import SideBar from "../../Universal_Components/SideBar";

const Blog_Single_Data = () => {
  return (
    <Container className="Blog_Single_Data">
      <Row>
        <Col md={8} className="mt-60">
          <div className="wrap">
            <div className="imageFile">
              <img
                src="https://i.ibb.co/PY41Rj8/blog-post1-1-750x450.jpg"
                alt=""
              />
            </div>
            <div className="textFile">
              <h2 className="pt-50 fw-bold">Best Saaspik Tips You Will Read This Year</h2>
              <p className="text-muted">
                So I said knackered do one ummm I’m telling up the kyver arse
                over tit smashing lurgy lost the plot, owt to do with me
                plastered easy peasy chap it’s your round bobby twit say you
                mug, only a quid quaint I don’t want no agro spend a penny it’s
                all gone to pot what a plonker nice one. Up the duff lurgy
                gutted mate haggle only a quid have it crikey posh chancer some
                dodgy chav, cor blimey guvnor bog up the kyver William brilliant
                lavatory absolutely bladdered no biggie, wind up buggered
                bleeding morish bum bag butty spiffing good time super. Naff the
                little rotter down the pub happy days cheeky butty cup of char
                on your bike mate chinwag I blimey Elizabeth blag bobby cheers
                ummm I’m telling, bleeding nice one bog old up the duff chip
                shop ruddy cras tosser bog-standard zonked A bit of how’s your
                father sloshed. Spend a penny cack tosser cheeky tickety-boo
                only a quid Elizabeth ruddy cup of char, ummm I’m telling it’s
                your round arse bamboozled.!
              </p>
            </div>
            <div className="Popular_Tags mt-50">
              <div className="wrap">
                  <span className="fs-25 fw-bold">Tages : </span>
                <Link to={"/"} className= "theme-primary-bg my-btn-primary">
                  Branding
                </Link>

                <Link to={"/"} className="theme-primary-bg my-btn-primary">
                  Design
                </Link>

                <Link to={"/"} className="theme-primary-bg my-btn-primary">
                  Landing
                </Link>

                <Link to={"/"} className="theme-primary-bg my-btn-primary">
                  The Saas
                </Link>

                
              </div>
              <hr />
              <div className="share d-flex align-items-center justify-content-between pb-100">
                  <p className="fs-15 fw-bold">Share <FaShareAlt/></p>
                  <div className="iconBox">
                    <Link to={'/'}>  <FaFacebookSquare/></Link>
                    <Link to={'/'}>  <FaTwitterSquare/></Link>
                    <Link to={'/'}>  <FaWhatsappSquare/></Link>
                    <Link to={'/'}>  <FaLinkedin/></Link>
                      
                  </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
                <SideBar></SideBar>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog_Single_Data;
