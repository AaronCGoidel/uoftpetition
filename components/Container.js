import React from "react";

const Container = (props) => {
  return (
    <div className={`flex-center ${props.dark ? "dark" : ""}`}>
      <style jsx>{`
        div {
          width: 100vw;
          height: 100vh;

          display: flex;
          flex-direction: column;

          padding: 3rem;
          margin-right: auto;

          overflow-x: auto;
          overflow-y: hidden;
        }

        div:last-child {
          flex: 1;
        }

        .dark {
          background-color: var(--color-main);
          color: #fff;
        }

        @media screen and (max-width: 60rem) {
          div {
            --pad: 1rem;
          }
        }
      `}</style>
      {props.children}
    </div>
  );
};

export default Container;
