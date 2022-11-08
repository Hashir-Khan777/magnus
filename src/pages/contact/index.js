import React from "react";

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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <section style={{ width: "49%" }}>
              {/* <div className="container"> */}
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
              {/* </div> */}
            </section>
            <section style={{ width: "49%" }}>
              <h1>abc</h1>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
