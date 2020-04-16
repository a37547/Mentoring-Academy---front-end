import React from "react";
import Intro from "./homepage-intro/homepage-intro";
import "./homepage-intro/homepage-intro.css";
import About from "./homepage-about/homepage-about";
import "./homepage-about/homepage-about.css";
import Mentoria from "./homepage-mentoria/homepage-mentoria";
import "./homepage-mentoria/homepage-mentoria.css";
import Tutoria from "./homepage-tutoria/homepage-tutoria";
import "./homepage-tutoria/homepage-tutoria.css";
import Workshop from "./homepage-workshop/homepage-workshop";
import "./homepage-workshop/homepage-workshop.css";
import Formacao from "./homepage-formacao/homepage-formacao";
import "./homepage-formacao/homepage-formacao.css";
import MoreFeatures from "./homepage-more-features/homepage-more-features";
import "./homepage-more-features/homepage-more-features.css";
import Clients from "./homepage-clients/homepage-clients";
import "./homepage-clients/homepage-clients.css";
import Faq from "./homepage-faq/homepage-faq";
import "./homepage-faq/homepage-faq.css";
import Footer from "./homepage-footer/homepage-footer";
import "./homepage-footer/homepage-footer.css";
import Navbar from "../navbar/navbar";
import "../navbar/navbar.css";

const Homepage = () => {
  return (
    <React.Fragment>
      <Navbar />
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
