import React, { useRef, useEffect, useState } from "react";
import Button from "./Button";
import Form from "./Form";

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleCloseEvt(event) {
      if (event.keyCode == 27) {
        callback();
      } else if (ref.current && !ref.current.contains(event.target)) {
        if (event.keyCode === undefined) {
          callback();
        }
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
  useOutsideAlerter(modalRef, props.closeFn);

  return (
    <div className={`modal ${props.open ? "show-modal" : ""}`}>
      <div ref={modalRef} className="modal-window">
        <div className="close-button" onClick={props.closeFn}>
          &times;
        </div>
        <div className={`content ${props.center ? "flex-center" : "padded"}`}>
          {props.children}
        </div>
      </div>
      <style jsx>{`
        .modal {
          position: fixed;
          left: 0;
          top: 0;
          width: 100vw;
          height: 100vh;
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
          width: 30rem;
          border-radius: 0.5rem;
        }

        .content {
          display: flex;
          padding: 0 2rem;
        }

        .close-button {
          width: 1.6rem;
          line-height: 1.6rem;
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

        h1 {
          margin: 0;
        }

        @media screen and (max-width: 50rem) {
          .modal {
            // overflow-y: hidden;
            min-height: 100vh;
          }
          .modal-window {
            height: 100vh;
            min-height: 100vh;
            width: 100vw;
            border-radius: 0;

            // overflow-y: hidden;
          }

          .content {
            height: 110vh;
            padding: 0rem 1rem 1rem 1rem;
            overflow-y: scroll;
            z-index: 1000;
          }

          h4 {
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;
