import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="ml-20">
      <div>
        <form class="search-form">
          <label>
            <span class="screen-reader-text">Search for:</span>
            <input type="text" class="search-field" placeholder="Search..." />
          </label>
          <button type="submit" class="search-submit">
            <FaSearch className="theme-primary-color"></FaSearch>
            <span class="screen-reader-text">Search</span>
          </button>
        </form>
      </div>

      {/* Recent  post */}

      <div className="postRecent mt-30">
        <div className="wrap d-flex mt-30">
          <span>
            <img
              src="https://i.ibb.co/pRJHKB5/blog-post4-1-150x150.jpg"
              alt=""
            />
          </span>
          <div>
            <Link to={"/"}>
              <h3 className="fs-18 fw-bold theme-primary-color-hover">
                Best Saaspik Tips You Will Read This Year
              </h3>
            </Link>
            <p className="text-muted">August 24, 2019</p>
          </div>
        </div>
        <div className="wrap d-flex mt-30">
          <span>
            <img
              src="https://i.ibb.co/pRJHKB5/blog-post4-1-150x150.jpg"
              alt=""
            />
          </span>
          <div>
            <Link to={"/"}>
              <h3 className="fs-18 fw-bold theme-primary-color-hover">
                Best Saaspik Tips You Will Read This Year
              </h3>
            </Link>
            <p className="text-muted">August 24, 2019</p>
          </div>
        </div>
        <div className="wrap d-flex mt-30">
          <span>
            <img
              src="https://i.ibb.co/pRJHKB5/blog-post4-1-150x150.jpg"
              alt=""
            />
          </span>
          <div>
            <Link to={"/"}>
              <h3 className="fs-18 fw-bold theme-primary-color-hover">
                Best Saaspik Tips You Will Read This Year
              </h3>
            </Link>
            <p className="text-muted">August 24, 2019</p>
          </div>
        </div>
      </div>

      {/* Categories */}

      <div className="Categories mt-40 ">
        <div className="wrap">
          <h2 className="fs-30 fw-bold">Categories</h2>
          <div>
            <ul className="mt-20">
              <li>
                <a href="#">App & Saas (3)</a>
              </li>
              <li>
                <a href="#">Fresh Products (1)</a>
              </li>
              <li>
                <a href="#">Graphics (3)</a>
              </li>
              <li>
                <a href="#">IOS/Android Design (3)</a>
              </li>
              <li>
                <a href="#">Saas Design (3)</a>
              </li>
              <li>
                <a href="#">Web Design (3)</a>
              </li>
              <li>
                <a href="#">Web Development (1)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Popular Tags */}

      <div className="Popular_Tags mt-50">
        <div className="wrap">
         
            <Link to={"/"} className="theme-primary-bg my-btn-primary">
              Branding
            </Link>
         
            <Link to={"/"} className="theme-primary-bg my-btn-primary">
            Design
            </Link>
         
            <Link to={"/"} className="theme-primary-bg my-btn-primary">
            Landing
            </Link>
         
            <Link to={"/"} className="theme-primary-bg my-btn-primary">
            The Saas
            </Link>
         
            <Link to={"/"} className="theme-primary-bg my-btn-primary">
              Software developer
            </Link>
         
            <Link to={"/"} className="theme-primary-bg my-btn-primary">
              WebSite
            </Link>
         
        </div>
      </div>
    </div>
  );
};

export default SideBar;
