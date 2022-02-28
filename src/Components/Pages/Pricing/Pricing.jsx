import React from "react";
import Footer from "../../Universal_Components/Footer";
import Header from "../../Universal_Components/Header";
import Page_Info from "../../Universal_Components/Page_Info";
import Subscriber from "../Service/Subscriber";
import Pricing_info from "./Pricing_info";
import Pricing_info_part_2 from "./Pricing_info_part_2";

const Pricing = () => {
  return (
    <>
      {/* Header Section */}
      <Header></Header>

      {/* Page Info */}

      <Page_Info name="Pricing"></Page_Info>

      {/* Pricing Info */}

      <Pricing_info></Pricing_info>

      {/* Subscriber */}

      <Subscriber></Subscriber>

      {/* Pricing  info part 2 */}

      <Pricing_info_part_2></Pricing_info_part_2>

      {/* Footer */}

      <Footer></Footer>
    </>
  );
};

export default Pricing;
