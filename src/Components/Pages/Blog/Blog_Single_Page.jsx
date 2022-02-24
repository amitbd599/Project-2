import React from "react";
import Footer from "../../Universal_Components/Footer";
import Header from "../../Universal_Components/Header";
import Page_Info from "../../Universal_Components/Page_Info";
import Blog_Single_Data from "./Blog_Single_Data";

const Blog_Single_Page = () => {
  return (
    <>
      {/* Header Section */}
      <Header></Header>

      {/* PAge Info */}

      <Page_Info name="Single Blog"></Page_Info>
      {/* Blog Single Data */}

        <Blog_Single_Data></Blog_Single_Data>

        {/* Footer */}

        <Footer></Footer>


      
    </>
  );
};

export default Blog_Single_Page;
