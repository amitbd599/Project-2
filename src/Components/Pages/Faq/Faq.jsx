import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../Universal_Components/Footer";
import Header from "../../Universal_Components/Header";
import Page_Info from "../../Universal_Components/Page_Info";
import Faq_data from "./Faq_data";

const Faq = () => {
  return (
    <>
      {/* Header Section */}

      <Header></Header>

      {/* Page Info */}
      <Page_Info name="Questions & Asked"></Page_Info>

      {/* Ans and ques */}

      <Faq_data></Faq_data>


      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default Faq;
