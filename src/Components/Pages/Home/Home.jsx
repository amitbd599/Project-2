import React from "react";
import Footer from "../../Universal_Components/Footer";
import Header from "../../Universal_Components/Header";
import Home_heroSection from "./Home_heroSection";
import Home_What_Do from "./Home_What_Do";

const Home = () => {
  return (
    <>
      <Header></Header>

      {/* Hero Section */}
      <Home_heroSection></Home_heroSection>

      {/* What we do */}
      <Home_What_Do></Home_What_Do>
      
      <Footer></Footer>
    </>
  );
};

export default Home;
