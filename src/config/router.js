import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "../components";
import { Home } from "../pages";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route caseSensitive path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
