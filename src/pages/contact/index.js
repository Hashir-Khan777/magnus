import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./css/index.css";

const Contact = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="contact_section">
          <h1 className="feature_section_heading">Our Contact</h1>
          <p className="feature_section_para">
            Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
          </p>
          <div className="contact_row">
            <section className="contact_form_col">
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
                    <textarea
                      cols="30"
                      rows="10"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button className="form_button">Submit Now</button>
                </form>
              </div>
            </section>
            <section className="contact_about_col">
              <div className="contact_card">
                <FaPhoneAlt />
                <div>
                  <h2>Call Us</h2>
                  <p>+92 326 8927308</p>
                </div>
              </div>
              <div className="contact_card">
                <FaEnvelope />
                <div>
                  <h2>Message Us</h2>
                  <p>magnusmediahouse@gmail.com</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
