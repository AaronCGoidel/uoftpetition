import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`button ${props.dark ? "dark" : "light"}`}
      onClick={props.onClick}
    >
      <p>{props.text}</p>
      <style jsx>{`
        .button {
          width: 300px;
          // height: 64px;
          height: auto;

          border: 3px solid #fff;
          border-radius: 50px;

          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 1.2em;

          cursor: pointer;

          transition: 0.2s ease-in-out;

          margin: auto;

          background-color: transparent;
          color: #fff;
        }

        .light:hover,
        .light:active {
          background-color: #ffffff;
          color: var(--color-main);
        }

        p {
          padding: 0 1rem;
          margin: 0.7em;
        }

        .dark {
          border-color: var(--color-main);
          background-color: var(--color-main);
          color: #fff;
        }

        .dark:hover,
        .dark:active {
          opacity: 0.8;
        }
      `}</style>
    </button>
  );
};

export default Button;
