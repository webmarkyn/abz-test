import React from "react";

import { ReactComponent as AboutImage } from "./assets/man-laptop-v1.svg";

import "./About.scss";

const About = () => (
  <section className="about">
    <div className="container">
      <div className="row text-center">
        <h1>Let's get acquainted</h1>
        <div className="col-12 about-image">
          <AboutImage style={{ width: "290px" }} />
        </div>
        <div className="col-12 about-text">
          <h2 className="text-center">I am cool frontend developer</h2>
          <p>
            We will evaluate how clean your approach to writing CSS and
            Javascript code is. You can use any CSS and Javascript 3rd party
            libraries without any restriction.
          </p>
          <p>
            If 3rd party css/javascript libraries are added to the project via
            bower/npm/yarn you will get bonus points. If you use any task runner
            (gulp/webpack) you will get bonus points as well. Slice service
            directory page P​SD mockup​ into HTML5/CSS3.
          </p>
          <a href="#" className="about-text-cta d-block text-center">
            Sign up now
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
