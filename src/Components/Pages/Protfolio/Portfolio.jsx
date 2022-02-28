import React from "react";
import Footer from "../../Universal_Components/Footer";
import Header from "../../Universal_Components/Header";
import Page_Info from "../../Universal_Components/Page_Info";
import Protfolio_Data from "./Protfolio_Data";

const Portfolio = () => {
  return (
    <>
      {/* Header Section */}
      <Header></Header>

      {/* Page Info */}

      <Page_Info name="Portfolio"></Page_Info>

      {/* Portfolio Data */}

      <Protfolio_Data></Protfolio_Data>

      {/* Footer */}
      <Footer></Footer>
    </>
  );
};

export default Portfolio;
