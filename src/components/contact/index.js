import React from "react";

const Contact = () => {
  return (
    <section className="contact_section">
      <div className="container">
        <h1 className="feature_section_heading">Our Contact</h1>
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
  );
};

export default Contact;
