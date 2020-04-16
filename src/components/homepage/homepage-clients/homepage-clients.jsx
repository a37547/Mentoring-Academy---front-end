import React from "react";
import logoipb from "../../../assets/logo-ipb.png";

const Clients = () => {
  return (
    <section id="clients">
      <div className="container">
        <div
          className="row wow fadeInUp"
          //style="visibility: visible; animation-name: fadeInUp;"
        >
          <div id="clientsImg" className="col-md-6">
            <img src={logoipb} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
