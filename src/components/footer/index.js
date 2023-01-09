import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./css/index.css";

const Footer = () => {
  const [form, setForm] = useState({ email: "" });

  const submit = async (e) => {
    e.preventDefault();
    if (form.email !== "") {
      await addDoc(collection(getFirestore(), "newsLetter"), {
        ...form,
        createdAt: new Date(),
      });
      setForm({ email: "" });
    }
  };

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
                  <a
                    href="https://www.facebook.com/profile.php?id=100088833297820&mibextid=ZbWKwL"
                    target="_facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/magnus.mediahouse/?igshid=OGQ2MjdiOTE%3D"
                    target="_instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=923268927308"
                    target="_whatsapp"
                  >
                    <FaWhatsapp />
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
              <form onSubmit={submit}>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
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
