import React, { FormEvent } from "react";

import "./RegistrationForm.scss";

const RegistrationForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="registration-form" id="registrationForm">
      <div className="container text-center">
        <div className="row">
          <h1>Register to get a work</h1>
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <p>
              Attention! After successful registration and alert, update the
              list of users in the block from the top
            </p>
            <form onSubmit={handleSubmit} className="text-left">
              <div className="form-group">
                <label htmlFor="nameInput">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  placeholder="Your name"
                />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="nameInput">Phone number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneInput"
                  placeholder="+380 XX XXX XX XX"
                />
                <small>Enter phone number in open format</small>
              </div>
              <div className="form-radio">
                <h4 className="form-title">Select your position</h4>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio1"
                    name="Frontend developer"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio1"
                  >
                    Frontend developer
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio2"
                    name="Backend developer"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio2"
                  >
                    Backend developer
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio3"
                    name="Designer"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio3"
                  >
                    Designer
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio4"
                    name="QA"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadio4"
                  >
                    QA
                  </label>
                </div>
              </div>
              <div className="photo-upload">
                <h4 className="form-title">Photo</h4>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Upload your photo
                  </label>
                </div>
              </div>
              <div className="form-submit text-center">
                <button
                  type="submit"
                  className="btn btn-cta text-center"
                  disabled
                >
                  Sign up now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
