import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import myData from "./Portfolio_data";



const Protfolio_Data = () => {
    

    const [data, setData]=useState(myData);
    

   const hendelClick=(value)=>{
    const  upDateData= myData.filter((curValue)=>{
        return curValue.position ===value;
    }) ;
    setData(upDateData);
}
  return <Container className="portfolio_data text-center">
      <Row className="part_1">
          <Col>
            <div className="wrap">
                    <p onClick={()=>setData(myData)}>All Works</p>
                    <p onClick={()=>hendelClick('designer')}>Branding</p>
                    <p onClick={()=>hendelClick('developer')}> Design</p>
                    <p> Development</p>
                    <p> Ecommerce</p>
                    <p> Development</p>
                    <p> Marketing</p>
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
