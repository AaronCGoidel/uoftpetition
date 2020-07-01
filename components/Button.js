import React from "react";

const Button = (props) => {
  return (
    <div className="button" onClick={props.onClick}>
      <p>{props.text}</p>
      <style jsx>{`
        .button {
          min-width: 300px;
          height: 64px;

          border: 3px solid #fff;
          border-radius: 50px;

          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 30px;
          line-height: 32;

          cursor: pointer;

          transition: 0.2s;

          margin: 1rem;
        }

        .button:hover,
        .button:active {
          background-color: #ffffff;
          color: var(--color-main);
        }

        p {
          padding: 0 1rem;
        }
      `}</style>
    </div>
  );
};

export default Button;
