import { Wrapper } from "@googlemaps/react-wrapper";
import googleMapReact from "google-map-react";
import React from "react";
import Footer from "../../Universal_Components/Footer";
import Header from "../../Universal_Components/Header";
import Page_Info from "../../Universal_Components/Page_Info";
import Contact_From from "./Contact_From";

const Contact = () => {
  return (
    <>
      {/* Header section */}

      <Header></Header>

      {/* Page info */}

      <Page_Info name="Contact"></Page_Info>

      {/* Contact from data*/}

      <Contact_From></Contact_From>

      {/* footer */}

      <googleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBDT7r2QNoiPFHtEGzIH7TNjfgKwpqgiTE"}}
        >
          
        </googleMapReact>
            
      <Footer></Footer>
    </>
  );
};

export default Contact;
