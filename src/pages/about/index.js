import React from "react";
import { FaBuilding, FaChartBar, FaChartLine } from "react-icons/fa";
import { Contact, ImageBanner } from "../../components";

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
              <h1 className="about_contant_heading">Why We Are Different?</h1>
              <div className="about_sub_content">
                <div className="about_sub_content_icon">
                  <FaBuilding />
                </div>
                <div className="about_sub_content_para">
                  <h3>Our Company</h3>
                  <p>
                    We are a digital media house thinks Like A Machine Brain. To
                    Grow Your Business. We aim to grow your business.
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
                    We aim to make business easy for you and to make your
                    business more efficient and profitable.
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
                    Our future plan is to bring your business on the second step
                    of success and make people talk about your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default About;
