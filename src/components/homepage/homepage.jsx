import React from "react";
import Intro from "./homepage-intro/homepage-intro";
import "./homepage-intro/homepage-intro.css";
import About from "./homepage-about/homepage-about";
import Mentoria from "./homepage-mentoria/homepage-mentoria";
import Tutoria from "./homepage-tutoria/homepage-tutoria";
import Workshop from "./homepage-workshop/homepage-workshop";
import Formacao from "./homepage-formacao/homepage-formacao";
import MoreFeatures from "./homepage-more-features/homepage-more-features";
import Clients from "./homepage-clients/homepage-clients";
import Faq from "./homepage-faq/homepage-faq";
import Footer from "./homepage-footer/homepage-footer";
import "./homepage-footer/homepage-footer.css";
import NavigationBar from "../navbar/navbar";
import "../navbar/navbar.css";

const Homepage = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Intro />
      <main id="main">
        <About />
        <Mentoria />
        <Tutoria />
        <Workshop />
        <Formacao />
        <MoreFeatures />
        <Clients />
        <Faq />
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Homepage;
