import React, { useRef, useEffect } from "react";
import Button from "./Button";

function useOutsideAlerter(ref, callback, isOpen) {
  useEffect(() => {
    function handleCloseEvt(event) {
      if (
        event.keyCode == 27 ||
        (ref.current && !ref.current.contains(event.target) && isOpen)
      ) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleCloseEvt);
    document.addEventListener("keydown", handleCloseEvt);
    return () => {
      document.removeEventListener("mousedown", handleCloseEvt);
      document.removeEventListener("keydown", handleCloseEvt);
    };
  }, [ref]);
}

const Modal = (props) => {
  const modalRef = useRef(null);
  useOutsideAlerter(modalRef, props.closeFn, props.open);

  return (
    <div className={`modal ${props.open ? "show-modal" : ""}`}>
      <div ref={modalRef} className="modal-window">
        <div>
          <span className="close-button" onClick={props.closeFn}>
            &times;
          </span>
        </div>
        <div className="content">
          <h1>Send Your Petition</h1>
          <h4>The following (optional) form will help customize your email.</h4>
          <div className="bottom">
            <Button
              dark
              text={
                props.formEmpty
                  ? "Submit Default Peitition"
                  : "Submit Customized Petition"
              }
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .modal {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: 0;
          visibility: hidden;
          transform: scale(1.1);
          transition: visibility 0s linear 0.25s, opacity 0.25s 0s,
            transform 0.25s;
        }

        .modal-window {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 1rem 1rem;
          width: 24rem;
          border-radius: 0.5rem;
        }

        .close-button {
          float: left;
          width: 1.5rem;
          line-height: 1.5rem;
          text-align: center;
          cursor: pointer;
          border-radius: 1rem;
          background-color: lightgray;
        }
        .close-button:hover {
          background-color: darkgray;
        }

        .show-modal {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
          transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
        }

        @media screen and (max-width: 50rem) {
          .modal-window {
            height: 100vh;
            width: 100vw;
            border-radius: 0;
          }

          .content {
            height: 100vh;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;
