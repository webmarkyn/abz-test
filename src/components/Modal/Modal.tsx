import React from "react";

import "./Modal.scss";

type Props = {
  modalActive: boolean;
  setModalActive: (val: boolean) => void;
};

const Modal = ({ modalActive, setModalActive }: Props) => {
  return (
    <div
      className={`modal fade ${modalActive ? "active" : ""}`}
      id="ModalCenter"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="ModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Congratulations
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setModalActive(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="loading d-flex justify-content-center">
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          <div className="modal-body">
            You have successfully passed the registration
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-cta px-4"
              onClick={() => setModalActive(false)}
            >
              Great
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
