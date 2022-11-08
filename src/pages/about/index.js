import React from "react";
import { FaBuilding, FaChartBar, FaChartLine } from "react-icons/fa";
import { ImageBanner } from "../../components";

const About = () => {
  return (
    <div className="main">
      <ImageBanner
        headerContent={"About"}
        headerImage={"/images/slider2.jpg"}
      />
      <section className="about_section">
        <div className="container">
          <div className="about">
            <div className="about_image">
              <img src="./images/about.jpg" alt="" />
            </div>
            <div className="about_content">
              <h1>Why We Are Different?</h1>
              <div className="about_sub_content">
                <div className="about_sub_content_icon">
                  <FaBuilding />
                </div>
                <div className="about_sub_content_para">
                  <h3>Our Company</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply.
                  </p>
                </div>
              </div>
              <div className="about_sub_content">
                <div className="about_sub_content_icon">
                  <FaChartLine />
                </div>
                <div className="about_sub_content_para">
                  <h3>Our Success Mission</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply.
                  </p>
                </div>
              </div>
              <div className="about_sub_content">
                <div className="about_sub_content_icon">
                  <FaChartBar />
                </div>
                <div className="about_sub_content_para">
                  <h3>Our Future Plan</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_section">
        <div className="container">
          <h1 className="feature_section_heading">Our Contact</h1>
          <p className="feature_section_para">
            Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
          </p>
          <div className="contact">
            <form className="contact_form">
              <div className="name_email_conainer">
                <div>
                  <input required type="text" placeholder="Name" />
                </div>
                <div>
                  <input required type="email" placeholder="Email" />
                </div>
              </div>
              <div>
                <input required type="number" placeholder="Phone" />
              </div>
              <div>
                <textarea cols="30" rows="10" placeholder="Message"></textarea>
              </div>
              <button className="form_button">Submit Now</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
