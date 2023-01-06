import React from "react";
import { ImageBanner } from "../../components";
import "./css/index.css";

const WebsiteDevelopment = () => {
  return (
    <div className="main">
      <ImageBanner
        headerContent={"Website Development"}
        headerImage={"/images/slider2.jpg"}
      />
      <div className="container">
        <div className="one_service_row">
          <div className="one_service_col">
            <img src="/images/slider2.jpg" loading="lazy" alt="" />
          </div>
          <div className="one_service_col">
            <p>
              Web design is one of the essential things we consider in our
              design lab for websites when developing a brand to outdo the
              competition. With the majority of the population well-informed to
              use the internet, it's essential to make sure your company is
              also. Lucky for you, at Mellontical solutions, we provide custom
              and expert web design solutions to your company. Websites aren't
              something new at this time However, you should have the right
              knowledge before you begin developing one. Mellontical solutions
              are available to handle this complicated business and not make you
              a burden.
            </p>
          </div>
        </div>
        <div className="web_services">
          <h1 className="website_service_heading">website services</h1>
          <div className="our_web_services_row">
            <div className="our_web_services_col">
              <div className="web_service_card">
                <div className="icon">
                  {/* <FontAwesomeIcon icon={faEdit} className="card_icon" /> */}
                </div>
                <h3>custom dynamic platforms</h3>
              </div>
            </div>
            <div className="our_web_services_col">
              <div className="web_service_card">
                <div className="icon">
                  {/* <FontAwesomeIcon icon={faBitcoin} className="card_icon" /> */}
                </div>
                <h3>cryptocurrency website</h3>
              </div>
            </div>
            <div className="our_web_services_col">
              <div className="web_service_card">
                <div className="icon">
                  {/* <FontAwesomeIcon icon={faMobileAlt} className="card_icon" /> */}
                </div>
                <h3>responsive designs</h3>
              </div>
            </div>
            <div className="our_web_services_col">
              <div className="web_service_card">
                <div className="icon">
                  {/* <FontAwesomeIcon icon={faShoppingCart} className="card_icon" /> */}
                </div>
                <h3>business & e-commerce</h3>
              </div>
            </div>
            <div className="our_web_services_col">
              <div className="web_service_card">
                <div className="icon">
                  {/* <FontAwesomeIcon icon={faGoogleWallet} className="card_icon" /> */}
                </div>
                <h3>wallet integration</h3>
              </div>
            </div>
            <div className="our_web_services_col">
              <div className="web_service_card">
                <div className="icon">
                  {/* <FontAwesomeIcon icon={faCode} className="card_icon" /> */}
                </div>
                <h3>react, node, mongodb</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
