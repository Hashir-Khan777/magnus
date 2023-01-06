import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "../components";
import { About, Contact, Home, WebsiteDevelopment } from "../pages";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route caseSensitive path="/" element={<Home />} />
        <Route caseSensitive path="/about" element={<About />} />
        <Route caseSensitive path="/contactus" element={<Contact />} />
        <Route
          caseSensitive
          path="/services/websitedevelopment"
          element={<WebsiteDevelopment />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
