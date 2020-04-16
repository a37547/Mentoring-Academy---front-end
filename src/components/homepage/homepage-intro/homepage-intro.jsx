import React from "react";
import logoIPB from "../../../assets/logo_ipb_branco.png";
import students1 from "../../../assets/students1.jpg";
import students2 from "../../../assets/students2.jpg";
import students3 from "../../../assets/students3.jpg";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-text">
        <p>
          <img src={logoIPB} alt="" />
        </p>
        <a
          href="#workshop"
          target="_blank"
          className="btn-get-started scrollto"
        >
          Inscrição Workshop Gestão do tempo e organização do trabalho
        </a>
        &nbsp;
        <Link
          /*href="boasvindas/index.html" //target="_blank" &nbsp;*/ className="btn-get-started scrollto"
          to={"/boasvindas"}
          target="_blank"
        >
          Guia de Boas-Vindas e Acolhimento aos novos alunos
        </Link>
      </div>
      <div className="product-screens">
        <div
          className="product-screen-1 wow fadeInUp"
          data-wow-delay="0.4s"
          data-wow-duration="0.6s"
          //style="visibility: visible; animation-duration: 0.6s; animation-delay: 0.4s; animation-name: fadeInUp;"
        >
          <img src={students1} alt="" />
        </div>
        <div
          className="product-screen-2 wow fadeInUp"
          data-wow-delay="0.2s"
          data-wow-duration="0.6s"
          //style="visibility: visible; animation-duration: 0.6s; animation-delay: 0.2s; animation-name: fadeInUp;"
        >
          <img src={students2} alt="" />
        </div>
        <div
          className="product-screen-3 wow fadeInUp"
          data-wow-duration="0.6s"
          //style="visibility: visible; animation-duration: 0.6s; animation-name: fadeInUp;"
        >
          <img src={students3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
