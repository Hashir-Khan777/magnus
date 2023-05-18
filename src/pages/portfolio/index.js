import React from "react";
import { ImageBanner } from "../../components";
import Contact from "../contact";

const Portfolio = () => {
  return (
    <div className="main">
      <ImageBanner
        headerContent={"Portfolio"}
        headerImage={"/images/slider2.jpg"}
      />
      <section className="portfolio_section">
        <img src="/images/portfolio1.jpg" width="100%" />
        <img src="/images/portfolio2.jpg" width="100%" />
        <img src="/images/portfolio3.jpg" width="100%" />
        <img src="/images/portfolio4.jpg" width="100%" />
        <img src="/images/portfolio5.jpg" width="100%" />
        <img src="/images/portfolio6.jpg" width="100%" />
        <img src="/images/portfolio7.jpg" width="100%" />
        <img src="/images/portfolio8.jpg" width="100%" />
        <img src="/images/portfolio9.jpg" width="100%" />
        <img src="/images/portfolio10.jpg" width="100%" />
      </section>
      <Contact />
    </div>
  );
};

export default Portfolio;
