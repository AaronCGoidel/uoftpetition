import React from "react";

const Button = (props) => {
  return (
    <div className="button">
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

          font-size: 32px;
          line-height: 32;

          cursor: pointer;

          transition: 0.2s;
        }

        .button:hover {
          background-color: #ffffff;
          color: var(--color-main);
        }
      `}</style>
    </div>
  );
};

export default Button;
