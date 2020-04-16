import React from "react";
import students1 from "../../../assets/students1.jpg";
import students2 from "../../../assets/students2.jpg";
import students3 from "../../../assets/students3.jpg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro-text">
        <h2>Guia de Boas-Vindas e Acolhimento aos Novos Alunos</h2>
        <p>Instituto Politécnico de Bragança</p>
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
