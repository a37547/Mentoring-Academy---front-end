import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 text-lg-left text-center">
            <div className="copyright">
              <strong>Email:</strong> mentoringacademy@ipb.pt
            </div>
          </div>
          <div className="col-lg-9 text-lg-right text-right">
            <div className="copyright">
              Template:{" "}
              <a href="https://bootstrapmade.com/" target="_blank">
                BootstrapMade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
