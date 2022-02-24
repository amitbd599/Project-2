import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../../Universal_Components/Footer";
import Header from "../../Universal_Components/Header";
import Home_heroSection from "./Home_heroSection";
import Home_join_section from "./Home_join_section";
import Home_Patners from "./Home_Patners";
import Home_section_part_1 from "./Home_section_part_1";
import Home_Selected_Work from "./Home_Selected_Work";
import Home_Team from "./Home_Team";
import Home_What_Do from "./Home_What_Do";

const Home = () => {
  return (
    <>    
      <Header></Header>

      {/* Hero Section */}
      <Home_heroSection></Home_heroSection>

      {/* What we do */}
      <Home_What_Do></Home_What_Do>

      {/* SELECTED WORKS */}

      <Home_Selected_Work></Home_Selected_Work>

      {/* Section Part 1 */}

      <Home_section_part_1></Home_section_part_1>

      {/* Join section */}

      <Home_join_section></Home_join_section>

      {/* Meet the team */}

      <Home_Team></Home_Team>

      {/* Patner */}

      <Home_Patners></Home_Patners>

      {/* Footer */}
      
      <Footer></Footer>
    </>
  );
};

export default Home;
