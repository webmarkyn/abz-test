import React from "react";

import "./Jumbotron.scss";

const Jumbotron = () => (
  <div className="jumbotron jumbotron-banner">
    <div className="container">
      <h1>Test assignment for Frontend Developer position</h1>
      <p>
        We kindly remind you that your test assignment should be submitted as a
        link to github/bitbucket repository.{" "}
      </p>
      <a href="#" className="btn btn-cta">
        Sign up now
      </a>
    </div>
  </div>
);

export default Jumbotron;
