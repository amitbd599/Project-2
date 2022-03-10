import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import Footer from "../../Universal_Components/Footer";
import Header from "../../Universal_Components/Header";
import Page_Info from "../../Universal_Components/Page_Info";

const Team = () => {
  const [data, setData] = useState([]);
console.log(data);
  useEffect(() => {
    const url = "DataBase/TeamData.json";
    axios.get(url).then((res) => setData(res.data));
  }, []);
  return (
    <>
      {/* Header Section */}
      <Header></Header>

      {/* Page Info */}

      <Page_Info name="Team"></Page_Info>

      {/* Team info */}

      <Container className="Home_Team">
        <Row>
          <Col>
            <div className="wrap text-center">
              <h3 className="fs-20 fw-bold theme-primary-color">
                MEET THE TEAM
              </h3>
              <h2 className="fs-40 fw-bold mt-20">Awesome Saaspik Team</h2>
            </div>
          </Col>
        </Row>
        <Row className="mt-80 ">
          {data.map((data) => (
            <Col md={4} key={data._id} className="mb-60">
              <div className="myCardTeam" >
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

      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default Team;
