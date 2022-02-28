import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
const TeamData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "DataBase/TeamData.json";
    axios.get(url).then((res) => setData(res.data.slice(0,3)));
  }, []);
  return (
    <Container className="Home_Team">
      <Row className="mt-150">
        <Col>
          <div className="wrap" data-aos="zoom-in">
            <h2 className=" fw-bold theme-primary-text-color">MEET OUR TEAM</h2>
            <h2 className="fs-30 fw-bold mt-20">Meet The Team</h2>
          </div>
        </Col>
      </Row>
      <Row className="mt-80">
        {data.map((data) => (
          <Col md={4} key={data._id}>
            <div className="myCardTeam" data-aos="fade-right">
              <div className="imageTeam">
                <img className="" src={data.img} alt="" />
                <div className="overlayImg"></div>
                <ul className="absolute">
                  <li>
                    <a href="#">
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsYoutube />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="textTeam mt-15 ml-20">
                <h2 className="fs-25 fw-bold">{data.name}</h2>
                <p className="text-muted">{data.position}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TeamData;
