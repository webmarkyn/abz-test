import React from "react";

import "./Jumbotron.scss";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-banner">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-8 text-md-left">
            <h1 className="mt-md-2">
              Test assignment for Frontend Developer position
            </h1>
            <p>
              {window.innerWidth >= 768
                ? `We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens`
                : `We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.`}
            </p>
            <a href="#registrationForm" className="btn btn-cta">
              Sign up now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
