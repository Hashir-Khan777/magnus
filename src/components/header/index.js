import {
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/index.css";

const Header = () => {
  const { pathname } = useLocation();

  const openMenu = () => {
    document.querySelector(".nav_list").classList.toggle("active");
  };

  useEffect(() => {
    document.querySelector(".nav_list").classList.remove("active");
  }, [pathname]);

  return (
    <div className="header">
      <div className="first_navbar">
        <div className="container">
          <div className="first_navbar_info">
            <div className="phone_number_container">
              <FaPhoneAlt />
              <span>+92 326 8927308</span>
            </div>
            <div className="social_media_container">
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="second_navbar">
        <div className="container">
          <div className="second_navbar_info">
            <Link to="/" className="logo">
              <img loading="lazy" src="/images/magnus.png" alt="logo" />
            </Link>

            <div className="navbar_list">
              <ul className="nav_list">
                <li className="nav_links">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav_links">
                  <Link to="/about">About us</Link>
                </li>
                <li className="nav_links">
                  <span className="open_sub_list">
                    Services <FaChevronDown />
                  </span>
                  <div className="sub_list_section">
                    <Link to="/services/websitedevelopment">
                      Website development
                    </Link>
                    <Link to="/services/mobileappdevelopment">
                      Mobile app development
                    </Link>
                    <Link to="/services/searchengineoptimization">
                      Printing
                    </Link>
                    <Link to="/services/graphicdesigning">
                      Graphic designing
                    </Link>
                    <Link to="/services/brandmanagement">Production</Link>
                    <Link to="/services/digitalmarketing">
                      Digital marketing
                    </Link>
                  </div>
                </li>
                <li className="contact_us_link">
                  <Link to="/contactus">Contact us</Link>
                </li>
              </ul>
            </div>
            <button className="hamburger" onClick={openMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
