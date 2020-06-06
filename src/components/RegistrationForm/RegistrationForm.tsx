import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import fileValidation from "../../utils/FileValidation";

import "./RegistrationForm.scss";
import { getToken } from "../../lib/api";
import { UploadingStateData } from "../../lib/types";

type Position = {
  id: number;
  name: string;
};

type Props = {
  setModalActive: (val: boolean) => void;
  refreshUsers: () => void;
  setUploadingState: (val: UploadingStateData) => void;
};

const RegistrationForm = ({
  setModalActive,
  refreshUsers,
  setUploadingState,
}: Props) => {
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [positions, setPositions] = useState<Position[]>([]);
  const fileLabelRef = useRef<HTMLLabelElement | null>(null);

  const onSubmit = async (data: any) => {
    setUploadingState({ loading: true, error: false });
    const token = await getToken();
    const formData = new FormData();
    formData.append("name", data.firstName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("position_id", data.position);
    formData.append("photo", data.filePhoto[0]);

    try {
      const res = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        {
          method: "POST",
          body: formData,
          headers: {
            Token: token,
          },
        }
      );
      console.log(res.status);
      if (res.status !== 201) {
        setUploadingState({ loading: false, error: true });
      } else {
        setUploadingState({ loading: false, error: false });
      }
    } catch (e) {
      setUploadingState({ loading: false, error: true });
      throw new Error(e);
    }
    refreshUsers();
    setModalActive(true);
  };

  const fetchPositions = () => {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setPositions(data.positions);
      });
  };

  useEffect(() => {
    fetchPositions();
  }, []);
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
            <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="firstName">Name</label>
                <input
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  ref={register({
                    required: "Invalid first name",
                    maxLength: {
                      value: 16,
                      message: "Your name is too long.",
                    },
                  })}
                />
                <div className="invalid-feedback d-block">
                  <span> {errors.firstName && errors.firstName.message}</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  name="email"
                  placeholder="Email"
                  ref={register({
                    required: "Invalid email",
                    pattern: {
                      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter valid email.",
                    },
                  })}
                />
                <div className="invalid-feedback d-block">
                  <span> {errors.email && errors.email.message}</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="phoneInput">Phone number</label>
                <input
                  type="phone"
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  id="phoneInput"
                  name="phone"
                  placeholder="+380 XX XXXX XX XX"
                  ref={register({
                    required: "Invalid phone number",
                    pattern: {
                      value: /^\+?3?8?(0\d{9})$/,
                      message: "Please enter valid Ukrainian phone number.",
                    },
                  })}
                />
                <small>Enter phone number in open format</small>
                <div className="invalid-feedback d-block">
                  <span> {errors.phone && errors.phone.message}</span>
                </div>
              </div>
              <div className="form-radio">
                <h4 className="form-title">Select your position</h4>
                {positions.length === 0
                  ? null
                  : positions.map((position) => (
                      <div
                        className="custom-control custom-radio"
                        key={position.id}
                      >
                        <input
                          type="radio"
                          className={`custom-control-input ${
                            errors.position ? "is-invalid" : ""
                          }`}
                          value={position.id}
                          id={position.name}
                          name="position"
                          ref={register({
                            required: true,
                          })}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor={position.name}
                        >
                          {position.name}
                        </label>
                      </div>
                    ))}
                <div className="invalid-feedback d-block">
                  <span> {errors.position && errors.position.message}</span>
                </div>
              </div>
              <div className="photo-upload">
                <h4 className="form-title">Photo</h4>
                <div className="custom-file">
                  <input
                    type="file"
                    className={`custom-file-input`}
                    id="customFile"
                    name="filePhoto"
                    ref={register({
                      validate: (item) => fileValidation(item, fileLabelRef),
                    })}
                  />
                  <label
                    className={`custom-file-label`}
                    htmlFor="customFile"
                    ref={fileLabelRef}
                  >
                    Upload your photo
                  </label>
                  <div className="invalid-feedback d-block">
                    <span> {errors.filePhoto && errors.filePhoto.message}</span>
                  </div>
                </div>
              </div>
              <div className="form-submit text-center">
                <button
                  type="submit"
                  className="btn btn-cta text-center"
                  data-toggle="modal"
                  data-target="#exampleModal"
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
