import React, { useEffect } from "react";
import { UploadingStateData } from "../../lib/types";

import "./Modal.scss";

type Props = {
  modalActive: boolean;
  setModalActive: (val: boolean) => void;
  uploadingState: UploadingStateData;
};

const Modal = ({
  modalActive,
  setModalActive,
  uploadingState: { loading, error },
}: Props) => {
  useEffect(() => {}, [loading, error]);
  const modalBody = () => {
    if (loading)
      return (
        <div className="loading d-flex justify-content-center">
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          />
        </div>
      );
    if (error)
      return <div className="modal-body text-danger">Error occurred</div>;
    return (
      <div className="modal-body">
        You have successfully passed the registration
      </div>
    );
  };
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
              {loading ? "Please wait" : "Congratulations"}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              disabled={loading}
              onClick={() => setModalActive(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {modalBody()}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-cta px-4"
              onClick={() => setModalActive(false)}
              disabled={loading}
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
