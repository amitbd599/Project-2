import React, { useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import selectedApp1 from "../../../Image/selectApp1.jpg";
import selectedApp2 from "../../../Image/selectApp2.jpg";
import dotImg from "../../../Image/dot.png";
import { Link } from "react-router-dom";
import { BiDesktop } from "react-icons/bi";
import { BiCustomize } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { useParallax } from "react-scroll-parallax";

const Home_Selected_Work = () => {
  const [ img, setImg ] = useState(true);
  const [isDisabled, setDisabled] = useState(false);


  const hendelButton=(e)=>{
    setDisabled(true);
    setImg(!img);
  }
  
  return (
    <>
    <div className="Home_Selected_Work ">
      <Container
        fluid
        className=" Home_Selected_Work_container theme-secondary-color "
      >
        <Container>
          <Row>
            <Col sm={5} className='part_1'>
              <div className="wrap">
                <h5 className=" fw-bold theme-primary-text-color">
                  SELECTED WORKS
                </h5>
                <h2 className="fs-30 fw-bold mt-20" data-aos="fade-up">
                  Get to the best outcome.
                </h2>
                <p className="fs-15 text-muted mt-10">
                  Some dodgy chav bugger all mate pukka bonnet jolly good
                  codswallop that bog.!
                </p>
                <div className="mt-30 button_1">
                  <div>
                    <span  className={`${!img ? 'theme-primary-outline-bg theme-primary-bg  my-btn-primary rounded-pill' :'theme-primary-bg  my-btn-primary rounded-pill' }`}  onClick={hendelButton} >
                      <BiDesktop></BiDesktop> {`${img? "Website/App Design": "WebDev/UI Designer"}`}
                    </span>
                  
                  </div>
                  <div className="mt-30 button_2">
                    <Link className="theme-primary-bg my-btn-primary rounded-pill">
                      <BsYoutube /> View On Youtube
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={7} className="relative" className="part_2">
              <div id='img' className="selectedAppImg">
               {
                 img ?  <img className="img-fluid" src={selectedApp1} alt="" /> : <img className="img-fluid" src={selectedApp2} alt="" />
               }
              </div>
              <div>
                <img className="absolute dotImg" src={dotImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
 
    </>
  );
};

export default Home_Selected_Work;
