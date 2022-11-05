import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./css/index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_content">
          <div className="footer_about_us_content">
            <div className="footer_about_us_content_container">
              <img
                className="footer_logo"
                loading="lazy"
                src="/images/magnus.png"
              />
              <p className="footer_about_us_para">
                There are many vari of pass of lorem ipsum availab majority have
                suffered in some form by injected humour or words.
              </p>
              <div className="footer_social_icons">
                <div className="footer_social_icon_container">
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
            <div className="footer_web_links">
              <h1>Services</h1>
              <ul>
                <li>
                  <Link to="/services/websitedevelopment">
                    Website development
                  </Link>
                </li>
                <li>
                  <Link to="/services/mobileappdevelopment">
                    Mobile app development
                  </Link>
                </li>
                <li>
                  <Link to="/services/searchengineoptimization">
                    Search engine opimization (SEO)
                  </Link>
                </li>
                <li>
                  <Link to="/services/graphicdesigning">Graphic designing</Link>
                </li>
                <li>
                  <Link to="/services/brandmanagement">Brand management</Link>
                </li>
                <li>
                  <Link to="/services/digitalmarketing">Digital marketing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_contact_content">
            <div className="footer_contact_container">
              <h1>Contact</h1>
              <div className="phone_number_container footer_phone_container">
                <FaPhoneAlt />
                <span>+92 326 8927308</span>
              </div>
              <div className="phone_number_container footer_phone_container">
                <FaEnvelope />
                <span>magnusmediahouse@gmail.com</span>
              </div>
            </div>
            <div className="newsletter_container">
              <h1>Newsletter</h1>
              <p>Subscribe to Our Newsletter for Daily News and Updates</p>
              <form>
                <input type="email" required placeholder="Email Address" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="boder_bottom"></div>
        <div className="copyright_section">
          <p>Copyright © Magnus Media House</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
