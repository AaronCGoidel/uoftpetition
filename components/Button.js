import React from "react";

const Button = (props) => {
  return (
    <div
      className={`button ${props.dark ? "dark" : "light"}`}
      onClick={props.onClick}
    >
      <p>{props.text}</p>
      <style jsx>{`
        .button {
          width: 300px;
          height: 64px;

          border: 3px solid #fff;
          border-radius: 50px;

          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 20px;

          cursor: pointer;

          transition: 0.2s ease-in-out;

          margin: 1.4rem;
        }

        .light:hover,
        .light:active {
          background-color: #ffffff;
          color: var(--color-main);
        }

        p {
          padding: 0 1rem;
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
    </div>
  );
};

export default Button;
