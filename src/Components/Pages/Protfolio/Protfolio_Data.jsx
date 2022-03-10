import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import myData from "./Portfolio_data";



const Protfolio_Data = () => {
    
    
const [active, setActive]= useState(false);
    const [data, setData]=useState(myData);
    

   const hendelClick=(value)=>{
    
    const  upDateData= myData.filter((curValue)=>{
        return curValue.position ===value;
    }) ;
    setData(upDateData);
    setActive(!active);
  
}
  return <Container className="portfolio_data text-center">
      <Row className="part_1">
          <Col>
            <div className="wrap">
                    <p className={active? "" :null} onClick={()=>setData(myData)}>All Works</p>
                    <p className={active? "Branding" :null} onClick={()=>hendelClick('Branding')}>Branding</p>
                    <p className={active? "Design" :null} onClick={()=>hendelClick('Design')}> Design</p>
                    <p className={active? "" :null} onClick={()=>hendelClick('Development')}> Development</p>
                    <p className={active? "" :null} onClick={()=>hendelClick('Ecommerce')}> Ecommerce</p>
                    
            </div>
            <div className="navbar">
        
      </div>

          </Col>
      </Row>

      <Row className="part_2 mb-80 mt-50">
          {
              data.map((data)=> <Col md={4}>
              <div className="wrap">
                  <img src={data.img} alt="" />
                  <div className="text">
                  <h2 className="fs-25 fw-bold text-light">{data.name}</h2>
                  <p className="text-light">{data.position}</p>
               
                  </div>
                  <div className="overFlow"></div>
              </div>
            </Col>)
          }
         
      </Row>
  </Container>;
};

export default Protfolio_Data;
