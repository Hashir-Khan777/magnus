import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  const submit = async (e) => {
    e.preventDefault();
    if (
      form.name !== "" &&
      form.email !== "" &&
      form.number !== "" &&
      form.message !== ""
    ) {
      await addDoc(collection(getFirestore(), "contactForm"), {
        ...form,
        createdAt: new Date(),
      });
      setError();
      setResponse("Your response has been added");
      setForm({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    } else {
      setError("Please fill all the fields");
    }
  };

  return (
    <section className="contact_section">
      <div className="container">
        <h1 className="feature_section_heading">Our Contact</h1>
        {response ? (
          <div
            className="form_col"
            style={{
              color: "#ffffff",
              backgroundColor: "#4BB543",
              borderRadius: 3,
            }}
          >
            <p
              style={{
                padding: "10px 5px",
                fontSize: 16,
              }}
            >
              Your response has been added
            </p>
          </div>
        ) : null}

        {error ? (
          <div
            className="form_col"
            style={{
              color: "#ffffff",
              backgroundColor: "#FF0000",
              borderRadius: 3,
            }}
          >
            <p
              style={{
                padding: "10px 5px",
                fontSize: 16,
              }}
            >
              {error}
            </p>
          </div>
        ) : null}
        <div className="contact">
          <form className="contact_form" onSubmit={submit}>
            <div className="name_email_conainer">
              <div>
                <input
                  required
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div>
              <input
                required
                type="number"
                placeholder="Phone"
                value={form.number}
                onChange={(e) => setForm({ ...form, number: e.target.value })}
              />
            </div>
            <div>
              <textarea
                cols="30"
                rows="10"
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>
            <button className="form_button" type="submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
